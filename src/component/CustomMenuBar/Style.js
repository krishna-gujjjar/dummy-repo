import styled from 'styled-components/native';

import {Text} from './../index';
import {Typography} from './../../styles';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.white};

    /* overflow: hidden; */
`;

export const TextContainer = styled.View``;

export const ProfilePic = styled.Image`
    border-radius: 30px;
    height: 90px;
    width: 90px;
    background-color: ${({theme}) => theme.primary.regular};
`;

export const HeaderContainer = styled.View`
    background-color: ${({theme}) => theme.primary.regular};
    height: 25%;
    flex-direction: row;
    justify-content: space-around;
    align-content: flex-start;
    align-items: center;
    padding: 20px 15px;
    margin-bottom: 10px;
`;

export const DrawerItemContainer = styled.View`
    position: absolute;
    bottom: 20px;
    width: 80%;
    border-top-color: ${({theme}) => theme.gray.dark};
    padding-top: 15px;
    align-self: center;
    border-top-width: 1px;
`;

export const DrawerItemText = styled(Text)`
    width: 100%;
    color: ${({theme}) => theme.dark};
    font-size: ${Typography.FONT_SIZE_24}px;
    font-family: ${Typography.FONT_FAMILY_HEADING};
    text-transform: capitalize;
`;

export const ProfileHeaderPicContaienr = styled.View`
    width: 80px;
    height: 80px;
    color: ${({theme}) => theme.white};
`;

export const ProfileHeaderText = styled.Text`
    color: ${({theme}) => theme.white};
    font-size: ${Typography.FONT_SIZE_20}px;
    font-family: ${Typography.FONT_FAMILY_HEADING};
    margin-top: 5px;
`;

export const MobileText = styled.Text`
    color: ${({theme}) => theme.gray.regular};
    font-size: ${Typography.FONT_SIZE_16}px;
    font-family: ${Typography.FONT_FAMILY_HEADING};
`;
