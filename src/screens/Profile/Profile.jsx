import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {Alert, Loader, RideDetail} from '../../component';
import {AppKey} from '../../config/Constants';
import {useAuth} from '../../context';
import {useStorage} from '../../hooks';

import {DRIVER_RIDES} from '../../services/api';
import {showLog} from '../../utils';

import {
    Container,
    GreetingText,
    HiText,
    NameText,
    ProfileImage,
    RideText,
    RupeeIcon,
    RupeeText,
    TextContainer,
    UserDetailsContainer,
    HeaderContainer,
    RidesContainer,
    HeaderBackground,
    DrawerIcon,
} from './Style';
// import {useStorage} from '../../hooks';
// import {AppKey} from '../../config/Constants';

export default () => {
    const {storageItem} = useStorage(AppKey.auth);
    const {user} = useAuth();
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const [userName, setUserName] = useState('Nicolas');
    const [userPicture, setUserPicture] = useState(null);
    const [loadData, setLoadData] = useState(false);
    const [loader, setLoader] = useState(false);
    const [driverRides, setDriverRides] = useState([]);

    useEffect(() => {
        if (storageItem === null || storageItem === undefined || storageItem === '') {
        } else {
            setUserName(storageItem?.first_name + ' ' + storageItem?.last_name);
            setUserPhoneNumber(storageItem?.mobile);
            setLoadData(true);
            setLoader(true);
            if (storageItem?.profile_pic) {
                setUserPicture(storageItem?.profile_pic);
            }
        }
    }, [storageItem]);

    if (loadData) {
        DRIVER_RIDES(
            {
                driver_id: storageItem?.data?.id,
            },
            response => {
                showLog('Profile => ', response);
                if (!response?.id) {
                    Alert('No Rides right Now');
                }
                setDriverRides(response);
                setLoadData(false);
                setLoader(false);
            },
        );
    }

    return (
        <Container>
            {loader ? <Loader /> : <></>}
            <HeaderContainer>
                <HeaderBackground source={require('../../assets/images/background_profile.png')} />
                <ProfileImage
                    source={{
                        uri: userPicture ? userPicture : 'https://picsum.photos/200',
                    }}
                />
                <TextContainer>
                    <HiText>Hi,</HiText>
                    <NameText numberOfLines={1}>{userName}</NameText>
                    <GreetingText>How's you?</GreetingText>
                </TextContainer>

                <UserDetailsContainer>
                    <RupeeIcon>{'\u20B9'}</RupeeIcon>
                    <RupeeText>{user?.amount}</RupeeText>
                </UserDetailsContainer>
            </HeaderContainer>
            <RidesContainer>
                <RideText>Your Drives</RideText>

                <ScrollView style={{marginBottom: 70}} contentContainerStyle={{flexGrow: 1, paddingBottom: '5%'}}>
                    {driverRides.map(value => (
                        <RideDetail
                            key={value.id}
                            time={value.created_date}
                            drop={value.drop_text}
                            pickup={value.pickup_text}
                            price={value.price}
                        />
                    ))}
                </ScrollView>
            </RidesContainer>
            <DrawerIcon />
        </Container>
    );
};
