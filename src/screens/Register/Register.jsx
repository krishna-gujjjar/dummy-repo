import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {useStorage} from '../../hooks';
import {AppKey} from '../../config/Constants';
import {EDIT_PROFILE} from '../../services/api';
import {BottomButton, ButtonText, SubHeading} from './Style';
import {Alert, BackHeader, ContainerAuth, Loader, TextInput} from '../../component';
import {showError} from '../../utils';

export default () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const {storageItem} = useStorage(AppKey.auth);

    const _handleConfirm = () => {
        if (!firstName) return Alert('Add your First Name');
        if (!lastName) return Alert('Add your Last Name');
        if (!userEmail) return Alert('Add your Email Address');

        setShowLoader(true);
        EDIT_PROFILE(
            {
                user_id: storageItem?.id,
                first_name: firstName,
                last_name: lastName,
                email: userEmail,
            },
            response => {
                setShowLoader(false);
                showError('🚀 ~ file: Register.jsx ~ line 28 ~ EditProfile', response);
                navigation.navigate('RegisterOne');
            },
        );
    };

    return (
        <ContainerAuth
            styleLeft={{left: '-50%', top: '20%'}}
            styleRight={{bottom: '5%', right: '-67%', transform: [{rotate: '-10deg'}]}}>
            {showLoader ? <Loader /> : <></>}

            <BackHeader text="Register" />
            <SubHeading>Register Now</SubHeading>
            <SubHeading style={{marginTop: 0, marginBottom: '10%'}}>Start Driving with Us</SubHeading>

            <TextInput onTextChange={setFirstName} placeholder="First Name" />
            <TextInput onTextChange={setLastName} placeholder="Last Name" />
            <TextInput onTextChange={setUserEmail} placeholder="Email" />

            <BottomButton onPress={_handleConfirm}>
                <ButtonText>Next</ButtonText>
            </BottomButton>
        </ContainerAuth>
    );
};
