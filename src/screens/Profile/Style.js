import styled from 'styled-components/native';
import {Typography} from '../../styles';
import {Text, Header} from '../../component';

export const Container = styled.View`
    flex: 1;
    position: relative;
`;
export const HeaderContainer = styled.View`
    height: 50%;
`;

export const RidesContainer = styled.View``;

export const HeaderBackground = styled.Image`
    width: 105%;
    height: 100%;
    resize-mode: stretch;
`;

export const ProfileImage = styled.Image`
    width: 156px;
    height: 156px;
    position: absolute;
    right: 10%;
    top: 15%;
    border-radius: 50px;
    background-color: ${({theme}) => theme.primary.regular};
`;

export const TextContainer = styled.View`
    position: absolute;
    left: 11%;
    top: 25%;
    width: 45%;
`;

export const HiText = styled(Text)`
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${Typography.FONT_SIZE_28}px;
    color: ${({theme}) => theme.white};
    text-transform: capitalize;
`;

export const NameText = styled.Text`
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${Typography.FONT_SIZE_36}px;
    color: ${({theme}) => theme.dark};
    width: 82%;
    text-transform: capitalize;
`;

export const GreetingText = styled(Text)`
    margin-top: 20px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${Typography.FONT_SIZE_24}px;
    color: ${({theme}) => theme.white};
    text-transform: capitalize;
`;

export const RupeeIcon = styled.Text`
    font-family: ${Typography.FONT_FAMILY_PARA_MEDIUM};
    font-size: ${70}px;
    margin-right: 10px;
    color: ${({theme}) => theme.white};
    text-transform: capitalize;
`;

export const RupeeText = styled.Text`
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${50}px;
    color: ${({theme}) => theme.dark};
    text-transform: capitalize;
`;

export const UserDetailsContainer = styled.View`
    position: absolute;
    right: 25%;
    top: 260px;
    flex-direction: row;
    align-items: center;
`;

export const RideText = styled(Text)`
    margin-left: 25px;
    font-family: ${Typography.FONT_FAMILY_HEADING};
    font-size: ${Typography.FONT_SIZE_24}px;
    color: ${({theme}) => theme.dark};
    text-transform: capitalize;
`;

export const DrawerIcon = styled(Header)`
    position: absolute;
    left: 8%;
    top: 6%;
    z-index: 2;
`;
