import styled from 'styled-components/native';
import {Button} from '..';
import {Typography} from '../../styles';

export const BottomViewContainer = styled.View`
    background-color: ${({theme}) => theme.white};
    position: absolute;
    border-color: ${({theme}) => theme.gray.light};
    right: 7%;
    padding-vertical: 20px;
    left: 7%;
    bottom: 5%;
    height: 22%;
    border-width: 1px;
    border-radius: 30px;
    align-items: center;
    justify-content: space-evenly;
`;

export const ContainerBottom = styled.View`
    flex-direction: row;
    width: 90%;
    justify-content: space-evenly;
`;

export const ButtonText = styled.Text`
    text-align: center;
    color: ${({theme}) => theme.white};
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${Typography.FONT_SIZE_20}px;
    /* text-transform: capitalize; */
`;
export const ButtonContainer = styled(Button)`
    background-color: ${({theme}) => theme.primary.regular};
    border-radius: 15px;
    padding-horizontal: 25px;
    padding-vertical: 10px;
`;

export const PickUpText = styled.Text`
    font-size: ${Typography.FONT_SIZE_14}px;
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM};
    color: ${({theme}) => theme.gray.regular};
`;

export const Location = styled.Text`
    font-size: ${Typography.FONT_SIZE_20}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    color: ${({theme}) => theme.backgroundDark};
`;
