import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {DrawerIcon} from '../../utils/Svg';
import {Colors, Typography} from '../../styles';
import {useAuth, useTheme} from '../../context';
import {Button, Container, Image} from './Style';

export default ({showProfile, style, online}) => {
    const {user} = useAuth();
    const {colors} = useTheme();
    const navigation = useNavigation();
    const [userProfile, setUserProfile] = useState(null);
    const _handleDrawerPress = () => navigation.openDrawer();
    const _handleProfilePress = () => navigation.navigate('Profile');

    useEffect(() => {
        if (user !== undefined && user?.profile_pic) setUserProfile(user.profile_pic);
    }, [user]);

    return (
        <Container style={style}>
            <Button onPress={_handleDrawerPress}>
                <DrawerIcon fill={colors.white} stroke={colors.dark} />
            </Button>

            {showProfile && (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                        style={{
                            marginRight: 10,
                            borderRadius: 10,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            color: Colors.default.white,
                            fontSize: Typography.FONT_SIZE_18,
                            backgroundColor: Colors.default.backgroundDark,
                            fontFamily: Typography.FONT_FAMILY_PARA_MEDIUM,
                        }}>
                        {user?.amount} INR
                    </Text>
                    <Button onPress={_handleProfilePress}>
                        <Image source={{uri: userProfile ?? 'https://picsum.photos/200'}} />
                        <View
                            style={{
                                right: 0,
                                bottom: 0,
                                width: '20%',
                                height: '20%',
                                borderWidth: 2,
                                borderRadius: 10,
                                borderColor: '#000',
                                position: 'absolute',
                                backgroundColor: online ? '#5DFC0A' : '#FF8C00',
                            }}
                        />
                    </Button>
                </View>
            )}
        </Container>
    );
};
