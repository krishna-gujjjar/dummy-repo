import styled from 'styled-components/native';
import {Button, Text} from '../../component';
import {Typography, Colors} from '../../styles';

export const SubHeading = styled(Text)`
    margin-top: 15%;
    color: ${({theme}) => theme.gray.regular};
    width: 100%;
    text-align: center;
    font-size: ${Typography.FONT_SIZE_18}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
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

export const ButtonText = styled(Text)`
    text-align: center;
    color: ${({theme}) => theme.white};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    font-size: ${Typography.FONT_SIZE_24}px;
    text-transform: capitalize;
`;
