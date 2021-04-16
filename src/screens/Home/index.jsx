import React, {useEffect, useState} from 'react';
import {Notifications} from 'react-native-notifications';

import {
    TextOff,
    TopLine,
    Container,
    AlertText,
    ButtonText,
    ButtonOnline,
    AlertContainer,
    ContainerMiddle,
    ContainerWarning,
    BottomViewContainer,
} from './Style';
import {useAuth} from '../../context';
import {OfflineIcon, OnlineIcon, WarningIcon} from '../../utils/Svg';
import {showError, showLog} from '../../utils';
import {DRIVER_STATUS, TIME_CALC} from '../../services/api';
import {currentLocation} from '../../services/location';
import {Alert, BookingReply, Header, Loader, Maps} from '../../component';

export default () => {
    const {user, update} = useAuth();
    const [isOnline, setisOnline] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [notification, setNotification] = useState(null);
    const [location, setLocation] = useState({
        latitude: 25.179652,
        longitude: 75.8785162,
    });
    const [distance, setDistance] = useState('');

    useEffect(() => {
        TIME_CALC(
            {lat: location?.latitude, long: location?.longitude},
            {lat: notification?.pickup_lat, long: notification?.pickup_long},
            response => setDistance(response?.routes[0]?.legs[0]?.distance?.value),
        );
    }, [location, notification]);

    useEffect(() => {
        currentLocation(location =>
            setLocation({
                latitude: location?.coords?.latitude,
                longitude: location?.coords?.longitude,
            }),
        );
    }, []);

    useEffect(() => {
        Notifications.events().registerNotificationReceivedForeground(
            (notification, completion) => {
                showLog(
                    '🚀 ~ file: index.jsx ~ line 40 ~ onForeground ~ notification',
                    notification,
                );
                setNotification(notification?.payload);

                completion({alert: true, sound: true, badge: true});
            },
        );

        Notifications.events().registerNotificationOpened((notification, completion) => {
            showLog('🚀 ~ file: index.js ~ line 45 ~ onOpened ~ notification', notification);
            setNotification(notification?.payload);
            completion();
        });

        Notifications.getInitialNotification()
            .then(notification => {
                showLog('🚀 ~ file: index.jsx ~ line 55 ~ useEffect ~ notification', notification);
                setNotification(notification?.payload);
            })
            .catch(showError);
    }, [Notifications]);

    const _handlePress = () => {
        if (user?.status !== '1') return Alert("Oops! You can't go online now.", 'warn');

        setShowLoader(true);
        DRIVER_STATUS(
            {
                user_id: user?.id,
                location_lat: location?.latitude,
                location_long: location?.longitude,
                is_active: isOnline ? 'offline' : 'online',
            },
            response => {
                showLog('🚀 ~ file: Home.jsx ~ line 32 ~ DriverStatus', response);
                update(response, () => {
                    setisOnline(!isOnline);
                    setShowLoader(false);
                });
            },
        );
    };

    return (
        <Container>
            <Maps latitude={location?.latitude} longitude={location?.longitude} />
            {showLoader && <Loader />}
            <Header showProfile online={isOnline} />

            {user?.status !== '1' && (
                <AlertContainer>
                    <AlertText>
                        {user?.comment ??
                            'Your Profile is in reviewing state, Please wait until your profile is approved.'}
                    </AlertText>
                </AlertContainer>
            )}

            {notification ? (
                <BookingReply
                    customerDetails={{
                        customer_id: notification?.user_id,
                        mobile: notification?.user_mobile,
                        first_name: notification?.user_first_name,
                        profile_pic: notification?.user_profile_pic,
                    }}
                    distance={(distance / 1000).toFixed(1)}
                    kms={notification?.kms}
                    body={notification?.body}
                    title={notification?.title}
                    pickup={{
                        lat: notification?.pickup_lat,
                        long: notification?.pickup_long,
                        text: notification?.pickup_text,
                    }}
                    drop={{
                        lat: notification?.drop_lat,
                        long: notification?.drop_long,
                        text: notification?.drop_text,
                    }}
                    userOrder_id={notification?.userOrder_id}
                    driverOrder_id={notification?.driverOrder_id}
                />
            ) : (
                <BottomViewContainer>
                    <TopLine />
                    <ContainerMiddle>
                        <ContainerWarning>
                            {isOnline ? <OnlineIcon /> : <OfflineIcon />}

                            <TextOff>{isOnline ? "you're online!" : "you're offline!"}</TextOff>
                        </ContainerWarning>
                        <ButtonOnline onPress={_handlePress}>
                            <ButtonText>{isOnline ? 'go offline' : 'go online'}</ButtonText>
                        </ButtonOnline>
                    </ContainerMiddle>
                </BottomViewContainer>
            )}
        </Container>
    );
};
