import styled from 'styled-components/native';
import {Colors, Typography} from '../../styles';

export const Button = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.white};
    border-radius: 20px;
    padding-vertical: 20px;
    margin-top: 20px;
`;
