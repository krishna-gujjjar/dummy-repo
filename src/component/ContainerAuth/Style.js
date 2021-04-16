import styled from 'styled-components/native';
import {BackgroundShape} from '../../utils/Svg';

export const BackgroundLeft = styled(BackgroundShape)`
    position: absolute;
    left: -70%;
    top: 30%;
    transform: rotate(12deg);
`;

export const BackgroundRight = styled(BackgroundShape)`
    position: absolute;
    bottom: -10%;
    right: -50%;
    transform: rotate(5deg);
`;
