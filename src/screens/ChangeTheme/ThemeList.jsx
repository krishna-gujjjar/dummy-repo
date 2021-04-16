import React from 'react';

import {ThemeListContainer, ThemeText} from './Style';
import {DARK_ICON, LIGHT_ICON, SYSTEM_ICON} from '../../utils/Svg';
import {useTheme} from '../../context';

export default ({type}) => {
    const {theme, colors, changeTheme} = useTheme();

    let Components;
    if (type === 'dark') Components = DARK_ICON;
    if (type === 'light') Components = LIGHT_ICON;
    if (type === 'system') Components = SYSTEM_ICON;

    return (
        <ThemeListContainer
            onPress={() => changeTheme(type)}
            style={[type === theme && {backgroundColor: colors.dark}]}>
            <Components
                width={95}
                height={95}
                style={{position: 'absolute', top: '-130%', right: '6%'}}
            />
            <ThemeText style={[type === theme && {color: colors.white}]}>
                {type}
            </ThemeText>
        </ThemeListContainer>
    );
};
