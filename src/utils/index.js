import {LogBox} from 'react-native';
import {Alert} from '../component';
import {getJson, isEmpty} from './Utils';

export {getJson, isEmpty};

/** Hide Console Wranings
 * @returns void */
export const HideWarnings = () =>
    LogBox.ignoreLogs(['Require cycle', 'Non-serializable values were found in the navigation state']);

export const showError = error => {
    if (__DEV__) console.log(error);
    if (typeof error === 'object') {
        if (error?.message) error = error.message;
        else error = JSON.stringify(error);
    }
    return Alert(error, 'error');
};

export const showLog = (name, log = false) => {
    if (__DEV__) console.log(name, log);
};
