import React from 'react';
import {Text} from 'react-native';
import {useTranslate} from './../context';

export default ({children, style}) => {
    const {translate} = useTranslate();

    return <Text style={style}>{translate(children)}</Text>;
    // <Text style={style}>{children}</Text>
};
