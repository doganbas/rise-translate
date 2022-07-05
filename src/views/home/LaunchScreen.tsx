import {useTranslation} from 'react-i18next';
import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {translationActionCreators, TranslationState} from '../../stores/translationStore';
import {TranslationHistoryStyle} from '../../style/components/translationHistoryStyle';
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

    const swapTranslationLanguage = () => {
        dispatch(translationActionCreators.getTranslation(translationState.liveTranslate, translationState.translationLang, translationState.translateLang));
    }

    return (
        <View style={BaseStyle.pageContainer}>
            <View style={BaseStyle.keyboardAvoid}>
                <View style={TranslationHistoryStyle.languageDisplayContainer}>
                    <TouchableOpacity style={TranslationHistoryStyle.languageDisplayItem} onPress={() => navigation.navigate('LanguageSelect', {languageType: 'from'})}>
                        <Text style={TranslationHistoryStyle.languageDisplayItemText}>{getLanguageDisplayName(translationState.translateLang)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={TranslationHistoryStyle.languageDisplaySwap} onPress={swapTranslationLanguage}>
                        <MaterialCommunityIcons name="swap-horizontal" style={TranslationHistoryStyle.languageDisplaySwapIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={TranslationHistoryStyle.languageDisplayItem} onPress={() => navigation.navigate('LanguageSelect', {languageType: 'to'})}>
                        <Text style={TranslationHistoryStyle.languageDisplayItemText}>{getLanguageDisplayName(translationState.translationLang)}</Text>
                    </TouchableOpacity>
                </View>
                <LiveTranslate/>
                <ScrollView
                    style={[BaseStyle.customScrollContainer, TranslationHistoryStyle.translationResultContainer]}
                    contentContainerStyle={BaseStyle.customScroll}
                    keyboardShouldPersistTaps={'handled'}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    scrollIndicatorInsets={{right: 1}}
                >
                    {
                        !translationState.isFetchTranslate && translationState.liveTranslation &&
                        <>
                            <View style={TranslationHistoryStyle.translationResult}>
                                <View style={TranslationHistoryStyle.translationResultTitle}>
                                    <Text style={TranslationHistoryStyle.translationResultTitleText}>{translationState.liveTranslate?.substr(0, 40)}</Text>
                                    <Text style={TranslationHistoryStyle.translationResultTitleInfo}>{translationState.translateLang} - {translationState.translationLang}</Text>
                                </View>
                            </View>
                            <View style={TranslationHistoryStyle.translationResultContent}>
                                <Text style={TranslationHistoryStyle.translationResultText}>{translationState.liveTranslation}</Text>
                            </View>
                        </>
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default LaunchScreen;
