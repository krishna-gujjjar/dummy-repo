import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';

import {AuthProvider, useAuth} from './AuthContext';
import {TripProvider, useTrip} from './TripContext';
import {ThemeProvider, useTheme} from './ThemeContext';
import {TranslateProvider, useTranslate} from './TranslateContext';

const AppProvider = ({children}) => (
    <ThemeProvider>
        <TranslateProvider>
            <AuthProvider>
                <TripProvider>
                    <Container>{children}</Container>
                </TripProvider>
            </AuthProvider>
        </TranslateProvider>
    </ThemeProvider>
);

const Container = ({children}) => {
    const {colors} = useTheme();
    return (
        <StyledThemeProvider theme={colors}>
            <StatusBar translucent backgroundColor="#0000" />
            {children}
        </StyledThemeProvider>
    );
};

export default AppProvider;
export {useAuth, useTheme, useTranslate, useTrip};
