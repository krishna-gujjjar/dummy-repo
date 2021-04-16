import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {useNavigation, useRoute} from '@react-navigation/core';

import {StartDrive} from '..';
import {showLog} from '../../utils';
import {useAuth, useTrip} from '../../context';
import {Container, DrawerIcon} from './Style';
import {UPDATE_BOOKING} from '../../services/api';
import {Alert, CompleteCard, MapAdvance, PickUpOrCall} from '../../component';

import {STATUS} from '../../config/Constants';

export default () => {
    const {user} = useAuth();
    const {trip, updateTrip} = useTrip();
    const navigation = useNavigation();
    const [tripStatus, setTripStatus] = useState(null);
    const [pickUpCard, setPickUpCard] = useState(true);
    const [customerCode, setCustomerCode] = useState('');
    const [completeCard, setCompleteCard] = useState(false);
    const [startDriveCard, setStartDriveCard] = useState(false);
    const [navigationScreen, setNavigationScreen] = useState(false);
    const [currentLatitude, setCurrentLatitude] = useState(25.22386072684);
    const [currentLongitude, setCurrentLongitude] = useState(75.880796257406);
    const [currentPosition, setCurrentPosition] = useState({
        accuracy: 0,
        altitude: 0,
        heading: 0,
        latitude: 25.1241301,
        longitude: 75.8437091,
        speed: 0,
    });

    useEffect(() => {
        console.log('TRIP => ', trip);
        console.log('User => ', user);
        console.log('TripStatus =>', tripStatus);
        setTripStatus(trip?.status);
    }, [user, tripStatus, trip]);

    // status: null,
    // customer_mobile: null,
    // customer_first_name: null,
    // customer_profile_pic: null,
    // order_id: null,
    // from: {
    //     location: {latitude: null, longitude: null, latitudeDelta: null, longitudeDelta: null},
    //     pickUpText: null,
    // },
    // to: {
    //     location: {latitude: null, longitude: null, latitudeDelta: null, longitudeDelta: null},
    //     dropText: null,
    // },

    const _handlePickUpPress = () => {
        UPDATE_BOOKING(
            {
                user_id: user?.id,
                order_id: trip?.order_id,
                status: 'pickUp',
            },
            (response, error) => {
                if (error) return;
                updateTrip({
                    ...trip,
                    status: STATUS.PICKED_UP,
                });
                showLog('OngoingTrip pickup 36 => ', response);
                setTripStatus('ongoing');
            },
        );
    };

    const _handleStartDrive = () => {
        if (!customerCode) return Alert('Please Write OTP provided by Customer');

        UPDATE_BOOKING(
            {
                user_id: user?.id,
                order_id: trip?.order_id,
                status: 'ongoing',
                otp: customerCode,
            },
            (response, error) => {
                if (error) return;
                updateTrip({
                    ...trip,
                    status: STATUS.ONGOING,
                });
                showLog('OngoingTrip startDrive 55 => ', response);
                setTripStatus('complete');
                setNavigationScreen(true);
            },
        );
    };

    const _handleCompleteRide = () => {
        UPDATE_BOOKING(
            {
                user_id: user?.id,
                order_id: trip?.order_id,
                status: 'complete',
            },
            (response, error) => {
                if (error) return;
                updateTrip(null);
                showLog('OngoingTrip pickup 36 => ', response);
                navigation.navigate('Rating');
            },
        );
    };

    useEffect(() => {
        setInterval(() => {
            Geolocation.watchPosition(
                position => {
                    setCurrentLatitude(Number(position?.coords?.latitude));
                    setCurrentLongitude(Number(position?.coords?.longitude));
                    setCurrentPosition(position?.coords);
                    console.log(position);
                },
                error => console.log('error ', error.message),
                {
                    enableHighAccuracy: false,
                    timeout: 20000,
                    maximumAge: 1000,
                    distanceFilter: 10,
                },
            );
        }, 3000);
    }, []);

    return (
        <Container>
            {!navigationScreen ? (
                <MapAdvance
                    position={currentPosition}
                    fromlatitude={currentLatitude}
                    fromlongitude={currentLongitude}
                    droplatitude={trip?.from?.location?.latitude ?? 25.28386072684}
                    droplongitude={trip?.from?.location?.longitude ?? 75.820796257406}
                />
            ) : (
                <MapAdvance
                    position={currentPosition}
                    fromlatitude={currentLatitude}
                    fromlongitude={currentLongitude}
                    droplatitude={trip?.to?.location?.latitude ?? 25.28386072684}
                    droplongitude={trip?.to?.location?.longitude ?? 75.820796257406}
                />
            )}

            {tripStatus === STATUS.ONGOING && <CompleteCard onClick={_handleCompleteRide} />}
            {tripStatus === STATUS.ACCEPT && <PickUpOrCall pickupPress={_handlePickUpPress} />}

            {tripStatus === STATUS.PICKED_UP && (
                <StartDrive onClick={_handleStartDrive} customerCode={setCustomerCode} />
            )}

            <DrawerIcon />
        </Container>
    );
};
