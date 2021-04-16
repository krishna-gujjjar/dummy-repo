import {useColorScheme} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';

import {useStorage} from '../hooks';
import {AppKey} from '../config/Constants';

const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
    const systemColor = useColorScheme();
    const [theme, setTheme] = useState('light');
    const {storageItem, updateStorageItem} = useStorage(AppKey.theme);

    useEffect(() => {
        if (storageItem !== undefined) {
            if (storageItem?.theme) setTheme(storageItem?.theme);
            else setTheme('light');
        }
    }, [storageItem]);

    const changeTheme = theme => {
        updateStorageItem({theme: theme});
        setTheme(theme);
    };

    const colors = {
        primary: {
            dark:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#ffdf88'
                    : '#ffef74',
            light:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#ffef74'
                    : '#ffdf88',
            regular:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#5c6efa'
                    : '#5c6efa',

            colorAccent:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#ffba00'
                    : '#ffba00',
        },
        danger: {
            regular:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#b44029'
                    : '#ff672f',
            dark:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#b23829'
                    : '#ff3d00',
            light:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#db4767'
                    : '#ff0062',
        },
        gray: {
            light:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#7c7c88'
                    : '#e8e8e8',
            regular:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#e4e6eb'
                    : '#8e8e8e',
            dark:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#3a3b3c'
                    : '#7c7c88',
        },
        shadow: {
            color:
                theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                    ? '#3a3b3c'
                    : '#b9b9b9',
        },
        white:
            theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                ? '#18191a'
                : '#ffffff',
        dark:
            theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                ? '#ffffff'
                : '#41414d',
        backgroundDark:
            theme === 'dark' || (theme === 'system' && systemColor === 'dark')
                ? '#f2f2f2'
                : '#242424',
    };

    return (
        <ThemeContext.Provider value={{theme, colors, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
