import {View, LogBox} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';

import {BackIcon} from '../../utils/Svg';
import {useMobileOtp} from '../../hooks';
import {Colors, Typography} from '../../styles';
import {useAuth, useTheme} from '../../context';
import {Alert, ContainerAuth, Loader} from '../../component';
import {ConfirmText, OtpText, CircleBack, ButtonContainer} from './Style';
import {showError} from '../../utils';

export default ({}) => {
    const {login} = useAuth();
    const {params} = useRoute();
    const {colors} = useTheme();
    const navigation = useNavigation();
    const [OTP, setOTP] = useState('');
    const {confirmOtp} = useMobileOtp();
    const [showLoader, setShowLoader] = useState(false);
    const [OtpVerifificationData, setOtpVerifificationData] = useState({});

    useEffect(() => {
        setOtpVerifificationData(params?.data);
    }, []);

    const _handleConfirm = (otp, confirmation) => {
        setShowLoader(true);
        confirmOtp(otp, confirmation)
            .then(response =>
                login(response, response => {
                    setShowLoader(false);
                    if (response.length < 1) navigation.replace('SignIn');
                    else
                        navigation.replace(
                            response?.first_name?.length > 0
                                ? response?.driver_id && response?.vehicle_id
                                    ? 'RootDrawer'
                                    : 'RegisterOne'
                                : 'Register',
                        );
                }),
            )
            .catch(error => {
                showError(error);
                setShowLoader(false);
                Alert(JSON.stringify(error), 'error');
            });
    };

    return (
        <ContainerAuth>
            <CircleBack>
                <BackIcon fill={colors.dark} width={40} height={40} />
            </CircleBack>

            <View style={{flex: 1, justifyContent: 'space-between'}}>
                {/* Text & OTP Input    */}
                <View style={{height: '40%'}}>
                    <OtpText>Your OTP</OtpText>

                    <OtpInputs
                        inputContainerStyles={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}
                        inputStyles={{
                            width: 45,
                            height: 55,
                            marginHorizontal: 5,
                            backgroundColor: 'white',
                            elevation: 10,
                            borderRadius: 10,
                            textAlign: 'center',
                            color: Colors.default.dark,
                            fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                            fontSize: Typography.FONT_SIZE_24,
                        }}
                        handleChange={code => setOTP(code)}
                        numberOfInputs={6}
                    />
                </View>

                {/* Bottom Button */}
                <ButtonContainer onPress={() => _handleConfirm(OTP, OtpVerifificationData)}>
                    <ConfirmText>Confirm</ConfirmText>
                </ButtonContainer>
            </View>
            {showLoader && <Loader />}
        </ContainerAuth>
    );
};
