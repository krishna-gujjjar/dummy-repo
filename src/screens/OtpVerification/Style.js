import styled from 'styled-components/native';
import {Text, Button} from '../../component';
import {Typography} from '../../styles';

export const OtpText = styled(Text)`
    margin-top: 15%;
    color: ${({theme}) => theme.dark};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    font-size: ${Typography.FONT_SIZE_32}px;
    text-transform: capitalize;
`;

export const ButtonContainer = styled(Button)`
    background-color: ${({theme}) => theme.dark};
`;

export const ConfirmText = styled(Text)`
    text-align: center;
    font-size: ${Typography.FONT_SIZE_24}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    color: ${({theme}) => theme.white};
    text-transform: capitalize;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.white};
    padding-horizontal: 30px;
    padding-vertical: 100px;
`;

export const CircleBack = styled(Button)`
    padding-vertical: 0px;
    margin-top: 0px;
    align-self: flex-start;
`;
