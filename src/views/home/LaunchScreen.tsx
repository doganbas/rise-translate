import {useTranslation} from 'react-i18next';
import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {translationActionCreators, TranslationState} from '../../stores/translationStore';
import {TranslatorStyle} from '../../style/components/translatorStyle';
import {ApplicationStates} from '../../stores/applicationStore';
import {BaseStyle} from '../../style/components/baseStyle';
import {CustomThunkDispatch} from '../../types';
import LiveTranslate from './LiveTranslate';

const LaunchScreen: FunctionComponent = () => {
    const translationState = useSelector<ApplicationStates, TranslationState>(states => states.TranslationState);
    const dispatch = useDispatch<CustomThunkDispatch>();
    const navigation = useNavigation();
    const {t} = useTranslation();

    const getLanguageDisplayName = (languageGlobalName: string): string => {
        const activeLanguage = translationState.apiLanguages.find(nq => nq.code == languageGlobalName);
        if (activeLanguage)
            return t(`language-${languageGlobalName}`, activeLanguage.name);
        else
            return t('language-tr', 'Türkçe');
    }

    const getTranslation = () => {

    }

    const swapTranslationLanguage = () => {
        dispatch(translationActionCreators.setTranslationLang(translationState.translationLang, translationState.translateLang));
        getTranslation();
    }

    return (
        <View style={BaseStyle.pageContainer}>
            <View style={BaseStyle.keyboardAvoid}>
                <View style={TranslatorStyle.languageDisplayContainer}>
                    <TouchableOpacity style={TranslatorStyle.languageDisplayItem} onPress={() => navigation.navigate('LanguageSelect', {languageType: 'from'})}>
                        <Text style={TranslatorStyle.languageDisplayItemText}>{getLanguageDisplayName(translationState.translateLang)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={TranslatorStyle.languageDisplaySwap} onPress={swapTranslationLanguage}>
                        <MaterialCommunityIcons name="swap-horizontal" style={TranslatorStyle.languageDisplaySwapIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={TranslatorStyle.languageDisplayItem} onPress={() => navigation.navigate('LanguageSelect', {languageType: 'to'})}>
                        <Text style={TranslatorStyle.languageDisplayItemText}>{getLanguageDisplayName(translationState.translationLang)}</Text>
                    </TouchableOpacity>
                </View>
                <LiveTranslate/>
                <ScrollView
                    style={[BaseStyle.customScrollContainer, TranslatorStyle.translationResultContainer]}
                    contentContainerStyle={BaseStyle.customScroll}
                    keyboardShouldPersistTaps={'handled'}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    scrollIndicatorInsets={{right: 1}}
                >
                    {
                        !translationState.isFetchTranslate && translationState.liveTranslation &&
                        <>
                            <View style={TranslatorStyle.translationResult}>
                                <View style={TranslatorStyle.translationResultTitle}>
                                    <Text style={TranslatorStyle.translationResultTitleText}>{translationState.liveTranslate?.substr(0, 40)}</Text>
                                    <Text style={TranslatorStyle.translationResultTitleInfo}>{translationState.translateLang} - {translationState.translationLang}</Text>
                                </View>
                            </View>
                            <View style={TranslatorStyle.translationResultContent}>
                                <Text style={TranslatorStyle.translationResultText}>{translationState.liveTranslation}</Text>
                            </View>
                        </>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default LaunchScreen;
