import styled from 'styled-components/native';
import Text from '../../component/Text';

import {Typography, Colors} from '../../styles';

export const SplashContainer = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.backgroundDark};
    justify-content: center;
    align-items: center;
`;

export const MainTextContainer = styled.View`
    width: 50%;
    padding-bottom: 120px;
`;

export const MainText = styled(Text)`
    text-align: center;
    font-size: 52px;
    font-family: ${Typography.FONT_FAMILY_HEADING};
    color: ${({theme}) => theme.white};
    text-transform: capitalize;
`;

export const BottomTextContainer = styled.View`
    flex-direction: row;
    position: absolute;
    align-items: center;
    bottom: 20px;
`;

export const TextContainer = styled.View`
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
`;

export const BottomText = styled.Text`
    font-size: ${Typography.FONT_SIZE_24}px;
    font-family: ${Typography.FONT_FAMILY_HEADING};
    color: ${({theme}) => theme.white};
    /* text-transform: capitalize; */
`;

export const BottomTextS = styled.Text`
    font-size: ${10}px;
    font-family: ${Typography.FONT_FAMILY_HEADING};
    color: ${({theme}) => theme.white};
    text-transform: capitalize;
`;
