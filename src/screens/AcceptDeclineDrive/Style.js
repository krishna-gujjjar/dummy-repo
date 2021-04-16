import styled from 'styled-components/native';
import {Button, Text} from '../../component';
import {Typography} from '../../styles';

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
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM};
    font-size: ${Typography.FONT_SIZE_20}px;
    text-transform: capitalize;
`;
export const ButtonContainer = styled(Button)`
    background-color: ${({theme}) => theme.primary.regular};
    border-radius: 15px;
    padding-horizontal: 35px;
    padding-vertical: 14px;
`;

export const BottomViewContainer = styled.View`
    background-color: ${({theme}) => theme.white};
    position: absolute;
    border-color: ${({theme}) => theme.gray.light};
    right: 7%;
    padding-vertical: 20px;
    left: 7%;
    bottom: 5%;
    border-width: 1px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
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
    justify-content: space-between;
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
    align-items: flex-end;
`;
