import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from './Style';

export default () => {
    return (
        <Container>
            <ActivityIndicator size="large" color="#5c6efa" />
        </Container>
    );
};
