import {PERMISSIONS, RESULTS, checkMultiple, requestMultiple} from 'react-native-permissions';

const Permission = [
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.CAMERA,
];

export default async () => {
    const RequestAboutToBeAsk = [];
    let permissionStatus = [];
    checkMultiple(Permission).then(status => {
        if (typeof status === 'object' && Object.keys(status).length > 0) {
            for (const [key, value] of Object.entries(status)) {
                if (value === RESULTS.BLOCKED || value === RESULTS.DENIED) RequestAboutToBeAsk.push(key);
            }
            if (RequestAboutToBeAsk.length > 0) {
                requestMultiple(RequestAboutToBeAsk)
                    .then(result => (permissionStatus = result))
                    .catch(e => console.error('request error', e));
            }
        }
    });
    return permissionStatus;
};
