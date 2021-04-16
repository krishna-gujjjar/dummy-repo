import styled from 'styled-components/native';
import {Button, Text} from '..';
import {Typography} from '../../styles';

export const TopLine = styled.View`
    background-color: ${({theme}) => theme.gray.light};
    position: absolute;
    top: 2%;
    width: 15%;
    height: 3px;
`;

export const TextOff = styled(Text)`
    margin-left: 10px;
    font-size: ${Typography.FONT_SIZE_24}px;
    color: ${({theme}) => theme.dark};
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    text-transform: capitalize;
`;

export const ButtonText = styled(Text)`
    text-align: center;
    color: ${({theme}) => theme.white};
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${Typography.FONT_SIZE_20}px;
    text-transform: capitalize;
`;
export const ButtonOnline = styled(Button)`
    background-color: ${({theme}) => theme.primary.regular};
    margin-top: 10px;
    border-radius: 15px;
    padding-horizontal: 20px;
    padding-vertical: 12px;
`;

export const BottomViewContainer = styled.View`
    background-color: ${({theme}) => theme.white};
    position: absolute;
    border-color: ${({theme}) => theme.gray.light};
    right: 7%;
    padding-vertical: 35px;
    left: 7%;
    bottom: 5%;
    border-width: 1px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const ContainerMiddle = styled.View`
    width: 70%;
    align-items: center;
`;

export const ContainerWarning = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
