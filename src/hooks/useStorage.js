import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getJson} from '../utils/Utils';
import {showError} from '../utils';

export default key => {
    const [storageItem, setStorageItem] = useState(undefined);

    useEffect(() => {
        getStorageItem();
    }, []);

    const getStorageItem = async () => {
        try {
            await AsyncStorage.getItem(key, (error, result) => {
                if (error !== null) throw new Error(JSON.stringify(error));
                setStorageItem(getJson(result, true));
            });
        } catch (error) {
            showError(error);
        }
    };

    const updateStorageItem = async data => {
        try {
            if (typeof data === 'object') data = JSON.stringify(data);
            if (typeof data === 'string') {
                await AsyncStorage.setItem(key, data, error => {
                    if (error !== null) throw new Error(JSON.stringify(error));
                    setStorageItem(getJson(data, true));
                });
            } else throw new Error('Invalid Type of Data');
        } catch (e) {
            showError(e);
        }
        return data;
    };

    const clearStorageItem = async () => {
        try {
            await AsyncStorage.removeItem(key, error => {
                if (error !== null) throw new Error(JSON.stringify(error));
                setStorageItem(null);
            });
        } catch (error) {
            showError(error);
        }
    };

    return {storageItem, updateStorageItem, clearStorageItem};
};
