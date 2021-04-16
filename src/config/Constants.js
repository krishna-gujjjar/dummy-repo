import {Dimensions} from 'react-native';
import {name as AppName} from '../../app.json';

export const {width, height} = Dimensions.get('screen');

export const AppKey = {
    trip: `${AppName}@trip`,
    auth: `${AppName}@login`,
    theme: `${AppName}@theme`,
    token: `${AppName}@token`,
    language: `${AppName}@language`,
};

export const FIREBASE_CONFIG = {
    appId: '1:309417182323:android:880f49b358aa2411cd5606',
    apiKey: 'AIzaSyAOWbHnaIn-5nRY9Y5g1G4kSVOykzCqHII',
    projectId: 'driver-app-1db31',
    authDomain: 'driver-app-1db31.firebaseapp.com',
    databaseURL: 'https://driver-app-1db31.firebaseio.com',
    storageBucket: 'driver-app-1db31.appspot.com',
    messagingSenderId: '309417182323',
};

// export const DEFAULT_LATITUDE = 25.179652;
// export const DEFAULT_LONGITUDE = 75.8785162;

export const API_URL = 'https://fabithub.com/projects/rider/api/';

export const GOOGLE_MAP_KEY = 'AIzaSyBiq9Rp63iE-psms1ZZTXJ9D3BDpsubgSU';

export const S3_DETAILS = {
    acl: 'public-read',
    keyPrefix: 'driver/',
    bucket: 'riderg',
    region: 'ap-south-1',
    accessKey: 'AKIAIF5HZ55FLOO6LTTA',
    secretKey: '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',
    successActionStatus: 201,
};

export const END_POINTS = {
    SIGNIN: '/signin',
    UPDATE_PROFILE: '/updateProfile',
    UPDATE_DRIVER_DETAILS: '/updateDriverDetails',
    GET_CATEGORIES: '/vehicleCategories',
    GET_VEHICLES: '/vehicles',
    CHANGE_STATUS: '/driverStatus',
    VEHICLE_DETAILS: '/vehicleDetails',
    DRIVER_DETAILS: '/driverDetails',
    UPDATE_BOOKING: '/updateBooking',
};

export const STATUS = {
    NEW: 0,
    COMPLETE: 1,
    ACCEPT: 2,
    REJECT: 3,
    PICKED_UP: 4,
    ONGOING: 5,
};
