import React, {FunctionComponent, useEffect, useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {BaseStyle} from '../../style/components/baseStyle';
import {TranslatorStyle} from '../../style/components/translatorStyle';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {ApplicationStates} from '../../stores/applicationStore';
import {ApplicationLanguageState} from '../../stores/applicationLanguageStore';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const LaunchScreen: FunctionComponent = () => {
    const navigation = useNavigation();
    const {t} = useTranslation();
    const languageStates = useSelector<ApplicationStates, ApplicationLanguageState>(states => states.ApplicationLanguageState);


    return (
        <View style={BaseStyle.pageContainer}>
            <View style={BaseStyle.keyboardAvoid}>
                <ScrollView
                    style={BaseStyle.customScrollContainer}
                    contentContainerStyle={BaseStyle.customScroll}
                    keyboardShouldPersistTaps={'handled'}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    scrollIndicatorInsets={{right: 1}}
                >
                    <View style={TranslatorStyle.languageDisplayContainer}>
                        <TouchableOpacity style={TranslatorStyle.languageDisplayItem}>
                            <Text style={TranslatorStyle.languageDisplayItemText}>Türkçe</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={TranslatorStyle.languageDisplaySwap}>
                            <MaterialCommunityIcons name="swap-horizontal" style={TranslatorStyle.languageDisplaySwapIcon}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={TranslatorStyle.languageDisplayItem}>
                            <Text style={TranslatorStyle.languageDisplayItemText}>İngilizce</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={TranslatorStyle.translateInputContainer}>
                        <TextInput
                            multiline={true}
                            placeholder={'Metin girin'}
                            style={TranslatorStyle.translateInput}
                        />

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default LaunchScreen;
