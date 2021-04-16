import styled from 'styled-components';
import {Button, Text} from '../../component';
import {Typography} from '../../styles';

export const TextSub = styled(Text)`
    align-self: center;
    width: 65%;
    margin-vertical: 6px;
    text-align: center;
    font-size: ${Typography.FONT_SIZE_18}px;
    color: ${({theme}) => theme.gray.regular};
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    text-transform: capitalize;
`;

export const BidContainer = styled.View`
    height: 30%;
    position: absolute;
    bottom: 0px;
    width: 100%;
    elevation: 10;
    background-color: ${({theme}) => theme.white};
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    align-self: center;
    z-index: 1;
    padding-bottom: 20%;
`;

export const BidTopText = styled.Text`
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${Typography.FONT_SIZE_24}px;
    color: ${({theme}) => theme.gray.dark};
    text-align: center;
    margin-top: 20px;
`;

export const BottomButton = styled(Button)`
    background-color: ${({theme}) => theme.dark};
    width: 70%;
    align-self: center;
    border-radius: 30px;
    elevation: 15;
    z-index: 3;
`;

export const ButtonText = styled(Text)`
    text-align: center;
    color: ${({theme}) => theme.white};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    font-size: ${Typography.FONT_SIZE_24}px;
    text-transform: capitalize;
`;
