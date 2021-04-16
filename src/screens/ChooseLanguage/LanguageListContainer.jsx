import React from 'react';

import {ButtonContainer, LanguageText} from './Style';
import {
    FlagArabic,
    FlagEnglish,
    FlagFrench,
    FlagHindi,
    FlagPortuguese,
    FlagSpanish,
} from '../../utils/Svg';
import {useTheme, useTranslate} from '../../context';

export default ({type = 'en'}) => {
    const {language, changeLanguage} = useTranslate();
    const {colors} = useTheme();

    let Flag = FlagEnglish,
        languageText = 'english';

    switch (type) {
        case 'ar':
            Flag = FlagArabic;
            languageText = 'arabic';
            break;

        case 'en':
            Flag = FlagEnglish;
            languageText = 'english';
            break;

        case 'es':
            Flag = FlagSpanish;
            languageText = 'spanish';
            break;

        case 'fr':
            Flag = FlagFrench;
            languageText = 'french';
            break;

        case 'hi':
            Flag = FlagHindi;
            languageText = 'hindi';
            break;

        case 'pt':
            Flag = FlagPortuguese;
            languageText = 'portuguese';
            break;

        default:
            Flag = FlagEnglish;
            languageText = 'english';
            break;
    }

    return (
        <ButtonContainer
            style={[language === type && {backgroundColor: colors.dark}]}
            onPress={() => changeLanguage(type.toLowerCase())}>
            <Flag />
            <LanguageText style={[language === type && {color: colors.white}]}>
                {languageText}
            </LanguageText>
        </ButtonContainer>
    );
};
