import React from 'react';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';

import {GOOGLE_MAP_KEY} from '../config/Constants';
import {showError, showLog} from '../utils';

const GeoCoding = () => {
    if (!Geocoder.isInit) Geocoder.init(GOOGLE_MAP_KEY);
    return Geocoder;
};

export const currentLocation = callback =>
    Geolocation.getCurrentPosition(
        location => {
            showLog('🚀 ~ file: location.js ~ line 17 ~ location', location);
            callback(location);
        },
        showError,
        {enableHighAccuracy: true},
    );

export const coordsToText = (location, callback) => GeoCoding().from(location).then(callback).catch(showError);
