import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useTheme} from '../../context';
import {BackIcon} from '../../utils/Svg';
import {Buttons, Header, TextHeading, TextSub} from './Style';

export default () => {
    const {colors} = useTheme();
    const navigation = useNavigation();
    return (
        <>
            <Header>
                <Buttons onPress={() => navigation.goBack()}>
                    <BackIcon fill={colors.dark} width={30} height={30} />
                </Buttons>

                <TextHeading>Language</TextHeading>
                <Buttons />
            </Header>
            <TextSub>You can use app in your local language</TextSub>
        </>
    );
};
