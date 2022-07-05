import {useTranslation} from 'react-i18next';
import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {View, Text, TouchableOpacity} from 'react-native';
import {BaseStyle} from '../../style/components/baseStyle';
import LottiePlayer from '../../components/tools/LottiePlayer';

const NotFount: FunctionComponent = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();

    return (
        <View style={BaseStyle.pageContainer}>
            <View style={BaseStyle.notFoundContainer}>
                <View style={BaseStyle.notFoundAnimationContainer}>
                    <LottiePlayer source={require('../../../assets/animations/page-not-found.json')} autoPlay={true} loop={true} style={BaseStyle.notFoundAnimation}/>
                </View>
                <View style={BaseStyle.notFoundButtonContainer}>
                    <TouchableOpacity style={BaseStyle.notFoundButton} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="keyboard-backspace" style={BaseStyle.notFoundButtonIcon}/>
                        <Text style={BaseStyle.notFoundButtonText}>{t('page-not-found-go-back', 'Geri Dön')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default NotFount;
