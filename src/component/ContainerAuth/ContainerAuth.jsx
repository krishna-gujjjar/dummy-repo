import React from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useTheme} from '../../context';
import {BackgroundLeft, BackgroundRight} from './Style';

export default ({children, style, styleLeft, styleRight}) => {
    const {colors} = useTheme();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
            enabled={Platform.OS === 'ios'}
            style={[
                {
                    backgroundColor: colors.white,
                    flex: 1,
                    padding: '12%',
                },
                style,
            ]}>
            <BackgroundLeft style={styleLeft} />
            <BackgroundRight style={styleRight} />
            {children}
        </KeyboardAvoidingView>
    );
};
