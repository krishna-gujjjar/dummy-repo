import styled from 'styled-components/native';
import {Button, Text} from '../../component';
import {Typography, Colors} from '../../styles';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${({theme}) => theme.white};
    padding-horizontal: 30px;
    padding-vertical: 60px;
    justify-content: center;
    align-content: center;
`;

export const WelcomeTextContainer = styled.View`
    position: absolute;
    top: 0;
    width: 100%;
`;

export const TextHeading = styled(Text)`
    color: ${({theme}) => theme.dark};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    font-size: ${Typography.FONT_SIZE_36}px;
    text-transform: capitalize;
`;

export const SelectCountryButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 0px;
    right: 0px;
    top: 0px;
    left: 0px;
    align-items: center;
    padding-start: 30px;
    flex-direction: row;
`;

export const SelectCountryText = styled(Text)`
    font-size: ${Typography.FONT_SIZE_16}px;
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM};
    color: ${({theme}) => theme.gray.regular};
    text-transform: capitalize;
`;

export const PhoneInputText = styled.TextInput`
    margin-vertical: 20px;
    background-color: ${({theme}) => theme.white};
    border-radius: 20px;
    padding-vertical: 25px;
    padding-start: 30px;
    elevation: 15;
    font-size: ${Typography.FONT_SIZE_16}px;
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM}px;
    color: ${({theme}) => theme.primary.regular};
`;

export const CountrySelectedText = styled.Text`
    font-size: ${Typography.FONT_SIZE_16}px;
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM};
    color: ${({theme}) => theme.dark};
    text-transform: capitalize;
`;

export const ButtonText = styled(Text)`
    text-align: center;
    color: ${({theme}) => theme.white};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    font-size: ${Typography.FONT_SIZE_24}px;
    text-transform: capitalize;
`;

export const BottomButton = styled(Button)`
    position: absolute;
    bottom: 15%;
    background-color: ${({theme}) => theme.dark};
    width: 90%;
    align-self: center;
    border-radius: 30px;
`;

export const SubHeading = styled(Text)`
    margin-top: 8%;
    color: ${({theme}) => theme.gray.regular};
    width: 76%;
    font-size: ${Typography.FONT_SIZE_18}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    text-transform: capitalize;
`;
