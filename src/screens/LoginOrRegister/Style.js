import styled from 'styled-components/native';
import {Button, Text} from '../../component';
import {Typography} from '../../styles';

export const WelcomeTextContainer = styled.View`
    position: absolute;
    top: 0;
    width: 100%;
`;

export const TextHeading = styled(Text)`
    font-family: ${Typography.FONT_FAMILY_HEADING};
    font-size: ${Typography.FONT_SIZE_36}px;
    text-transform: capitalize;
    color: ${({theme}) => theme.dark};
`;

export const SubHeading = styled(Text)`
    margin-top: 8%;
    color: ${({theme}) => theme.gray.regular};
    width: 76%;
    font-size: ${Typography.FONT_SIZE_18}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    text-transform: capitalize;
`;

export const ButtonContainer = styled(Button)`
    background-color: ${({theme}) => theme.dark};
    width: 90%;
    align-self: center;
    border-radius: 30px;
`;

export const ButtonText = styled(Text)`
    text-align: center;
    color: ${({theme}) => theme.white};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    font-size: ${Typography.FONT_SIZE_22}px;
    text-transform: capitalize;
`;

export const TermsTextRowContainer = styled.View`
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-content: center;
`;

export const TermsTextLight = styled(Text)`
    font-size: ${Typography.FONT_SIZE_18}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    color: ${({theme}) => theme.gray.regular};
    text-transform: capitalize;
    line-height: 30px;
`;

export const TermsTextDark = styled(Text)`
    font-size: ${Typography.FONT_SIZE_18}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    color: ${({theme}) => theme.dark};
    text-transform: capitalize;
    line-height: 30px;
`;
