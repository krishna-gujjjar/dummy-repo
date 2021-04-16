import {t} from 'i18n-js';
import styled from 'styled-components/native';
import {Typography} from '../../styles';
import Text from '../Text';

export const Container = styled.View`
    margin-horizontal: 5%;
    margin-top: 20px;
    padding-horizontal: 22px;
    padding-vertical: 20px;
    border-radius: 20px;
    elevation: 10;
    background-color: ${({theme}) => theme.white};
`;

export const DateText = styled.Text`
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    font-size: ${Typography.FONT_SIZE_16}px;
    color: ${({theme}) => theme.gray.dark};
`;

export const To = styled(Text)`
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    color: ${({theme}) => theme.gray.dark};
    font-size: ${Typography.FONT_SIZE_20}px;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
`;

export const ContainerLeft = styled.View`
    width: 55%;
    justify-content: space-evenly;
`;

export const ContainerRight = styled.View`
    flex-direction: column;
    width: 45%;
    align-items: flex-end;
    justify-content: space-around;
`;

export const KM = styled.View``;

export const BidButton = styled.TouchableOpacity`
    background-color: ${({theme, status}) =>
        (status === 'start' && theme.primary.regular) ||
        (status === 'queue' && theme.primary.colorAccent) ||
        (status === 'rejected' && theme.danger.regular)};
    padding-horizontal: 17px;
    padding-vertical: 5px;
    border-radius: 10px;
`;

export const BidText = styled(Text)`
    font-family: ${Typography.FONT_FAMILY_PARA_BOLD};
    color: ${({theme}) => theme.white};
    font-size: ${Typography.FONT_SIZE_18}px;
    text-transform: capitalize;
`;
