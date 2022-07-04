import React, {FunctionComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TestPage from '../../components/test/TestComponent';
import AppRoutes from './AppRoutes';

const RootNavigator = createStackNavigator();
const Routes: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <RootNavigator.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}
            >
                <RootNavigator.Group>
                    <RootNavigator.Screen name="AppNavigator" component={AppRoutes}/>
                </RootNavigator.Group>
                <RootNavigator.Group screenOptions={{presentation: 'modal'}}>
                    <RootNavigator.Screen name="TestPage" component={TestPage}/>
                </RootNavigator.Group>
            </RootNavigator.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
