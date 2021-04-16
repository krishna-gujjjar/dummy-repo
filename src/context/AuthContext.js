import {Alert} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';

import {useStorage} from '../hooks';
import {SIGN_IN} from './../services';
import {AppKey} from '../config/Constants';
import {Alert as showAlert} from './../component';

const AuthContext = React.createContext();

export const AuthProvider = props => {
    const [user, setUser] = useState(undefined);
    const [fcmToken, setFcmToken] = useState(undefined);
    const {storageItem, clearStorageItem, updateStorageItem} = useStorage(AppKey.auth);
    const {storageItem: FCM_Token, updateStorageItem: updateTokenStorageItem} = useStorage(
        AppKey.token,
    );

    useEffect(() => {
        if (storageItem !== undefined) setUser(storageItem);
    }, [storageItem]);

    useEffect(() => {
        if (FCM_Token !== undefined && FCM_Token?.token) setFcmToken(FCM_Token?.token);
    }, [FCM_Token]);

    const login = useCallback(
        (data, callback) => {
            SIGN_IN(
                {
                    uid: data?.user?.uid,
                    email: data?.user?.email,
                    app_token: fcmToken,
                    mobile: data?.user?.phoneNumber,
                    profileImage: data?.user?.photoURL,
                    first_name: data?.user?.displayName,
                },
                response => {
                    updateStorageItem(response);
                    setUser(response);
                    showAlert('🔥 Login Successfully 🔥', 'success');
                    callback(response);
                },
            );
        },
        [fcmToken],
    );

    const update = (data = user, callback = () => {}) => {
        updateStorageItem(data);
        setUser(data);
        showAlert('🔥 Update Details Successfully 🔥', 'success');
        callback(data);
    };

    const updateFCMToken = token => {
        updateTokenStorageItem({token: token});
        setFcmToken(token);
    };

    const logout = onSuccess => {
        Alert.alert('Please confirm Logout', 'Are you sure you want to logout from the app', [
            {
                text: 'Yes, Logout',
                onPress: async () => {
                    clearStorageItem();
                    setUser({});
                    showAlert('🔥 LogOut Successfully 🔥', 'success');
                    onSuccess();
                },
            },
            {
                type: 'cancel',
                text: 'No, Stay here',
            },
        ]);
    };

    return (
        <AuthContext.Provider
            value={{user, fcmToken, updateFCMToken, update, login, logout}}
            {...props}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
