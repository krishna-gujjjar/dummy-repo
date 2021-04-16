import React from 'react';

import Header from './Header';
import {Container} from './Style';
import ThemeList from './ThemeList';

export default () => {
	return (
		<Container>
			<Header />
			<ThemeList type="dark" />
			<ThemeList type="light" />
			<ThemeList type="system" />
		</Container>
	);
};
