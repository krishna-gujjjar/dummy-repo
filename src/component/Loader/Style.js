import styled from 'styled-components/native';
import {Colors} from '../../styles';

export const Container = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.dark};
    opacity: 0.4;
    elevation: 20;
`;
