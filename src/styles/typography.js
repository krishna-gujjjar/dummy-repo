import {scaleFont} from './mixins';

// FONT FAMILY
export const FONT_FAMILY_HEADING = 'Montserrat-Bold';
export const FONT_FAMILY_PARA_BOLD = 'HindMadurai-Bold';
export const FONT_FAMILY_PARA_MEDIUM = 'HindMadurai-Medium';

// FONT WEIGHT
export const FONT_WEIGHT_MEDIUM = '500';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_36 = scaleFont(36);
export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_28 = scaleFont(28);
export const FONT_SIZE_26 = scaleFont(26);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_MEDIUM = {
    fontFamily: FONT_FAMILY_PARA_MEDIUM,
    fontWeight: FONT_WEIGHT_MEDIUM,
};

export const FONT_PARA_BOLD = {
    fontFamily: FONT_FAMILY_PARA_BOLD,
    fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_BOLD = {
    fontFamily: FONT_FAMILY_HEADING,
};
