import styled from 'styled-components/native';
import {Text} from '../../component';
import {Typography} from '../../styles';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${({theme}) => theme.white};
    padding: 12%;
`;

export const ImageUploadContainer = styled.View`
    padding: 10px;
    margin-top: 50px;
    align-self: center;
    elevation: 10;
`;

export const ProfileImage = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: ${({theme}) => theme.primary.regular};
`;

export const ProfileImagePlaceholder = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: ${({theme}) => theme.primary.regular};
`;

export const UploadProfileIcon = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    justify-content: center;
    align-items: center;
    elevation: 3;
    background-color: ${({theme}) => theme.white};
`;

export const WelcomeText = styled.Text`
    width: 85%;
    align-self: center;
    text-align: center;
    color: ${({theme}) => theme.shadow.color};
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${Typography.FONT_SIZE_20}px;
    margin-top: 30px;
    text-transform: capitalize;
`;

export const TextInputContainer = styled.View`
    border-bottom-color: ${({theme}) => theme.gray.regular};

    border-bottom-width: 1px;
    margin-top: 20px;
`;

export const Label = styled(Text)`
    color: ${({theme}) => theme.gray.dark};
    font-family: ${Typography.FONT_FAMILY_HEADING}px;
    font-size: ${Typography.FONT_SIZE_14}px;
    text-transform: capitalize;
`;

export const TextInput = styled.TextInput`
    padding-bottom: 5px;
    color: ${({theme}) => theme.dark};
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    /* font-weight: bold; */
    font-size: ${Typography.FONT_SIZE_20}px;
`;

export const ButtonUpdate = styled.TouchableOpacity`
    position: absolute;
    width: 100%;
    bottom: 5%;
    align-self: center;
    elevation: 9;
    align-items: center;
    border-radius: 20px;
    padding-vertical: 20px;
    background-color: ${({theme}) => theme.backgroundDark};
`;
export const Button = styled.TouchableOpacity`
    width: 100%;
    bottom: 5%;
    align-self: center;
    elevation: 3;
    align-items: flex-start;
    border-radius: 10px;
    margin-top: 10px;
    padding-horizontal: 15px;
    padding-vertical: 20px;
    background-color: ${({theme}) => theme.white};
`;

export const ButtonText = styled(Text)`
    color: ${({theme}) => theme.white};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    font-size: ${Typography.FONT_SIZE_24}px;
    text-transform: capitalize;
`;
