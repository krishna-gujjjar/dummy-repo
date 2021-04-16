import styled from 'styled-components/native';
import {Colors, Typography} from '../../styles';

export const InputText = styled.TextInput`
    margin-vertical: 10px;
    background-color: ${({theme}) => theme.white};
    border-radius: 20px;
    padding-vertical: 25px;
    padding-start: 30px;
    elevation: 15;
    font-size: ${Typography.FONT_SIZE_20}px;
    /* placeholder-text-color: ${({theme}) => theme.white}; */
    /* font-family: ${Typography.FONT_FAMILY_HEADING}px; */
    font-weight: bold;
    color: ${({theme}) => theme.primary.regular};
`;
