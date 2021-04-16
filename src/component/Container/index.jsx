import React from 'react';
import {ContainerView, ScrollableContainerView} from './Style';

export default ({style, children, noStyle, padding, noPadding, margin, background, scrollable}) => {
	let Component = ContainerView;
	if (scrollable) Component = ScrollableContainerView;

	return (
		<Component
			style={style}
			noStyle={noStyle}
			noPadding={noPadding}
			padding={padding}
			margin={margin}
			backgroundColor={background}>
			{children}
		</Component>
	);
};
