import {View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {
    BottomButton,
    ButtonText,
    SubHeading,
    TextHeading,
    WelcomeTextContainer,
} from './Style';
import {Colors} from '../../styles';
import {useMobileOtp} from '../../hooks';
import CountryPicker from './CountryPicker';
import {Alert, ContainerAuth, Loader, TextInput} from '../../component';

export default () => {
    const phone = useRef('');
    const {sendOtp} = useMobileOtp();
    const navigation = useNavigation();
    const [country, setCountry] = useState('India');
    const [showLoader, setShowLoader] = useState(false);
    const [countryCode, setCountryCode] = useState('91');
    const [openCountryPicker, setOpenCountryPicker] = useState(false);

    const _handleSubmit = () => {
        setShowLoader(true);
        if (!(country.length > 0 && phone.current.length > 0)) {
            setShowLoader(false);
            return Alert(
                country.length > 0
                    ? 'Please Write your Phone Number'
                    : 'Select Your Country',
                'error',
            );
        }
        sendOtp(`+${countryCode}${phone.current}`)
            .then(value => {
                setShowLoader(false);
                Alert('OTP Sent successfully');
                navigation.navigate('OtpVerification', {data: value});
            })
            .catch(error => {
                setShowLoader(false);
                Alert(JSON.stringify(error), 'error');
            });
    };

    const onSelect = value => {
        setCountry(value.name);
        setCountryCode(value.callingCode);
        setOpenCountryPicker(false);
    };

    return (
        <ContainerAuth>
            {showLoader && <Loader />}
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <WelcomeTextContainer>
                    <TextHeading>Welcome To</TextHeading>
                    <TextHeading style={{color: Colors.default.primary.regular}}>
                        RiderG
                    </TextHeading>
                    <SubHeading>
                        New way to track booking & management,
                    </SubHeading>
                    <SubHeading style={{marginTop: '0%'}}>
                        start driving with us
                    </SubHeading>
                </WelcomeTextContainer>

                <View style={{ width: '100%' }}>
                    <CountryPicker
                        country={country}
                        onSelect={onSelect}
                        countryCode={countryCode}
                        openCountryPicker={openCountryPicker}
                        setOpenCountryPicker={setOpenCountryPicker}
                    />

                    <TextInput
                        keyboardType="numeric"
                        placeholder="Mobile No."
                        onTextChange={value => (phone.current = value)}
                    />
                </View>

                <BottomButton onPress={_handleSubmit}>
                    <ButtonText>send otp</ButtonText>
                </BottomButton>
            </View>
        </ContainerAuth>
    );
};
