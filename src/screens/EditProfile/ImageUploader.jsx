import React, {useState} from 'react';
import {RNS3} from 'react-native-aws3';
import ImagePicker from 'react-native-image-crop-picker';

import {showError} from './../../utils';
import {S3_DETAILS} from '../../config/Constants';
import {CameraIcon} from '../../utils/Svg';
import {ImageUploadContainer, ProfileImage, ProfileImagePlaceholder, UploadProfileIcon} from './Style';

export default ({profilePic, setProfilePic}) => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const _handleImageUpload = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            cropperCircleOverlay: true,
        })
            .then(image => {
                RNS3.put(
                    {
                        uri: image?.path,
                        name: new Date().getMilliseconds(),
                        type: image?.mime,
                    },
                    S3_DETAILS,
                )
                    .then(value => {
                        setUploadedImage(value?.body?.postResponse?.location);
                        setProfilePic(value?.body?.postResponse?.location);
                    })
                    .catch(showError);
            })
            .catch(error => error.message !== 'User cancelled image selection' && showError(error));
    };

    return (
        <ImageUploadContainer>
            {uploadedImage || profilePic ? (
                <ProfileImage source={{uri: uploadedImage ?? profilePic}} />
            ) : (
                <ProfileImagePlaceholder />
            )}
            <UploadProfileIcon onPress={_handleImageUpload}>
                <CameraIcon />
            </UploadProfileIcon>
        </ImageUploadContainer>
    );
};
