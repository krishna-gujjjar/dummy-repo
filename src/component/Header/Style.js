import styled from 'styled-components/native';
import {Colors} from '../../styles';

export const Container = styled.View`
    top: 5%;
    width: 90%;
    position: absolute;
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: space-between;
`;

export const Image = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 15px;
    border-width: 1px;
    border-color: ${({theme}) => theme.dark};
`;

export const Button = styled.TouchableOpacity``;
