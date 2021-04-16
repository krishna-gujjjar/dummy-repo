import I18n from 'i18n-js';
import React, {createContext, useContext, useEffect, useState} from 'react';

import {en, ar, es, fr, hi, pt} from './../languages';
import {AppKey} from '../config/Constants';
import {useStorage} from '../hooks';
const TranslateContext = createContext();

export const TranslateProvider = props => {
    const [language, setLanguage] = useState('en');
    const {storageItem, updateStorageItem} = useStorage(AppKey.language);

    useEffect(() => {
        if (storageItem !== undefined) {
            if (storageItem?.language) setLanguage(storageItem?.language);
            else setLanguage('en');
        }
    }, [storageItem]);

    useEffect(() => {
        I18n.locale = language;
        I18n.translations = {
            en,
            ar,
            fr,
            es,
            pt,
            hi,
        };
        I18n.fallbacks = true;
    }, [language]);

    const updateLanguage = language => {
        updateStorageItem({language: language});
        setLanguage(language);
    };

    const translate = text => I18n.t(text.toLowerCase());

    return (
        <TranslateContext.Provider
            value={{
                language: language,
                changeLanguage: updateLanguage,
                translate: translate,
            }}
            {...props}>
            {props.children}
        </TranslateContext.Provider>
    );
};

export const useTranslate = () => useContext(TranslateContext);

export default TranslateContext;
