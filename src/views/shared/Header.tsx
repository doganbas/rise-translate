import {StatusBar} from 'expo-status-bar';
import {MaterialIcons} from '@expo/vector-icons';
import {TouchableOpacity, View, Image} from 'react-native';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {HeaderStyle} from '../../style/components/headerStyle';
import {appLogoLight} from '../../../assets/images';

const Header: FunctionComponent = () => {
    const navigationState = useNavigationState(states => states);
    const navigation = useNavigation();
    const [activeScreen, setActiveScreen] = useState<string>('Home');

    useEffect(() => {
        const lastScreen = navigationState.routes[navigationState.index].name;
        if (activeScreen != lastScreen)
            setActiveScreen(lastScreen);
    }, [navigationState]);

    return (
        <View style={HeaderStyle.headerContainer}>
            <StatusBar style="light"/>
            {
                activeScreen != 'Home' &&
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={HeaderStyle.leftIconContainer}>
                        <MaterialIcons name="arrow-back" style={HeaderStyle.leftIcon}/>
                    </View>
                </TouchableOpacity>
            }
            <View style={HeaderStyle.headerMain}>
                <TouchableOpacity onPress={() => navigation.reset({index: 0, routes: [{name: 'Home'}]})}>
                    <View style={HeaderStyle.headerLogoContainer}>
                        <Image source={appLogoLight} resizeMode="contain" style={HeaderStyle.headerLogo}/>
                    </View>
                </TouchableOpacity>
            </View>
            {
                activeScreen != 'Home' &&
                <View style={HeaderStyle.leftIconContainer}/>
            }
        </View>
    )
}

export default Header;
