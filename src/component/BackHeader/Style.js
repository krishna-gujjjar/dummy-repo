import styled from 'styled-components/native';
import {Button, Text} from '..';
import {Colors, Typography} from '../../styles';

export const TextHeading = styled(Text)`
    align-self: center;
    font-size: ${Typography.FONT_SIZE_28}px;
    color: ${({theme}) => theme.dark};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    text-transform: capitalize;
`;

export const Buttons = styled.Pressable`
    background-color: ${({theme}) => theme.white};
`;

export const Header = styled.View`
    flex-direction: row;
    position: absolute;
    left: 0px;
    right: 0px;
    padding-top: 8%;
    padding-horizontal: 20px;
    padding-bottom: 20px;
    align-content: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.white};
`;

export const CircleBack = styled(Button)`
    padding-vertical: 0px;
    margin-top: 0px;
    align-self: center;
`;
