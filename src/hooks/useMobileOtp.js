import auth from '@react-native-firebase/auth';
import {showError} from '../utils';

export default () => {
    const _sendOtp = async mobileNumber => {
        try {
            return await auth().signInWithPhoneNumber(mobileNumber);
        } catch (error) {
            showError(error);
        }
    };

    const _confirmOtp = (otp, confirmation) => {
        try {
            return confirmation.confirm(otp);
        } catch (error) {
            showError(error);
        }
    };

    return {sendOtp: _sendOtp, confirmOtp: _confirmOtp};
};
