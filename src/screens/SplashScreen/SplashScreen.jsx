import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Notifications} from 'react-native-notifications';

import {
    MainText,
    BottomText,
    BottomTextS,
    TextContainer,
    SplashContainer,
    MainTextContainer,
    BottomTextContainer,
} from './Style';
import {useAuth, useTrip} from '../../context';
import {CarFront} from '../../utils/Svg';
import {showLog, showError} from '../../utils';
import {useStorage} from '../../hooks';
import {AppKey} from '../../config/Constants';

export default () => {
    const navigation = useNavigation();
    const {user, fcmToken, updateFCMToken} = useAuth();
    const {storageItem} = useStorage(AppKey.trip);

    useEffect(() => {
        showLog('User => ', user);
    }, [user]);

    useEffect(() => {
        if (user !== undefined) {
            const time = setTimeout(() => {
                if (user === null || user.length === 0)
                    return navigation.replace('LoginOrRegister');
                if (storageItem !== null && storageItem !== undefined && storageItem !== '') {
                    console.log('StorageItem ===>', storageItem);
                    navigation.replace('RootDrawer', {
                        screen: 'Home',
                        params: {
                            screen: 'OngoingTrip',
                        },
                    });
                } else if (user?.driver_id && user?.vehicle_id) navigation.replace('RootDrawer');
                else if (user?.driver_id && !user?.vehicle_id) navigation.replace('RegisterTwo');
                else navigation.replace('RegisterOne');
            }, 2000);
            return () => clearTimeout(time);
        }
    }, [user]);

    useEffect(() => {
        Notifications.events().registerRemoteNotificationsRegistered(event => {
            showLog('🚀 ~ file: App.js ~ line 34 ~ onRegistered ~ FCM Token', event.deviceToken);
            if (fcmToken !== undefined || fcmToken === null || fcmToken !== event.deviceToken)
                updateFCMToken(event.deviceToken);
        });
    }, []);

    return (
        <SplashContainer>
            <MainTextContainer>
                <MainText>reach safe & quick</MainText>
            </MainTextContainer>

            <BottomTextContainer>
                <CarFront />
                <TextContainer>
                    <BottomText>RiderG</BottomText>
                    <BottomTextS>For Driver</BottomTextS>
                </TextContainer>
            </BottomTextContainer>
        </SplashContainer>
    );
};
