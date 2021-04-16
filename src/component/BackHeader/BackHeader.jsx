import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {BackIcon} from '../../utils/Svg';
import {useTheme} from '../../context';
import {Buttons, TextHeading, Header, CircleBack} from './Style';

export default ({text}) => {
    const {colors} = useTheme();
    const navigation = useNavigation();

    const Back = () =>
        React.useMemo(() => {
            return navigation.canGoBack() ? (
                <CircleBack onPress={() => navigation.goBack()}>
                    <BackIcon fill={colors.dark} width={40} height={40} />
                </CircleBack>
            ) : (
                <View />
            );
        }, [navigation]);

    return (
        <>
            <Header>
                <Back />

                <TextHeading>{text}</TextHeading>
                <Buttons />
            </Header>
        </>
    );
};
