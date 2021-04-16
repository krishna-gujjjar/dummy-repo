import React from 'react';

import {Container} from './Style';
import LanguageListContainer from './LanguageListContainer';
import Header from './Header';

export default () => (
    <Container>
        <Header />
        <LanguageListContainer type="ar" />
        <LanguageListContainer type="en" />
        <LanguageListContainer type="es" />
        <LanguageListContainer type="fr" />
        <LanguageListContainer type="hi" />
        <LanguageListContainer type="pt" />
    </Container>
);
