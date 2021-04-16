import Snackbar from 'react-native-snackbar';
import {Colors, Typography} from '../../styles';

export default (text, type, onPress = () => Snackbar.dismiss()) => {
    let backgroundColor, textColor;

    switch (type) {
        case 'error':
            backgroundColor = Colors.default.danger.light;
            textColor = Colors.default.white;
            break;

        case 'warn':
            backgroundColor = Colors.default.primary.dark;
            textColor = Colors.default.dark;
            break;

        case 'success':
            backgroundColor = '#00e498';
            textColor = Colors.default.dark;
            break;

        default:
            backgroundColor = Colors.default.dark;
            textColor = Colors.default.white;
            break;
    }

    return Snackbar.show({
        text: text,
        action: {text: 'Ok', onPress: onPress, textColor: '#fff8'},
        numberOfLines: 2,
        textColor: textColor,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: backgroundColor,
        fontFamily: Typography.FONT_FAMILY_HEADING,
    });
};
