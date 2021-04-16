import styled from 'styled-components/native';
import {Button, Text} from '../../component';
import {Typography} from '../../styles';

export const Texting = styled(Text)``;

export const HowWasTripText = styled(Text)`
    margin-vertical: 20px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${Typography.FONT_SIZE_20}px;
    align-self: center;
    color: ${({theme}) => theme.dark};
`;

export const CommentInput = styled.TextInput`
    margin-vertical: 20px;
    background-color: ${({theme}) => theme.white};
    height: 160px;
    border-radius: 30px;
    padding: 25px;
    opacity: 0.8;
    text-align-vertical: top;
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM};
    font-size: ${Typography.FONT_SIZE_18}px;
`;

export const BottomContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const TextButton = styled(Text)`
    color: ${({theme}) => theme.white};
    font-size: ${Typography.FONT_SIZE_20}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
`;

export const CloseButtonContainer = styled(Button)`
    margin-top: 0px;
    background-color: ${({theme}) => theme.gray.regular};
    padding-vertical: 8px;
    border-radius: 14px;
    padding-horizontal: 20px;
`;

export const SendButtonContainer = styled(Button)`
    margin-top: 0px;
    background-color: ${({theme}) => theme.dark};
    padding-vertical: 12px;
    border-radius: 18px;
    padding-horizontal: 26px;
`;

export const TextHeading = styled.Text`
    align-self: center;
    margin-left: 20px;
    font-size: ${Typography.FONT_SIZE_26}px;
    color: ${({theme}) => theme.dark};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    text-transform: capitalize;
`;

export const ProfileImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    border-width: 3px;
    border-color: ${({theme}) => theme.dark};
    background-color: ${({theme}) => theme.primary.regular};
`;
