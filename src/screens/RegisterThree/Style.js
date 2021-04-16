import styled from 'styled-components/native';
import {Button, Text} from '../../component';
import {Typography} from '../../styles';

export const SubHeading = styled(Text)`
    margin-top: 15%;
    color: ${({theme}) => theme.gray.regular};
    width: 100%;
    text-align: center;
    font-size: ${Typography.FONT_SIZE_18}px;
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    text-transform: capitalize;
`;

export const BottomButton = styled(Button)`
    position: absolute;
    bottom: 15%;
    background-color: ${({theme}) => theme.dark};
    width: 90%;
    align-self: center;
    border-radius: 30px;
`;

export const ButtonText = styled(Text)`
    text-align: center;
    color: ${({theme}) => theme.white};
    font-family: ${Typography.FONT_FAMILY_HEADING};
    font-size: ${Typography.FONT_SIZE_24}px;
    text-transform: capitalize;
`;

export const UploadDocContainer = styled(Button)`
    padding-vertical: 0px;
    padding: 22px;
    padding-right: 25px;
    padding-left: 25px;
    elevation: 9;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const DocText = styled(Text)`
    color: ${({theme}) => theme.gray.regular};
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${Typography.FONT_SIZE_22}px;
    text-transform: capitalize;
`;

export const IconCameraBg = styled.ImageBackground`
    width: 30px;
    height: 30px;
`;
