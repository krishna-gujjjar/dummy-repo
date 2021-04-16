import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {Image, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {Alert, Card, Loader, Maps} from '../../component';
import {useAuth} from '../../context';
import {REVIEW} from '../../services/api';
import {currentLocation} from '../../services/location';
import {
    BottomContainer,
    CloseButtonContainer,
    CommentInput,
    HowWasTripText,
    ProfileImage,
    SendButtonContainer,
    TextButton,
    TextHeading,
} from './Style';

export default () => {
    const navigation = useNavigation();
    const {user} = useAuth();
    const [rating, setRating] = useState('3');
    const [comment, setComment] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [location, setLocation] = useState({
        latitude: 25.179652,
        longitude: 75.8785162,
    });

    useEffect(() => {
        currentLocation(location =>
            setLocation({latitude: location?.coords?.latitude, longitude: location?.coords?.longitude}),
        );
    }, []);

    const _handlePress = () => {
        if (!rating) return Alert('Please Add rating');
        if (!comment) return Alert('Please Add a Comment');
        setShowLoader(true);
        REVIEW(
            {
                reviewer_id: user?.id,
                user_id: 53,
                rate: rating,
                review: comment,
            },
            response => {
                setShowLoader(false);
                console.log('RatingResponse =>', response);
                navigation.replace('RootDrawer');
            },
        );
    };

    return (
        <View
            style={{
                flex: 1,
            }}>
            {showLoader && <Loader />}
            <Maps latitude={location?.latitude} longitude={location?.longitude} />
            <Image
                style={{
                    flex: 1,
                }}
                source={{uri: 'https://picsum.photos/1000'}}
                resizeMode="cover"
            />
            <Card
                rounded="lg"
                bottom
                style={{
                    width: '100%',
                    paddingVertical: 30,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <ProfileImage />
                    <TextHeading>John Due</TextHeading>
                </View>

                <HowWasTripText>How was your trip?</HowWasTripText>

                <AirbnbRating onFinishRating={setRating} style={{paddingVertical: 10}} />

                <CommentInput onChangeText={value => setComment(value)} multiline placeholder="Comment..." />

                <BottomContainer>
                    <CloseButtonContainer>
                        <TextButton>Close</TextButton>
                    </CloseButtonContainer>

                    <SendButtonContainer onPress={_handlePress}>
                        <TextButton>Send</TextButton>
                    </SendButtonContainer>
                </BottomContainer>
            </Card>
        </View>
    );
};
