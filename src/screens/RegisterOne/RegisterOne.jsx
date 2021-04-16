import {RNS3} from 'react-native-aws3';
import React, {useEffect, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation, useRoute} from '@react-navigation/core';

import {useStorage} from '../../hooks';
import {useAuth, useTheme} from '../../context';
import {showError, showLog} from '../../utils';
import {UPDATE_DETAILS} from '../../services/api';
import {CameraIcon, CHECK_ICON} from '../../utils/Svg';
import {AppKey, S3_DETAILS} from '../../config/Constants';
import {Alert, BackHeader, ContainerAuth, Loader} from '../../component';
import {BottomButton, ButtonText, DocText, IconCamera, SubHeading, UploadDocContainer} from './Style';

export default () => {
    const {params} = useRoute();
    const {colors} = useTheme();
    const {user} = useAuth();
    const navigation = useNavigation();
    const [awsRc, setAwsRc] = useState('');
    const [awsDrive, setAwsDrive] = useState('');
    const {storageItem} = useStorage(AppKey.auth);
    const [showLoader, setShowLoader] = useState(false);
    const [settingNav, setSettingNav] = useState(false);
    const {updateStorageItem} = useStorage(AppKey?.auth);
    const [awsPollution, setAwsPollution] = useState('');

    useEffect(() => {
        if (params?.type) setSettingNav(true);
    }, [params]);

    const _handleImageUpload = type => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            cropperCircleOverlay: true,
        })
            .then(image => {
                showLog('🚀 ~ file: RegisterOne.jsx ~ line 38 ~ image', image);
                if (type === 'rc') HandleImageUploadToAws('rc', image);
                else if (type === 'drive') HandleImageUploadToAws('drive', image);
                else if (type === 'pollution') HandleImageUploadToAws('pollution', image);
            })
            .catch(showError);
    };

    const HandleImageUploadToAws = (type, image) => {
        RNS3.put(
            {
                uri: image.path,
                name: new Date().getMilliseconds(),
                type: image.mime,
            },
            S3_DETAILS,
        )
            .then(value => {
                if (type === 'rc') setAwsRc(value.body.postResponse.location);
                else if (type === 'drive') setAwsDrive(value.body.postResponse.location);
                else if (type === 'pollution') setAwsPollution(value.body.postResponse.location);
            })
            .catch(showError);
    };

    const Update = () => {
        if (settingNav) {
            setShowLoader(true);
            UPDATE_DETAILS(
                {
                    user_id: storageItem?.id,
                    registration_certificate: awsRc,
                    pollution_certificate: awsPollution,
                    driving_licence: awsDrive,
                },
                response => {
                    setShowLoader(false);
                    showLog('🚀 ~ file: RegisterOne.jsx ~ line 29 ~ updateDetails', response);
                    updateStorageItem(response);
                    navigation.goBack();
                },
            );
        } else {
            if (!awsRc) return Alert('Please Add Your Car Rc');
            if (!awsDrive) return Alert('Please Add your Driving License');

            setShowLoader(true);
            UPDATE_DETAILS(
                {
                    user_id: storageItem?.id,
                    registration_certificate: awsRc,
                    pollution_certificate: awsPollution,
                    driving_licence: awsDrive,
                },
                response => {
                    setShowLoader(false);
                    showLog('🚀 ~ file: RegisterOne.jsx ~ line 29 ~ updateDetails', response);
                    updateStorageItem(response);
                    navigation.navigate('RegisterTwo');
                },
            );
        }
    };

    return (
        <ContainerAuth>
            {showLoader && <Loader />}
            <BackHeader text="Car Documents" />
            <SubHeading>Upload your Car related details</SubHeading>
            <SubHeading style={{marginTop: 0, marginBottom: '10%'}}>To complete your KYC</SubHeading>
            <UploadDocContainer onPress={() => _handleImageUpload('rc')}>
                <DocText>Car RC</DocText>
                <IconCamera>
                    {awsRc !== '' ? (
                        <CHECK_ICON width={30} height={30} fill={colors.primary.regular} />
                    ) : (
                        <CameraIcon width={30} height={30} fill={colors.gray.light} />
                    )}
                </IconCamera>
            </UploadDocContainer>

            <UploadDocContainer onPress={() => _handleImageUpload('drive')}>
                <DocText>Driving License</DocText>
                <IconCamera>
                    {awsDrive !== '' ? (
                        <CHECK_ICON width={30} height={30} fill={colors.primary.regular} />
                    ) : (
                        <CameraIcon width={30} height={30} fill={colors.gray.light} />
                    )}
                </IconCamera>
            </UploadDocContainer>

            <UploadDocContainer onPress={() => _handleImageUpload('pollution')}>
                <DocText>Pollution License</DocText>
                <IconCamera>
                    {awsPollution !== '' ? (
                        <CHECK_ICON width={30} height={30} fill={colors.primary.regular} />
                    ) : (
                        <CameraIcon width={30} height={30} fill={colors.gray.light} />
                    )}
                </IconCamera>
            </UploadDocContainer>

            <BottomButton onPress={Update}>
                <ButtonText>{settingNav ? 'Update' : 'Next'}</ButtonText>
            </BottomButton>
        </ContainerAuth>
    );
};
