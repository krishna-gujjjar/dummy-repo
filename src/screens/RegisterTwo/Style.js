import styled from 'styled-components/native';
import {Button, Text} from '../../component';
import {Typography, Colors} from '../../styles';
import {BackgroundShape} from '../../utils/Svg';

export const SubHeading = styled(Text)`
    margin-top: 5%;
    color: ${({theme}) => theme.gray.regular};
    width: 100%;
    text-align: center;
    font-size: ${Typography.FONT_SIZE_18}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    text-transform: capitalize;
`;

export const BottomButton = styled(Button)`
    background-color: ${({theme}) => theme.dark};
    width: 90%;
    margin-top: 25%;
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

export const BackgroundLeft = styled(BackgroundShape)`
    position: absolute;
    left: -50%;
    top: 2%;
    transform: rotate(12deg);
`;

export const BackgroundRight = styled(BackgroundShape)`
    position: absolute;
    right: -60%;
    top: 30%;
    transform: rotate(-10deg);
`;

export const BackgroundLeftBottom = styled(BackgroundShape)`
    position: absolute;
    bottom: -13%;
    left: -40%;
    transform: rotate(95deg);
`;
