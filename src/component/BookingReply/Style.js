import styled from 'styled-components/native';

import {Button, Text} from '..';
import {Typography} from '../../styles';

export const TextOff = styled(Text)`
    margin-left: 10px;
    text-transform: capitalize;
    color: ${({theme}) => theme.dark};
    font-size: ${Typography.FONT_SIZE_24}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
`;

export const ButtonText = styled(Text)`
    text-align: center;
    color: ${({theme}) => theme.white};
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM};
    font-size: ${Typography.FONT_SIZE_20}px;
    text-transform: capitalize;
`;
export const ButtonContainer = styled(Button)`
    border-radius: 15px;
    padding-vertical: 14px;
    padding-horizontal: 35px;
    background-color: ${({theme}) => theme.primary.regular};
`;

export const BottomViewContainer = styled.View`
    left: 7%;
    right: 7%;
    bottom: 5%;
    border-width: 1px;
    position: absolute;
    border-radius: 30px;
    align-items: center;
    padding-vertical: 20px;
    justify-content: center;
    background-color: ${({theme}) => theme.white};
    border-color: ${({theme}) => theme.gray.light};
`;

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`;

export const NumberText = styled.Text`
    font-size: ${Typography.FONT_SIZE_36}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    text-align: center;
`;

export const KmContainer = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;

export const TextPlace = styled.Text`
    font-size: ${Typography.FONT_SIZE_20}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    color: ${({theme}) => theme.dark};
`;

export const TextLight = styled.Text`
    font-size: ${12}px;
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM};
    color: ${({theme}) => theme.gray.regular};
`;

export const SubContainerLeft = styled.View`
    height: 100%;
    justify-content: space-around;
    width: 60%;
`;

export const SubContainer = styled.View`
    width: 80%;
    height: 40px;
`;

export const ContainerBottom = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`;

export const SubContainerRight = styled.View`
    height: 100%;
    width: 40%;
    align-items: flex-end;
`;
