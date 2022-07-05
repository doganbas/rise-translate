import React, {FunctionComponent} from 'react';
import {Text, FlatList, ListRenderItemInfo, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ApplicationStates} from '../../stores/applicationStore';
import {TranslationState} from '../../stores/translationStore';
import {BaseStyle} from '../../style/components/baseStyle';
import {TranslationModel} from '../../models/translationModel';
import DateHelper from '../../helpers/dateHelper';
import {useTranslation} from 'react-i18next';
import {TranslationHistoryStyle} from '../../style/components/translaterHistoryStyle';

export const TranslationHistory: FunctionComponent = () => {
    const translationState = useSelector<ApplicationStates, TranslationState>(states => states.TranslationState);
    const {t} = useTranslation();

    const getLanguageDisplayName = (languageGlobalName: string): string => {
        const activeLanguage = translationState.apiLanguages.find(nq => nq.code == languageGlobalName);
        if (activeLanguage)
            return t(`language-${languageGlobalName}`, activeLanguage.name);
        else
            return t('language-tr', 'Türkçe');
    }

    const renderHistoryItem = (renderItem: ListRenderItemInfo<TranslationModel>) => {
        const timeDiff = DateHelper.timeDiffString(renderItem.item.date);
        return (
            <View style={TranslationHistoryStyle.historyItemContainer}>
                <View style={TranslationHistoryStyle.historyItemInfoContainer}>
                    <Text style={TranslationHistoryStyle.historyItemInfoLang}>{getLanguageDisplayName(renderItem.item.fromLang)} - {getLanguageDisplayName(renderItem.item.toLang)}</Text>
                    <Text style={TranslationHistoryStyle.historyItemInfoTime}>{t(timeDiff.key, timeDiff.translate, timeDiff.param)}</Text>
                </View>
                <View>
                    <Text style={TranslationHistoryStyle.historyItemTranslate}>{renderItem.item.translate}</Text>
                </View>
                <View>
                    <Text style={TranslationHistoryStyle.historyItemTranslation}>{renderItem.item.translation}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={BaseStyle.pageContainer}>
            <View style={TranslationHistoryStyle.historyContainer}>
                <View style={TranslationHistoryStyle.historyTitleContainer}>
                    <Text style={TranslationHistoryStyle.historyTitle}>{t('translation-history-title', 'Çeviri Geçmişiniz')}</Text>
                </View>
                <View style={TranslationHistoryStyle.historyListContainer}>
                    <FlatList data={translationState.translationHistory} renderItem={renderHistoryItem}/>
                </View>
            </View>
        </View>
    )
}

export default TranslationHistory;
