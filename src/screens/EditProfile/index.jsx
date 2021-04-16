import RNRestart from 'react-native-restart';
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';

import InputBox from './InputBox';
import {showLog} from '../../utils';
import {useAuth, useTheme} from '../../context';
import ImageUploader from './ImageUploader';
import {EDIT_PROFILE} from '../../services/api';
import {Alert, BackHeader, Loader} from '../../component';
import {ButtonText, WelcomeText, ButtonUpdate} from './Style';

export default () => {
    const {colors} = useTheme();
    const {user, update} = useAuth();
    const [lastName, setlastName] = useState('');
    const [firstName, setfirstName] = useState('');
    const [isLoading, setisLoading] = useState(null);
    const [showLoader, setShowLoader] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        if (user !== undefined) {
            setisLoading(true);
            setProfileImage(user?.profile_pic);
            setfirstName(user?.first_name);
            setlastName(user?.last_name);
        }
    }, [user]);

    const handleUpdate = () => {
        if (isLoading) {
            if (!firstName) return Alert('Please Write your first name', 'warn');
            if (!lastName) return Alert('Please write Last Name', 'warn');
            setShowLoader(true);
            EDIT_PROFILE(
                {
                    user_id: user?.id,
                    first_name: firstName,
                    last_name: lastName,
                    profile_pic: profileImage,
                },
                response => {
                    showLog(response, '🚀 ~ file: index.jsx ~ line 42 ~ handleUpdate ~ response');
                    update(response, () => {
                        setShowLoader(false);
                        RNRestart.Restart();
                    });
                },
            );
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
            enabled={Platform.OS === 'ios'}
            style={{
                backgroundColor: colors.white,
                flex: 1,
                padding: '12%',
            }}>
            {showLoader && <Loader />}
            <BackHeader text="Edit Profile" />

            <ImageUploader profilePic={profileImage} setProfilePic={setProfileImage} />
            <WelcomeText>Edit your basic details here.</WelcomeText>

            <InputBox top name="First Name" value={firstName} onChangeValue={setfirstName} />
            <InputBox name="Last Name" value={lastName} onChangeValue={setlastName} />

            <ButtonUpdate onPress={handleUpdate}>
                <ButtonText>Update</ButtonText>
            </ButtonUpdate>
        </KeyboardAvoidingView>
    );
};
