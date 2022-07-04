import * as Updates from 'expo-updates';
import * as Haptics from 'expo-haptics';
import React, {FunctionComponent} from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {applicationLanguageActionCreators, ApplicationLanguageState} from '../../stores/applicationLanguageStore';
import {applicationLoaderActionCreators} from '../../stores/applicationLoaderStore';
import {applicationErrorActionCreators} from '../../stores/applicationErrorStore';
import {ApplicationStates} from '../../stores/applicationStore';
import {DevModalStyle} from '../../style/modal/devModalStyle';
import {ExceptionType} from '../../enums/exceptionType';
import {persistStorage} from '../../config/storeConfig';
import {DevConsole} from '../../helpers/consoleHelper';
import ModalContainer from '../tools/ModalContainer';
import {LoaderType} from '../../enums/loaderType';

const TestComponent: FunctionComponent = () => {
    const dispatch = useDispatch();
    const languageState = useSelector<ApplicationStates, ApplicationLanguageState>(states => states.ApplicationLanguageState);

    const testItems = [
        {title: 'Storage & App'},
        {title: 'Vibration Test', icon: 'vibration', onPress: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)},
        {title: 'View Storage (Console)', icon: 'storage', onPress: () => handleWriteStorage()},
        {title: 'Clear Storage', icon: 'update-disabled', onPress: () => handleClearStorage()},
        {title: 'Reload Application', icon: 'system-update-tv', onPress: () => handleReloadApplication()},

        {title: 'Test Error'},
        {title: 'Create Fatal Error', icon: 'error', onPress: () => handleSetFatalError()},
        {title: 'Create Error', icon: 'error-outline', onPress: () => handleSetError()},
        {title: 'Create Warning', icon: 'warning', onPress: () => handleSetWarning()},
        {title: 'Get Connection Error', icon: 'signal-cellular-connected-no-internet-4-bar', onPress: () => handleConnectionError()},

        {title: 'Test Loadings'},
        {title: 'Show Global Loader', icon: 'panorama-fish-eye', onPress: () => handleSetLoader(LoaderType.inclusive, 'xx1')},
        {title: 'Show Modal Loader', icon: 'panorama-fish-eye', onPress: () => handleSetLoader(LoaderType.overlay, 'xx2')},
        {title: 'Show Custom Loader', icon: 'panorama-fish-eye', onPress: () => handleSetLoader(LoaderType.custom, 'xx3')},

        {title: 'Test Language & Localization'},
        {title: 'Change Lang (TR)', icon: 'language', onPress: () => handleChangeLanguage('tr')},
        {title: 'Change Lang (EN)', icon: 'language', onPress: () => handleChangeLanguage('en')},
        {
            title: 'Translations List', icon: 'language', renderContent: () => <>
                {
                    languageState.completeLocalization && (languageState.activeLanguage?.localization.length ?? 0) > 0 &&
                    languageState.activeLanguage?.localization.map((item, index) => {
                        return (
                            <View style={DevModalStyle.testInlineListItem} key={`language-item-${index}`}>
                                <Text style={DevModalStyle.testInlineListItemKey}>{item.key} :<Text style={DevModalStyle.testInlineListItemValue}>{item.value}</Text></Text>
                            </View>
                        )
                    })
                }
            </>
        },
    ];

    const handleWriteStorage = () => {
        DevConsole.log(persistStorage.getState());
    }

    const handleSetFatalError = () => {
        dispatch(applicationErrorActionCreators.generateApplicationError('Örnek bir hata içeriği genel olarak içerik tam burada olacaktır.', ExceptionType.fatal, '500', true));
    }

    const handleSetError = () => {
        dispatch(applicationErrorActionCreators.generateApplicationError('Örnek bir geçiştirilebilir hata içeriği genel olarak içerik tam burada olacaktır.', ExceptionType.error, '500', true));
    }

    const handleSetWarning = () => {
        dispatch(applicationErrorActionCreators.generateApplicationError('Test', ExceptionType.warning, '403', true));
    }

    const handleSetLoader = (type: LoaderType, loaderId: string) => {
        dispatch(applicationLoaderActionCreators.showGlobalLoader({name: 'test-loading', defaultTranslation: 'Test Yüklemesi'}, loaderId, type));
    }

    const handleChangeLanguage = (languageName: string) => {
        dispatch(applicationLanguageActionCreators.changeApplicationLanguage(languageName));
    }

    const handleConnectionError = () => {
        dispatch(applicationErrorActionCreators.setConnectionStatus(false));

    }

    const handleReloadApplication = async () => {
        await Updates.reloadAsync();
    }

    const handleClearStorage = async () => {
        await persistStorage.purge();
        await AsyncStorage.clear();
    }

    return (
        <ModalContainer containerStyle={DevModalStyle.testModal} isLight={true}>
            <ScrollView style={DevModalStyle.testModalContainer} scrollIndicatorInsets={{right: 1}}>
                {
                    testItems.map((item, index) => {
                        if (!item.onPress && !item.renderContent) {
                            return (
                                <View style={DevModalStyle.testInlineTitle} key={`section-item-${index}`}>
                                    <Text style={DevModalStyle.testInlineTitleText}>{item.title}</Text>
                                </View>
                            )
                        } else if (item.onPress && !item.renderContent) {
                            return (
                                <View style={DevModalStyle.testInlineButtonLine} key={`section-item-${index}`}>
                                    <TouchableOpacity onPress={item.onPress}>
                                        <View style={DevModalStyle.testInlineButtonLineContainer}>
                                            <MaterialIcons name={item.icon as any} style={DevModalStyle.testInlineButtonLineIcon}/>
                                            <Text style={DevModalStyle.testInlineButtonLineText}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        } else if (item.renderContent && !item.onPress) {
                            return (
                                <View style={DevModalStyle.testInlineListContainer} key={`section-item-${index}`}>
                                    <Text style={DevModalStyle.testInlineListTitle}>{item.title}</Text>
                                    <ScrollView style={DevModalStyle.testInlineList} scrollIndicatorInsets={{right: 1}}>
                                        {item.renderContent && item.renderContent()}
                                    </ScrollView>
                                </View>
                            )
                        }
                    })
                }
            </ScrollView>
        </ModalContainer>
    );
};

export default TestComponent;
