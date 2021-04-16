import React, {useEffect} from 'react';
import TextTicker from 'react-native-text-ticker';
import {useNavigation} from '@react-navigation/core';

import {
    Container,
    TextLight,
    ButtonText,
    NumberText,
    KmContainer,
    SubContainer,
    ButtonContainer,
    ContainerBottom,
    SubContainerLeft,
    SubContainerRight,
    BottomViewContainer,
} from './Style';
import {useAuth, useTheme, useTrip} from '../../context';
import {UPDATE_BOOKING} from '../../services';
import {showLog} from '../../utils';
import {DirectionIcon} from '../../utils/Svg';
import {View} from 'react-native';
import {STATUS} from '../../config/Constants';

export default ({
    kms = 20,
    title = 'new notification',
    body = 'bassdf',
    userOrder_id = 1,
    driverOrder_id = 2,
    distance,
    customerDetails = {
        customer_id: '',
        mobile: '',
        first_name: '',
        profile_pic: '',
    },

    pickup = {
        lat: '',
        long: '',
        text: '',
    },
    drop = {
        lat: '',
        long: '',
        text: '',
    },
}) => {
    const {user} = useAuth();
    const {colors} = useTheme();
    const navigation = useNavigation();
    const {updateTrip, trip} = useTrip();

    useEffect(() => {
        console.log('TRIPS => ', trip);
    }, [trip]);

    const _handleAccept = () => {
        UPDATE_BOOKING(
            {
                user_id: user?.id,
                order_id: driverOrder_id,
                status: 'accept',
            },
            response => {
                showLog('🚀 ~ file: BookingReply.jsx ~ line 51 ~ response', response);
                updateTrip({
                    status: STATUS.ACCEPT,
                    customer_id: customerDetails?.customer_id,
                    customer_mobile: customerDetails?.mobile,
                    customer_first_name: customerDetails?.first_name,
                    customer_profile_pic: customerDetails?.profile_pic,
                    order_id: driverOrder_id,
                    from: {
                        location: {
                            latitude: pickup?.lat,
                            longitude: pickup?.long,
                            latitudeDelta: null,
                            longitudeDelta: null,
                        },
                        pickUpText: pickup?.text,
                    },
                    to: {
                        location: {
                            latitude: drop?.lat,
                            longitude: drop?.long,
                            latitudeDelta: null,
                            longitudeDelta: null,
                        },
                        dropText: drop?.text,
                    },
                });
                navigation.navigate('OngoingTrip', {
                    customer_mobile: customerDetails?.mobile,
                    customer_first_name: customerDetails?.first_name,
                    customer_profile_pic: customerDetails?.profile_pic,
                    order_id: driverOrder_id,
                    pickupLat: pickup?.lat,
                    pickupLong: pickup?.long,
                    dropLat: drop?.lat,
                    dropLong: drop?.long,
                });
            },
        );
    };

    const _handleDecline = () => {
        UPDATE_BOOKING(
            {
                user_id: user?.id,
                order_id: driverOrder_id,
                status: 'decline',
            },
            response => {
                showLog('🚀 ~ file: BookingReply.jsx ~ line 70 ~ response', response);
                navigation.replace('HomeScreen');
            },
        );
    };

    return (
        <BottomViewContainer>
            <SubContainer style={{marginBottom: '12%'}}>
                <Container>
                    <SubContainerLeft>
                        <TextLight>Distance</TextLight>
                        <KmContainer>
                            <NumberText>{kms}</NumberText>
                            <TextLight>km</TextLight>
                        </KmContainer>
                    </SubContainerLeft>
                    <SubContainerRight>
                        <TextLight>Pickup Destination</TextLight>
                        <TextTicker
                            duration={10000}
                            loop
                            bounce
                            repeatSpacer={50}
                            marqueeDelay={1000}>
                            {pickup?.text}
                        </TextTicker>
                        {/* <TextPlace></TextPlace> */}
                    </SubContainerRight>
                </Container>
            </SubContainer>

            <SubContainer style={{height: 80}}>
                <Container>
                    <SubContainerLeft>
                        <View
                            style={{
                                flexDirection: 'row',
                            }}>
                            <DirectionIcon />
                            {/* <TextPlace>{pickup?.text}</TextPlace>
                        <TextPlace>{drop?.text}</TextPlace> */}
                            <View
                                style={{
                                    paddingStart: 10,
                                    width: '90%',
                                    justifyContent: 'space-between',
                                }}>
                                <TextTicker
                                    style={{width: '20%'}}
                                    duration={10000}
                                    loop
                                    bounce
                                    repeatSpacer={50}
                                    marqueeDelay={1000}>
                                    {pickup?.text}
                                </TextTicker>
                                <TextTicker
                                    style={{width: '20%'}}
                                    duration={10000}
                                    loop
                                    bounce
                                    repeatSpacer={50}
                                    marqueeDelay={1000}>
                                    {drop?.text}
                                </TextTicker>
                            </View>
                        </View>
                    </SubContainerLeft>
                    <SubContainerRight>
                        <TextLight>Pickup Distance</TextLight>
                        <KmContainer>
                            <NumberText>{distance}</NumberText>
                            <TextLight>km</TextLight>
                        </KmContainer>
                    </SubContainerRight>
                </Container>
            </SubContainer>
            <ContainerBottom>
                <ButtonContainer onPress={_handleAccept}>
                    <ButtonText>Accept</ButtonText>
                </ButtonContainer>

                <ButtonContainer
                    onPress={_handleDecline}
                    style={{backgroundColor: colors.danger.regular}}>
                    <ButtonText>Decline</ButtonText>
                </ButtonContainer>
            </ContainerBottom>
        </BottomViewContainer>
    );
};
