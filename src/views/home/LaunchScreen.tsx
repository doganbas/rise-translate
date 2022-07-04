import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const LaunchScreen: FunctionComponent = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>-</Text>
            <Text>-</Text>
            <Text>-</Text>
            <Text>-</Text>
            <Text>-</Text>
            <Text>-</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TestPage')}>
                <Text>Test Panelini Aç</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LaunchScreen;
