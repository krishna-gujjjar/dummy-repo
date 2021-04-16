import React from 'react';
import {Label, TextInputContainer, TextInput} from './Style';

export default ({name, value, onChangeValue, top}) => {
    let style = {};
    if (top) style = {marginTop: 50};

    return (
        <TextInputContainer style={style}>
            <Label>{name}</Label>
            <TextInput value={value} onChangeText={onChangeValue} placeholder={name} />
        </TextInputContainer>
    );
};
