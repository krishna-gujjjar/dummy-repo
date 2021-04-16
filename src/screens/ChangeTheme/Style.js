import styled from 'styled-components/native';
import {Text} from '../../component';
import {Typography} from '../../styles';

export const TextHeading = styled(Text)`
    align-self: center;
    font-size: ${Typography.FONT_SIZE_32}px;
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
    text-transform: capitalize;
`;

export const TextSub = styled(Text)`
    align-self: center;
    width: 60%;
    margin-top: 6px;
    margin-bottom: 40px;
    text-align: center;
    font-size: ${Typography.FONT_SIZE_18}px;
    color: ${({theme}) => theme.gray.regular};
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM};
    text-transform: capitalize;
`;

export const ThemeText = styled(Text)`
    margin-left: 20px;
    font-size: ${Typography.FONT_SIZE_20}px;
    color: ${({theme}) => theme.dark};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    text-transform: capitalize;
`;

export const Container = styled.View`
    flex: 1;
    padding: 2% 5%;
    background: ${({theme}) => theme.white};
`;

export const ThemeListContainer = styled.Pressable`
    border-width: 5px;
    border-color: ${({theme}) => theme.dark};
    border-radius: 28px;
    padding: 8% 2%;
    margin-bottom: 20%;
    position: relative;
`;

export const Button = styled.Pressable``;
