import {View} from 'react-native';
import React, {useState, useEffect} from 'react';

import {useNavigation, useRoute} from '@react-navigation/core';

import {useStorage} from '../../hooks';
import BackgroundBg from './BackgroundBg';
import {AppKey} from '../../config/Constants';
import {DRIVER_DETAILS, UPDATE_DETAILS, VEHICLE_DETAILS} from '../../services/api';
import {BottomButton, ButtonText, SubHeading} from './Style';
import {Alert, BackHeader, Button, Loader, TextInput} from '../../component';
import {showLog} from '../../utils';
import {Picker} from '@react-native-picker/picker';
import {useAuth} from '../../context';

export default () => {
    const {params} = useRoute();
    const {user} = useAuth();
    const navigation = useNavigation();
    const [vehicleNo, setVehicleNo] = useState();
    const {storageItem, updateStorageItem} = useStorage(AppKey.auth);
    const [vehicleBrand, setVehicleBrand] = useState();
    const [vehicleModal, setVehicleModal] = useState();
    const [vehicleColor, setVehicleColor] = useState();
    const [vehicleSeats, setVehicleSeats] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const [settingNav, setSettingNav] = useState(false);
    const [carCategory, setCarCategory] = useState('');
    const [manufactureYear, setManufactureYear] = useState();
    const [loadData, setLoadData] = useState(false);

    useEffect(() => {
        if (params?.type) {
            setLoadData(true);
            setSettingNav(true);
        }
    }, []);

    if (loadData) {
        VEHICLE_DETAILS(
            {
                user_id: user?.id,
                vehicle_id: user?.vehicle_id,
            },
            response => {
                showLog('🚀 ~ file: RegisterTwo.jsx ~ line 41 ~ updateDetails', response);
                setVehicleBrand(response?.brand);
                setCarCategory(response?.category_id);
                setVehicleColor(response?.color);
                setVehicleModal(response?.model);
                setVehicleNo(response?.vehicle_no);
                setVehicleSeats(response?.seats);
                setManufactureYear(response?.manufacture_year);
                setLoadData(false);
            },
        );
    }

    const _handleConfirm = () => {
        if (settingNav) {
            setShowLoader(true);
            UPDATE_DETAILS(
                {
                    user_id: storageItem?.id,
                    vehicle_no: vehicleNo,
                    brand: vehicleBrand,
                    model: vehicleModal,
                    color: vehicleColor,
                    seats: vehicleSeats,
                    manufacture_year: manufactureYear,
                    category_id: carCategory,
                },
                response => {
                    setShowLoader(false);
                    showLog('🚀 ~ file: RegisterThree.jsx ~ line 27 ~ updateDetails', response);
                    updateStorageItem(response);
                    navigation.goBack();
                },
            );
        } else {
            if (!carCategory) {
                return Alert('Add your Car Category to proceed.');
            }

            if (!vehicleNo) {
                return Alert('Add your Vehicle No');
            }
            if (!vehicleBrand) {
                return Alert('Add your Vehicle Brand');
            }
            if (!vehicleModal) {
                return Alert('Add your Vehicle Modal');
            }
            if (!vehicleColor) {
                return Alert('Add your Vehicle Color');
            }
            if (!vehicleSeats) {
                return Alert('Add your Vehicle Seats');
            }
            if (!manufactureYear) {
                return Alert('Add your vehicle Manufacture Year');
            }

            setShowLoader(true);
            UPDATE_DETAILS(
                {
                    user_id: storageItem?.id,
                    vehicle_no: vehicleNo,
                    brand: vehicleBrand,
                    model: vehicleModal,
                    color: vehicleColor,
                    seats: vehicleSeats,
                    manufacture_year: manufactureYear,
                    category_id: carCategory,
                },
                response => {
                    setShowLoader(false);
                    showLog('🚀 ~ file: RegisterTwo.jsx ~ line 45 ~ updateDetails', response);
                    updateStorageItem(response);
                    navigation.navigate('RegisterThree');
                },
            );
        }
    };

    return (
        <View
            style={{
                flex: 1,
            }}>
            {showLoader ? <Loader /> : <></>}
            <BackHeader text="Car details" />
            <BackgroundBg>
                <SubHeading>Your Car Details</SubHeading>
                <SubHeading
                    style={{
                        marginTop: 0,
                        marginBottom: '5%',
                    }}>
                    to complete your KYC
                </SubHeading>
                <View
                    style={{
                        width: '80%',
                        alignSelf: 'center',
                        marginBottom: '15%',
                    }}>
                    <Button
                        style={{
                            elevation: 19,
                            marginVertical: 10,
                            paddingVertical: 10,
                        }}>
                        <Picker
                            selectedValue={carCategory}
                            style={{
                                height: 50,
                                flex: 1,
                                marginLeft: 15,
                            }}
                            onValueChange={itemValue => setCarCategory(itemValue)}>
                            <Picker.Item label="Suv" value="1" />
                            <Picker.Item label="Sedan" value="2" />
                            <Picker.Item label="Mini" value="3" />
                            <Picker.Item label="Mini-Van" value="4" />
                            <Picker.Item label="Pickup" value="5" />
                        </Picker>
                    </Button>

                    <TextInput value={vehicleNo} onTextChange={setVehicleNo} placeholder="Vehicle No." />
                    <TextInput value={vehicleBrand} onTextChange={setVehicleBrand} placeholder="Vehicle Brand" />
                    <TextInput value={vehicleModal} onTextChange={setVehicleModal} placeholder="Vehicle Modal" />
                    <TextInput value={vehicleColor} onTextChange={setVehicleColor} placeholder="Vehicle Color" />
                    <TextInput value={vehicleSeats} onTextChange={setVehicleSeats} placeholder="Vehicle Seats" />
                    <TextInput
                        value={manufactureYear}
                        onTextChange={setManufactureYear}
                        placeholder="Manufacture Year"
                    />
                    <BottomButton onPress={_handleConfirm}>
                        <ButtonText>{settingNav ? 'Update' : 'Next'}</ButtonText>
                    </BottomButton>
                </View>
            </BackgroundBg>
        </View>
    );
};
