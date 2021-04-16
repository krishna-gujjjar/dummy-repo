import {Text} from 'react-native';
import RNRestart from 'react-native-restart';
import React, {useEffect, useState} from 'react';
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

import {
    MobileText,
    HeaderContainer,
    ProfileHeaderText,
    Container,
    TextContainer,
    ProfilePic,
    DrawerItemContainer,
    DrawerItemText,
} from './Style';
import {Alert} from '..';
import {Typography} from '../../styles';
import {useAuth, useTheme} from './../../context';

export default props => {
    const {colors} = useTheme();
    const {user, logout} = useAuth();
    const [userName, setUserName] = useState('');
    const [userPicture, setUserPicture] = useState(null);
    const [userPhoneNumber, setUserPhoneNumber] = useState('');

    useEffect(() => {
        if (user !== undefined) {
            if (user?.profile_pic) setUserPicture(user?.profile_pic);
            setUserName(user?.first_name + ' ' + user?.last_name);
            setUserPhoneNumber(user?.mobile);
        }
    }, [user]);

    return (
        <Container>
            <HeaderContainer>
                <TextContainer>
                    <ProfileHeaderText>{userName}</ProfileHeaderText>
                    <MobileText>{userPhoneNumber}</MobileText>
                </TextContainer>

                <TextContainer>
                    <ProfilePic source={{uri: userPicture ?? 'https://picsum.photos/200'}} />
                </TextContainer>
            </HeaderContainer>

            <DrawerContentScrollView {...props} contentContainerStyle={{height: '100%', marginLeft: 5}}>
                <DrawerItemList
                    {...props}
                    labelStyle={{
                        color: colors.dark,
                        fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                        fontSize: Typography.FONT_SIZE_16,
                    }}
                    itemStyle={{
                        borderRadius: 12,
                        marginVertical: 0,
                        paddingVertical: 0,
                        height: 45,
                        width: '80%',
                        alignContent: 'center',
                        justifyContent: 'center',
                        paddingLeft: 5,
                    }}
                    inactiveTintColor={colors.dark}
                    inactiveBackgroundColor="transparent"
                    activeTintColor={colors.primary.dark}
                    activeBackgroundColor={colors.primary.regular}
                />

                <DrawerItem
                    activeBackgroundColor={colors.primary.regular}
                    label={() => (
                        <Text
                            style={{
                                color: colors.dark,
                                fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                                fontSize: Typography.FONT_SIZE_16,
                                paddingLeft: 5,
                            }}>
                            FAQ
                        </Text>
                    )}
                    onPress={() => Alert('Coming Soon')}
                />

                <DrawerItem
                    activeBackgroundColor={colors.primary.regular}
                    label={() => (
                        <Text
                            style={{
                                color: colors.dark,
                                fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                                fontSize: Typography.FONT_SIZE_16,
                                paddingLeft: 5,
                            }}>
                            Help & Support
                        </Text>
                    )}
                    onPress={() => Alert('Coming Soon')}
                />
                <DrawerItemContainer>
                    <DrawerItem
                        label={() => <DrawerItemText>Logout</DrawerItemText>}
                        onPress={() => {
                            props.navigation.toggleDrawer();
                            logout(() => RNRestart.Restart());
                        }}
                    />
                </DrawerItemContainer>
            </DrawerContentScrollView>
        </Container>
    );
};
