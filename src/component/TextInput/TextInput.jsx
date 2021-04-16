import React from 'react';

import {InputText} from './Style';
import {useTheme} from '../../context';

export default ({onTextChange, placeholder, keyboardType, style, value}) => {
    const {colors} = useTheme();
    return (
        <InputText
            value={value}
            style={style}
            placeholderTextColor={colors.gray.dark}
            keyboardType={keyboardType}
            onChangeText={onTextChange}
            placeholder={placeholder}
        />
    );
};
