import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';

import {showError, showLog} from '../../utils';
import {useStorage} from '../../hooks';
import {AppKey, S3_DETAILS} from '../../config/Constants';
import {UPDATE_DETAILS} from '../../services/api';
import {BottomButton, ButtonText, DocText, SubHeading, UploadDocContainer, IconCameraBg} from './Style';
import {Alert, BackHeader, ContainerAuth, Loader} from '../../component';
import ImagePicker from 'react-native-image-crop-picker';
import {CameraIcon, CHECK_ICON} from '../../utils/Svg';
import {useAuth, useTheme} from '../../context';
import {RNS3} from 'react-native-aws3';

export default () => {
    const navigation = useNavigation();
    const {params} = useRoute();

    const {colors} = useTheme();
    const [aadharCard, setAadharCard] = useState();
    const [panCard, setPanCard] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const {storageItem, updateStorageItem} = useStorage(AppKey.auth);
    const [awsAadhar, setAwsAadhar] = useState('');
    const [awsPan, setAwsPan] = useState('');
    const [settingNav, setSettingNav] = useState(false);

    useEffect(() => {
        if (params?.type) setSettingNav(true);
    }, [params]);

    const _handleImageUpload = type => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            compressImageQuality: 0.7,
            cropperCircleOverlay: true,
        })
            .then(image => {
                showLog('🚀 ~ file: RegisterThree.jsx ~ line 33 ~ image', image);
                if (type === 'aadhar') HandleImageUploadToAws('aadhar', image);
                else if (type === 'pan') HandleImageUploadToAws('pan', image);
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
                if (type === 'aadhar') setAwsAadhar(value.body.postResponse.location);
                else if (type === 'pan') setAwsPan(value.body.postResponse.location);
            })
            .catch(showError);
    };

    const _handleConfirm = () => {
        if (settingNav) {
            setShowLoader(true);
            UPDATE_DETAILS(
                {
                    user_id: storageItem?.id,
                    pan: panCard,
                    aadhar: aadharCard,
                },
                response => {
                    setShowLoader(false);
                    showLog('🚀 ~ file: RegisterThree.jsx ~ line 27 ~ updateDetails', response);
                    updateStorageItem(response);
                    navigation.navigate('RegisterFour');
                },
            );
        } else {
            if (!awsAadhar) {
                return Alert('Add your Aadhar Card Number');
            }
            if (!awsPan) {
                return Alert('Add your Pan Card Number');
            }

            setShowLoader(true);
            UPDATE_DETAILS(
                {
                    user_id: storageItem?.id,
                    pan: panCard,
                    aadhar: aadharCard,
                },
                response => {
                    setShowLoader(false);
                    showLog('🚀 ~ file: RegisterThree.jsx ~ line 27 ~ updateDetails', response);
                    updateStorageItem(response);
                    navigation.navigate('RegisterFour');
                },
            );
        }
    };

    return (
        <ContainerAuth
            styleLeft={{
                left: '-50%',
                top: '20%',
            }}
            styleRight={{
                bottom: '5%',
                right: '-67%',
                transform: [{rotate: '-10deg'}],
            }}>
            {showLoader ? <Loader /> : <></>}
            <BackHeader text="Personal Details" />
            <SubHeading>Your personal details</SubHeading>
            <SubHeading
                style={{
                    marginTop: 0,
                    marginBottom: '10%',
                }}>
                to complete your KYC
            </SubHeading>

            <UploadDocContainer onPress={() => _handleImageUpload('aadhar')}>
                <DocText>Aadhar Card</DocText>

                <IconCameraBg>
                    {awsAadhar !== '' ? (
                        <CHECK_ICON width={30} height={30} fill={colors.primary.regular} />
                    ) : (
                        <CameraIcon width={30} height={30} fill={colors.gray.light} />
                    )}
                </IconCameraBg>
            </UploadDocContainer>

            <UploadDocContainer onPress={() => _handleImageUpload('pan')}>
                <DocText>Pan Card</DocText>

                <IconCameraBg>
                    {awsPan !== '' ? (
                        <CHECK_ICON width={30} height={30} fill={colors.primary.regular} />
                    ) : (
                        <CameraIcon width={30} height={30} fill={colors.gray.light} />
                    )}
                </IconCameraBg>
            </UploadDocContainer>

            <BottomButton onPress={_handleConfirm}>
                <ButtonText>Next</ButtonText>
            </BottomButton>
        </ContainerAuth>
    );
};
