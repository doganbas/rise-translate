import {useTranslation} from 'react-i18next';
import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, FlatList, ListRenderItemInfo, TouchableOpacity} from 'react-native';
import {translationActionCreators, TranslationState} from '../../stores/translationStore';
import {LanguageSelectStyle} from '../../style/components/languageSelectStyle';
import {AppNavigatorParamList} from '../../config/appNavigatorParamList';
import ModalContainer from '../../components/tools/ModalContainer';
import {ApplicationStates} from '../../stores/applicationStore';
import {ApiLanguageModel} from '../../models/apiLanguageModel';
import {CustomThunkDispatch} from '../../types';

const LanguageSelectModal: FunctionComponent = () => {
    const translatorState = useSelector<ApplicationStates, TranslationState>(states => states.TranslationState);
    const navigation = useNavigation();
    const route = useRoute<RouteProp<AppNavigatorParamList, 'LanguageSelect'>>();
    const dispatch = useDispatch<CustomThunkDispatch>()
    const {t} = useTranslation();

    const handlePressSelectLanguage = (selectedItem: ApiLanguageModel) => {
        const fromLang = route.params.languageType == 'from' ? selectedItem.code : translatorState.translateLang;
        const toLang = route.params.languageType == 'to' ? selectedItem.code : translatorState.translationLang;
        dispatch(translationActionCreators.setTranslationLang(fromLang, toLang));
        navigation.goBack();
    }

    const renderLanguageItem = (item: ListRenderItemInfo<ApiLanguageModel>) => {
        const activeLanguage = route.params.languageType == 'from' ? translatorState.translateLang : translatorState.translationLang;
        const isActiveItem = activeLanguage == item.item.code;
        return (
            <TouchableOpacity style={[LanguageSelectStyle.flatListItem, isActiveItem && LanguageSelectStyle.flatListItemActive]} onPress={() => handlePressSelectLanguage(item.item)}>
                <View style={LanguageSelectStyle.flatListItemIconContainer}>
                    {
                        isActiveItem &&
                        <MaterialCommunityIcons name="check" style={LanguageSelectStyle.flatListItemIcon}/>
                    }
                </View>
                <Text style={LanguageSelectStyle.flatListItemText}>{item.item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <ModalContainer isLight={false}>
            <View style={LanguageSelectStyle.titleContainer}>
                <Text style={LanguageSelectStyle.title}>
                    {
                        route.params.languageType == 'from' ?
                            t('select-language-title-from', 'Şu dilden çevir') :
                            t('select-language-title-from', 'Şu dile çevir')
                    }
                </Text>
            </View>
            <View style={LanguageSelectStyle.flatListContainer}>
                <FlatList data={translatorState.apiLanguages} renderItem={renderLanguageItem} keyExtractor={item => item.code}/>
            </View>
        </ModalContainer>
    )
}

export default LanguageSelectModal;
