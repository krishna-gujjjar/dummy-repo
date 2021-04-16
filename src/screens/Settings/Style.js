import styled from 'styled-components/native';
import {Button, Text} from '../../component';
import {Typography} from '../../styles';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.white};
`;

export const Header = styled.View`
    margin-top: 3%;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`;
export const TextHeading = styled(Text)`
    align-self: center;
    font-size: ${Typography.FONT_SIZE_36}px;
    color: ${({theme}) => theme.dark};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    text-transform: capitalize;
`;

export const TextSub = styled(Text)`
    align-self: center;
    width: 80%;
    margin-vertical: 6px;
    text-align: center;
    font-size: ${Typography.FONT_SIZE_18}px;
    color: ${({theme}) => theme.gray.regular};
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM};
    text-transform: capitalize;
`;

export const ButtonText = styled(Text)`
    font-size: ${Typography.FONT_SIZE_20}px;
    color: ${({theme}) => theme.white};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    text-transform: capitalize;
`;

export const Buttons = styled.Pressable`
    padding-vertical: 20px;
`;

export const ButtonContainer = styled(Button)`
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({theme}) => theme.dark};
    margin-horizontal: 20px;
    margin-top: 20px;
    padding-vertical: 30px;
    padding-horizontal: 5%;
    elevation: 9;
`;
