import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {BackIcon} from '../../utils/Svg';

import {Button, Header, TextHeading, TextSub} from './Style';
import {useTheme} from '../../context';

export default () => {
    const {colors} = useTheme();
    const navigation = useNavigation();
    return (
        <>
            <Header>
                <Button onPress={() => navigation.goBack()}>
                    <BackIcon fill={colors.dark} width={30} height={30} />
                </Button>

                <TextHeading>Theme</TextHeading>
                <Button />
            </Header>
            <TextSub>You can customize your app with themes</TextSub>
        </>
    );
};
