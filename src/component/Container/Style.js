import styled from 'styled-components/native';

export const ContainerView = styled.View`
	${({noStyle}) => {
		if (!noStyle) return {flex: 1};
	}};

	${({noPadding}) => {
		if (!noPadding) return {padding: '5%'};
	}};
`;

export const ScrollableContainerView = styled.ScrollView`
	${({noStyle}) => {
		if (!noStyle) return {flex: 1};
	}};

	${({noPadding}) => {
		if (!noPadding) return {padding: '5%'};
	}};
`;
