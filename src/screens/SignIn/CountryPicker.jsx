import React from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {
    SelectCountryText,
    CountrySelectedText,
    SelectCountryButton,
} from './Style';
import {Button} from '../../component';

export default ({
    setOpenCountryPicker,
    country,
    countryCode,
    openCountryPicker,
    onSelect,
}) => {
    return (
        <Button
            style={{
                paddingVertical: 40,
                elevation: 15,
            }}>
            <SelectCountryButton onPress={() => setOpenCountryPicker(true)}>
                {country ? (
                    <>
                        <CountrySelectedText>
                            {countryCode.length > 0 ? `+${countryCode}` : ''}
                        </CountrySelectedText>
                        <CountrySelectedText style={{paddingStart: 20}}>
                            {country}
                        </CountrySelectedText>
                    </>
                ) : (
                    <SelectCountryText>Select Country</SelectCountryText>
                )}
            </SelectCountryButton>

            {openCountryPicker && (
                <CountryPicker
                    containerButtonStyle={{
                        paddingStart: 30,
                        opacity: 0,
                    }}
                    onSelect={onSelect}
                    withFilter
                    withCountryNameButton
                    withCallingCodeButton
                    withCallingCode
                    {...{country}}
                    visible
                />
            )}
        </Button>
    );

    {
    }
};
