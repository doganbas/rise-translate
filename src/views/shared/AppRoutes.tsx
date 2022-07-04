import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import React, {FunctionComponent} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import LaunchScreen from '../home/LaunchScreen';
import Header from './Header';

const AppNavigator = createBottomTabNavigator();
const AppRoutes: FunctionComponent = () => {
    const {t} = useTranslation();


    const renderBarIcon = (focused: boolean, iconName: string, title: string) => {
        return (
            <View>
                <MaterialCommunityIcons name={iconName as any}/>
                <Text>{title}</Text>
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
            <AppNavigator.Screen name="Home" component={LaunchScreen} options={{tabBarIcon: ({focused}) => renderBarIcon(focused, 'card-account-phone', t('screen-home-tab-title', 'Anasayfa')), tabBarShowLabel: false}}/>
        </AppNavigator.Navigator>
    )
}

export default AppRoutes;

