import styled from 'styled-components/native';

import {Typography} from '../../styles';
import {Button, Text} from '../../component';

export const Container = styled.View`
    flex: 1;
`;

export const AlertContainer = styled.View`
    top: 15%;
    left: 5%;
    right: 5%;
    elevation: 20;
    position: absolute;
    border-radius: 12px;
    background: ${({theme}) => theme.primary.dark};
    shadow-color: ${({theme}) => theme.primary.regular};
`;

export const AlertText = styled.Text`
    padding: 5% 8%;
    text-align: center;
    color: ${({theme}) => theme.dark};
    font-size: ${Typography.FONT_SIZE_14}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
`;

export const TopLine = styled.View`
    top: 2%;
    width: 15%;
    height: 3px;
    position: absolute;
    background-color: ${({theme}) => theme.gray.light};
`;

export const TextOff = styled(Text)`
    margin-left: 10px;
    text-transform: capitalize;
    color: ${({theme}) => theme.dark};
    font-size: ${Typography.FONT_SIZE_24}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
`;

export const ButtonText = styled(Text)`
    text-align: center;
    text-transform: capitalize;
    color: ${({theme}) => theme.dark};
    color: ${({theme}) => theme.white};
    font-size: ${Typography.FONT_SIZE_16}px;
    font-family: ${Typography.FONT_FAMILY_HEADING};
`;

export const ButtonOnline = styled(Button)`
    margin-top: 10px;
    border-radius: 15px;
    padding-vertical: 12px;
    padding-horizontal: 20px;
    background-color: ${({theme}) => theme.primary.regular};
`;

export const BottomViewContainer = styled.View`
    left: 3px;
    right: 5px;
    height: 30%;
    width: 100%;
    bottom: -5px;
    position: absolute;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: ${({theme}) => theme.white};
`;

export const ContainerMiddle = styled.View`
    width: 70%;
    align-items: center;
`;

export const ContainerWarning = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
