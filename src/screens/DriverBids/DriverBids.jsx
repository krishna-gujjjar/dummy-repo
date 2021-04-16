import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {BackHeader, BidView} from '../../component';

export default () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}>
            <BackHeader text="Your Bids" />

            <ScrollView
                style={{marginTop: '22%'}}
                contentContainerStyle={{flexGrow: 1, paddingBottom: '5%'}}>
                <BidView pickup="Kota" drop="Jaipur" km="242" date="March 25,2010" status="start" />
                <BidView
                    pickup="Kota"
                    drop="Jaipur"
                    km="242"
                    date="March 25,2010"
                    status="rejected"
                />
                <BidView pickup="Kota" drop="Jaipur" km="242" date="March 25,2010" status="queue" />
                <BidView pickup="Kota" drop="Jaipur" km="242" date="March 25,2010" status="queue" />
                <BidView pickup="Kota" drop="Jaipur" km="242" date="March 25,2010" status="start" />
                <BidView pickup="Kota" drop="Jaipur" km="242" date="March 25,2010" status="queue" />
                <BidView pickup="Kota" drop="Jaipur" km="242" date="March 25,2010" status="start" />
                <BidView pickup="Kota" drop="Jaipur" km="242" date="March 25,2010" status="queue" />
                <BidView
                    pickup="Kota"
                    drop="Jaipur"
                    km="242"
                    date="March 25,2010"
                    status="rejected"
                />
            </ScrollView>
        </View>
    );
};
