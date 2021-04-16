import React, {useEffect} from 'react';
import firebase from '@react-native-firebase/app';

import Routes from './src/Routes';
import AppProvider from './src/context';
import {permissions} from './src/services';
import {FIREBASE_CONFIG} from './src/config/Constants';
import {HideWarnings, showError, showLog} from './src/utils';
import {Notifications} from 'react-native-notifications';

export default () => {
    HideWarnings();

    useEffect(() => {
        if (!firebase || !firebase.apps || !firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        permissions()
            .then(permission => showLog('🚀 ~ file: App.js ~ line 22 ~ useEffect ~ permission', permission))
            .catch(showError);
    }, []);

    useEffect(() => {
        if (firebase) {
            Notifications.registerRemoteNotifications();

            Notifications.events().registerNotificationReceivedBackground((notification, completion) => {
                showLog('🚀 ~ file: App.js ~ line 45 ~ Notifications.events ~ notification', notification);
                completion(notification);
            });

            Notifications.events().registerRemoteNotificationsRegistrationFailed(showError);
        }
    }, []);

    return (
        <AppProvider>
            <Routes />
        </AppProvider>
    );
};
