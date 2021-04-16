import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
    SplashScreen,
    SignIn,
    LoginOrRegister,
    Register,
    RegisterOne,
    RegisterTwo,
    RegisterThree,
    RegisterFour,
    Home,
    OtpVerification,
    ChangeTheme,
    Profile,
    ChooseLanguage,
    StartDrive,
    AcceptDeclineDrive,
    Rating,
    Settings,
    EditProfile,
    OngoingTrip,
    OutdoorTrips,
    DriverBids,
} from './screens';
import {CustomMenuBar} from './component';

const DrawerNav = createDrawerNavigator();
const StackNavigator = createStackNavigator();

const RootDrawer = () => (
    <DrawerNav.Navigator
        initialRouteName="Home"
        drawerStyle={{borderBottomEndRadius: 50, backgroundColor: '#0000'}}
        drawerContent={props => <CustomMenuBar {...props} />}>
        <DrawerNav.Screen name="Home" component={HomeStack} />
        <DrawerNav.Screen name="Profile" component={Profile} />
        <DrawerNav.Screen name="OutdoorTrips" component={OutdoorTrips} />
        <DrawerNav.Screen name="Your Orders" component={DriverBids} />
        <DrawerNav.Screen name="ChangeTheme" component={ChangeTheme} />
        <DrawerNav.Screen name="ChooseLanguage" component={ChooseLanguage} />
        <DrawerNav.Screen name="Settings" component={Settings} />
    </DrawerNav.Navigator>
);

const HomeStack = () => (
    <StackNavigator.Navigator initialRouteName="HomeScreen" headerMode="none">
        <StackNavigator.Screen name="HomeScreen" component={Home} />
        <StackNavigator.Screen name="AcceptDeclineDrive" component={AcceptDeclineDrive} />
        <StackNavigator.Screen name="OngoingTrip" component={OngoingTrip} />
    </StackNavigator.Navigator>
);

export default () => (
    <NavigationContainer>
        <StackNavigator.Navigator initialRouteName="SplashScreen" headerMode="none">
            <StackNavigator.Screen name="RootDrawer" component={RootDrawer} />
            <StackNavigator.Screen name="SignIn" component={SignIn} />
            <StackNavigator.Screen name="Rating" component={Rating} />
            <StackNavigator.Screen name="Profile" component={Profile} />
            <StackNavigator.Screen name="Settings" component={Settings} />
            <StackNavigator.Screen name="Register" component={Register} />
            <StackNavigator.Screen name="StartDrive" component={StartDrive} />
            <StackNavigator.Screen name="EditProfile" component={EditProfile} />
            <StackNavigator.Screen name="RegisterOne" component={RegisterOne} />
            <StackNavigator.Screen name="RegisterTwo" component={RegisterTwo} />
            <StackNavigator.Screen name="ChangeTheme" component={ChangeTheme} />
            <StackNavigator.Screen name="SplashScreen" component={SplashScreen} />
            <StackNavigator.Screen name="RegisterFour" component={RegisterFour} />
            <StackNavigator.Screen name="RegisterThree" component={RegisterThree} />
            <StackNavigator.Screen name="ChooseLanguage" component={ChooseLanguage} />
            <StackNavigator.Screen name="OtpVerification" component={OtpVerification} />
            <StackNavigator.Screen name="LoginOrRegister" component={LoginOrRegister} />
        </StackNavigator.Navigator>
    </NavigationContainer>
);
