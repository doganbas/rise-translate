import {useTranslation} from 'react-i18next';
import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import {applicationLanguageActionCreators, ApplicationLanguageState} from '../../stores/applicationLanguageStore';
import {TranslationHistoryStyle} from '../../style/components/translaterHistoryStyle';
import {SettingStyle} from '../../style/components/settingStyle';
import {ApplicationStates} from '../../stores/applicationStore';
import {BaseStyle} from '../../style/components/baseStyle';
import {CustomThunkDispatch} from '../../types';

export const AppSetting: FunctionComponent = () => {
    const languageState = useSelector<ApplicationStates, ApplicationLanguageState>(states => states.ApplicationLanguageState);
    const dispatch = useDispatch<CustomThunkDispatch>()
    const {t} = useTranslation();

    return (
        <View style={BaseStyle.pageContainer}>
            <View style={TranslationHistoryStyle.historyTitleContainer}>
                <Text style={TranslationHistoryStyle.historyTitle}>{t('system-setting-general-title', 'Uygulama Ayarları')}</Text>
            </View>
            <View style={SettingStyle.settingSection}>
                <View style={SettingStyle.settingSectionTitleContainer}>
                    <Text style={SettingStyle.settingSectionTitle}>
                        {t('system-setting-language', 'Uygulama Dili')}
                    </Text>
                </View>
                <View style={SettingStyle.settingSectionContent}>
                    {
                        languageState.languageList.map((item, index) =>
                            <View key={`language-select-${index}`} style={SettingStyle.languageListLineContainer}>
                                <TouchableOpacity onPress={() => dispatch(applicationLanguageActionCreators.changeApplicationLanguage(item))}>
                                    <View style={[SettingStyle.languageListLine, item.globalName == languageState.activeLanguage?.globalName && SettingStyle.languageListLineActive]}>
                                        <Text style={SettingStyle.languageListLineText}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
            </View>
            <View style={SettingStyle.clearScrollLast}/>
        </View>
    )
}

export default AppSetting;
