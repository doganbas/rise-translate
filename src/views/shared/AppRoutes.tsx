// noinspection JSUnusedGlobalSymbols

import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import React, {FunctionComponent} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BaseStyle} from '../../style/components/baseStyle';
import TranslateHistory from '../history/TranslateHistory';
import LaunchScreen from '../home/LaunchScreen';
import AppSetting from '../setting/AppSetting';
import Header from './Header';

const AppNavigator = createBottomTabNavigator();
const AppRoutes: FunctionComponent = () => {
    const {t} = useTranslation();

    const renderBarIcon = (focused: boolean, iconName: string, title: string) => {
        return (
            <View style={BaseStyle.appMenuTabContainer}>
                <MaterialCommunityIcons name={iconName as any} style={[BaseStyle.appMenuTabIcon, focused && BaseStyle.appMenuTabIconActive]}/>
                <Text style={[BaseStyle.appMenuTabText, focused && BaseStyle.appMenuTabTextActive]}>{title}</Text>
            </View>
        )
    }

    return (
        <AppNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: () => <Header/>,
                headerTransparent: true
            }}
        >
            <AppNavigator.Screen name="Home" component={LaunchScreen} options={{tabBarIcon: ({focused}) => renderBarIcon(focused, 'translate', t('screen-home-tab-title', 'Anasayfa')), tabBarShowLabel: false}}/>
            <AppNavigator.Screen name="History" component={TranslateHistory} options={{tabBarIcon: ({focused}) => renderBarIcon(focused, 'translate', t('screen-history-tab-title', 'Arama Geçmişi')), tabBarShowLabel: false}}/>
            <AppNavigator.Screen name="Setting" component={AppSetting} options={{tabBarIcon: ({focused}) => renderBarIcon(focused, 'translate', t('screen-setting-tab-title', 'Ayarlar')), tabBarShowLabel: false}}/>
        </AppNavigator.Navigator>
    )
}

export default AppRoutes;

