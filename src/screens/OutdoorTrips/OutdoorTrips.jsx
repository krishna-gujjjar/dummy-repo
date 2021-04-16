import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Alert, BackHeader, OutdoorTripCard, TextInput} from '../../component';
import {useAuth} from '../../context';
import {BID, GET_ALL_OUTDOOR_TRIPS} from '../../services/api';
import colors from '../../styles/colors';
import {showLog} from '../../utils';
import {TextSub, BidContainer, BidTopText, ButtonText, BottomButton} from './Style';

export default () => {
    const {user} = useAuth();
    const [allOutdoorTrip, setAllOutdoorTrip] = useState([]);
    const navigation = useNavigation();
    const [loader, setLoader] = useState(true);
    const [bidView, setBidView] = useState(false);
    const [clickedBid, setClickedBid] = useState(null);
    const [bidPrice, setBidPrice] = useState(null);

    useEffect(() => {
        GET_ALL_OUTDOOR_TRIPS(response => {
            setLoader(false);
            setAllOutdoorTrip(response);
        });
    }, []);

    const _handleOnPress = id => {
        console.log('IDDD', id);
        setClickedBid(id);
        setBidView(true);
    };

    const _handleBidPress = () => {
        if (!bidPrice) {
            Alert('Please Write Bid Amount');
            setBidView(false);
            return;
        }
        BID(
            {
                user_order_id: clickedBid,
                driver_id: user?.id,
                price: bidPrice,
            },
            response => {
                showLog('response = >', response);
                Alert('Bid Successful');
                navigation.replace('RootDrawer');
            },
        );
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}>
            {/* {loader ? <Loader /> : <></>} */}

            <BackHeader text="Outdoor Trips" />

            {bidView ? (
                <BidContainer>
                    <BidTopText>Add Your Bid Price</BidTopText>

                    <TextInput
                        style={{
                            width: '80%',
                            alignSelf: 'center',
                            zIndex: 3,
                            elevation: 3,
                        }}
                        keyboardType="numeric"
                        placeholder="Bid Price"
                        onTextChange={setBidPrice}
                    />

                    <BottomButton onPress={() => _handleBidPress()}>
                        <ButtonText>bid</ButtonText>
                    </BottomButton>
                </BidContainer>
            ) : (
                <></>
            )}

            <ScrollView
                style={{marginTop: '22%'}}
                contentContainerStyle={{flexGrow: 1, paddingBottom: '5%'}}>
                <TextSub>you can place bid on all outdoor trips</TextSub>
                {allOutdoorTrip.map(value => (
                    <OutdoorTripCard
                        onPress={() => _handleOnPress(value?.id)}
                        id={value?.id}
                        key={value?.id}
                        pickup={value?.pickup_text}
                        drop={value?.drop_text}
                        km={value?.kms}
                        date={value?.booking_date}
                    />
                ))}
            </ScrollView>
        </View>
    );
};
