import styled from 'styled-components/native';

export const Container = styled.View`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding-left: 10%;
	padding-right: 10%;
`;

export const CardContainer = styled.View`
	border-radius: 100px;
	position: relative;
	overflow: hidden;
	width: 100%;
	background: ${({theme}) => `${theme.white}90`};
`;

export const ChildrenContainer = styled.View`
	padding: 5% 10%;
`;

export const Button = styled.Pressable`
	position: absolute;
	right: 0;
	top: 0;
	z-index: 1;
`;

export const ButtonContainer = styled.View`
	position: relative;
	width: 100%;
`;
