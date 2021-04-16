import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ToastAndroid} from 'react-native';
import {useTheme} from '../../context';
import {BackIcon} from '../../utils/Svg';
import {ButtonContainer, ButtonText} from './Style';

export default ({title, onNavigate}) => {
    const navigation = useNavigation();
    const {colors} = useTheme();

    return (
        <ButtonContainer
            onPress={() =>
                onNavigate
                    ? navigation.navigate(onNavigate, {
                          type: 'setting',
                      })
                    : ToastAndroid.show('Coming soon', ToastAndroid.SHORT)
            }>
            <ButtonText numberOfLines={1}>{title}</ButtonText>
            <BackIcon
                fill={colors.white}
                style={{
                    transform: [{rotate: '180deg'}],
                }}
            />
        </ButtonContainer>
    );
};
