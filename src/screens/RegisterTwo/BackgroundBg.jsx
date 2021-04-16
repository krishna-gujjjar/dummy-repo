import React from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useTheme} from '../../context';
import {BackgroundLeft, BackgroundRight, BackgroundLeftBottom} from './Style';

export default ({children, style}) => {
    const {colors} = useTheme();

    return (
        <ScrollView
            style={{
                // backgroundColor: 'red',
                marginTop: 80,
            }}
            showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
                enabled={Platform.OS === 'ios'}
                style={[
                    {
                        flex: 1,
                        backgroundColor: colors.white,
                    },
                    style,
                ]}>
                <BackgroundLeft />
                <BackgroundRight />
                <BackgroundLeftBottom />
                {children}
            </KeyboardAvoidingView>
        </ScrollView>
    );
};
