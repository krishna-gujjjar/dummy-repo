import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {ContainerAuth} from '../../component';
import {useTheme} from '../../context';
import {Colors} from '../../styles';
import {
    ButtonRegister,
    ButtonText,
    SubHeading,
    TextHeading,
    WelcomeTextContainer,
    ButtonContainer,
    TermsTextRowContainer,
    TermsTextLight,
    TermsTextDark,
} from './Style';

export default () => {
    const {colors} = useTheme();
    const navigation = useNavigation();

    return (
        <ContainerAuth
            style={{
                flex: 1,
            }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <WelcomeTextContainer>
                    <TextHeading>Welcome To</TextHeading>
                    <TextHeading style={{color: colors.primary.regular}}>
                        RiderG
                    </TextHeading>
                    <SubHeading>
                        new way to track booking & management,
                    </SubHeading>
                    <SubHeading
                        style={{
                            marginTop: 0,
                        }}>
                        start driving with us
                    </SubHeading>
                </WelcomeTextContainer>

                <View
                    style={{
                        marginTop: '50%',
                    }}>
                    <ButtonContainer
                        onPress={() => navigation.navigate('SignIn')}
                        style={{
                            marginBottom: 20,
                            backgroundColor: colors.gray.dark,
                        }}>
                        <ButtonText
                            style={{
                                color: colors.gray.light,
                            }}>
                            Register
                        </ButtonText>
                    </ButtonContainer>

                    <ButtonContainer
                        onPress={() => navigation.navigate('SignIn')}>
                        <ButtonText>Login</ButtonText>
                    </ButtonContainer>

                    {/* Privacy Policy Text */}
                    <View
                        style={{
                            marginTop: 40,
                        }}>
                        <TermsTextRowContainer>
                            <TermsTextLight>See our </TermsTextLight>
                            <TermsTextDark>Privacy Policy</TermsTextDark>
                        </TermsTextRowContainer>

                        <TermsTextRowContainer>
                            <TermsTextLight> & </TermsTextLight>
                        </TermsTextRowContainer>

                        <TermsTextRowContainer>
                            <TermsTextDark>Terms & Condition</TermsTextDark>
                        </TermsTextRowContainer>
                    </View>
                </View>
            </View>
        </ContainerAuth>
    );
};
