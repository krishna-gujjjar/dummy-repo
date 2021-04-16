import axios from 'axios';
import {Alert} from '../component';
import {API_URL, END_POINTS, GOOGLE_MAP_KEY} from '../config/Constants';
import {showError} from '../utils';

const API = axios.create({baseURL: API_URL});

const responseError = (error, callback) => {
    callback([], true);
    Alert(error?.message ?? JSON.stringify(error), 'error');
};

export const SIGN_IN = (data, callback) =>
    API.post(END_POINTS.SIGNIN, {
        user_type: 'DRIVER',
        uuid: data?.uid ?? '',
        email: data?.email ?? '',
        mobile: data?.mobile ?? '',
        password: data?.password ?? '',
        last_name: data?.last_name ?? '',
        app_token: data?.app_token ?? '',
        first_name: data?.first_name ?? '',
        profile_pic: data?.profileImage ?? '',
    })
        .then(response => {
            console.log('🚀 ~ file: api.js ~ line 25 ~ SignIn', response.data);
            if (response.status !== 200) throw new Error('Sign In Failed');
            if (response?.data?.error) throw new Error(response?.data?.message);
            callback(response?.data?.data);
        })
        .catch(error => responseError(error, callback));

export const EDIT_PROFILE = (data, callback) =>
    API.post(END_POINTS.UPDATE_PROFILE, {
        user_id: data?.user_id,
        first_name: data?.first_name,
        last_name: data?.last_name,
        profile_pic: data?.profile_pic,
    })
        .then(response => {
            if (response.status !== 200) throw new Error('Update Profile Failed');
            if (response?.data?.error) throw new Error(response?.data?.message);
            callback(response?.data?.data);
        })
        .catch(error => responseError(error, callback));

export const UPDATE_DETAILS = (data, callback) =>
    API.post(END_POINTS.UPDATE_DRIVER_DETAILS, {
        pan: data?.pan,
        ifsc: data?.ifsc,
        micr: data?.micr,
        brand: data?.brand,
        model: data?.model,
        color: data?.color,
        seats: data?.seats,
        image: data?.image,
        aadhar: data?.aadhar,
        user_id: data?.user_id,
        bank_name: data?.bank_name,
        vehicle_no: data?.vehicle_no,
        category_id: data?.category_id,
        branch_name: data?.branch_name,
        bank_account_no: data?.bank_account_no,
        driving_licence: data?.driving_licence,
        manufacture_year: data?.manufacture_year,
        pollution_certificate: data?.pollution_certificate,
        registration_certificate: data?.registration_certificate,
    })
        .then(response => {
            if (response.status !== 200) throw new Error('Update Details Failed');
            if (response?.data?.error) throw new Error(response?.data?.message);
            callback(response?.data?.data);
        })
        .catch(error => responseError(error, callback));

export const DRIVER_STATUS = (data, callback) =>
    API.post(END_POINTS.CHANGE_STATUS, {
        user_id: data?.user_id,
        location: data?.location,
        is_active: data?.is_active,
        location_lat: data?.location_lat,
        location_long: data?.location_long,
    })
        .then(response => {
            if (response.status !== 200) throw new Error('Update Status Failed');
            if (response?.data?.error) throw new Error(response?.data?.message);
            callback(response?.data?.data);
        })
        .catch(error => responseError(error, callback));

export const VEHICLE_DETAILS = (data, callback) =>
    API.post(END_POINTS.VEHICLE_DETAILS, {
        user_id: data?.user_id,
        vehicle_id: data?.vehicle_id,
    })
        .then(response => {
            if (response.status !== 200) throw new Error('Vehicel Details Failed');
            if (response?.data?.error) throw new Error(response?.data?.message);
            callback(response?.data?.data);
        })
        .catch(error => responseError(error, callback));

export const DRIVER_DETAILS = (data, callback) =>
    API.post(END_POINTS.DRIVER_DETAILS, {
        user_id: data?.user_id,
        driver_id: data?.driver_id,
    })
        .then(respone => {
            if (respone.status !== 200) throw new Error('Driver Details Failed');
            if (respone?.data?.error) throw new Error(respone?.data?.message);
            callback(respone?.data?.data);
        })
        .catch(error => responseError(error, callback));

export const UPDATE_BOOKING = (data, callback) =>
    API.post(END_POINTS.UPDATE_BOOKING, {
        user_id: data?.user_id,
        order_id: data?.order_id,
        status: data?.status,
        otp: data?.otp,
    })
        .then(respone => {
            if (respone.status !== 200) throw new Error('Update Booking Failed');
            if (respone?.data?.error) throw new Error(respone?.data?.message);
            callback(respone?.data?.data);
        })
        .catch(error => responseError(error, callback));

export const REVIEW = (data, callback) =>
    API.post('/review', {
        rate: data?.rate,
        review: data?.review,
        // review dene vale ki user_id
        user_id: data?.user_id,
        reviewer_id: data?.reviewer_id,
    })
        .then(response => {
            console.log('Review ', response);
            if (response.status !== 200) throw new Error('Something went wrong');
            if (response?.data?.error) throw new Error(response?.data?.message);
            callback(response?.data?.data);
        })
        .catch(error => responseError(error, callback));

export const GET_CARS = callback =>
    API.post('/vehicles')
        .then(response => {
            if (response.status !== 200) throw new Error('Something went wrong in vehicles');
            callback(response?.data?.data);
        })
        .catch(error => responseError(error, callback));

export const DRIVER_RIDES = (data, callback) =>
    API.post('/driverRides', {
        driver_id: data?.driver_id,
    })
        .then(response => {
            console.log('DRIVER_RIDES ', response);
            if (response.status !== 200) throw new Error('Something went wrong');
            if (response?.data?.error) throw new Error(response?.data?.message);
            callback(response?.data?.data, false);
        })
        .catch(error => responseError(error, callback));

export const TIME_CALC = (from, to, callback) => {
    const startLoc = `${from.lat}, ${from.long}`;
    const destinationLoc = `${to.lat}, ${to.long}`;
    axios
        .get(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${GOOGLE_MAP_KEY}`,
        )
        .then(response => {
            console.log('🚀 ~ file: api.js ~ line 17 ~ .then ~ response', response.data);
            callback(response.data);
        })
        .catch(showError);
};

export const GET_ALL_OUTDOOR_TRIPS = callback =>
    API.post('./getOutdoorOrders')
        .then(response => {
            if (response.status !== 200) throw new Error('Oops! Something went wrong');
            callback(response?.data?.data);
        })
        .catch(error => responseError(error, callback));

export const BID = (data, callback) =>
    API.post('./bid', {
        user_order_id: data?.user_order_id,
        driver_id: data?.driver_id,
        price: data?.price,
    })
        .then(response => {
            console.log('BID ', response);
            if (response.status !== 200) throw new Error('Something went wrong');
            if (response?.data?.error) throw new Error(response?.data?.message);
            callback(response?.data?.data, false);
        })
        .catch(error => responseError(error, callback));
