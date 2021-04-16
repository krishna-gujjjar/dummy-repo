import styled from 'styled-components/native';
import {Button, Text} from '../../component';
import {Typography} from '../../styles';

export const Container = styled.View`
    flex: 1;
    padding: 2% 3%;
    background: ${({theme}) => theme.white};
`;

export const TextHeading = styled(Text)`
    align-self: center;
    font-size: ${Typography.FONT_SIZE_36}px;
    color: ${({theme}) => theme.dark};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    text-transform: capitalize;
`;

export const Header = styled.View`
    margin-top: 3%;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`;

export const LanguageText = styled(Text)`
    margin-left: 20px;
    font-size: ${Typography.FONT_SIZE_20}px;
    color: ${({theme}) => theme.dark};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    text-transform: capitalize;
`;

export const ButtonContainer = styled(Button)`
    padding-vertical: 30px;
    padding-horizontal: 20px;
    margin-horizontal: 10px;
    elevation: 4;
    margin-top: 15px;
    flex-direction: row;
    align-content: center;
    align-items: center;
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

export const Buttons = styled.Pressable``;
