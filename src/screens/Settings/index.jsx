import React from 'react';
import {ScrollView} from 'react-native';
import Headers from './Headers';
import SettingListContainer from './SettingListContainer';
import {Container} from './Style';

export default () => {
    return (
        <Container>
            <Headers />

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 15,
                }}>
                <SettingListContainer
                    title="Edit Profile"
                    onNavigate="EditProfile"
                />
                <SettingListContainer
                    title="Edit Car Documents"
                    onNavigate="RegisterOne"
                />
                <SettingListContainer
                    title="Edit Car Details"
                    onNavigate="RegisterTwo"
                />
                <SettingListContainer
                    title="Edit Bank Details"
                    onNavigate="RegisterFour"
                />
                <SettingListContainer title="Terms & Condition" />
                <SettingListContainer title="About Us" />
            </ScrollView>
            {/* <Text>Settting</Text> */}
        </Container>
    );
};
