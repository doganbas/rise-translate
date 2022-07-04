import i18next from 'i18next';
import {View} from 'react-native';
import * as Localization from 'expo-localization';
import {useDispatch, useSelector} from 'react-redux';
import React, {FunctionComponent, useEffect} from 'react';
import {applicationLanguageActionCreators, ApplicationLanguageState} from '../../stores/applicationLanguageStore';
import {ApplicationStates} from '../../stores/applicationStore';
import {CustomThunkDispatch, Nullable} from '../../types';
import {LanguageModel} from '../../models/languageModel';

const ApplicationLanguageProvider: FunctionComponent = (props) => {
    const dispatch = useDispatch<CustomThunkDispatch>();
    const languageState = useSelector<ApplicationStates, ApplicationLanguageState>(state => state.ApplicationLanguageState);

    useEffect(() => {
        dispatch(applicationLanguageActionCreators.initLocalizationSystem());
    }, [dispatch]);

    useEffect(() => {
        let deviceLanguage = Localization.locale;
        if (deviceLanguage.indexOf('-') > -1)
            deviceLanguage = deviceLanguage.split('-')[0].toLowerCase();
        if (deviceLanguage !== languageState.deviceLanguage)
            dispatch(applicationLanguageActionCreators.setDeviceLanguage(deviceLanguage));

        if (languageState.completeLocalization && !languageState.activeLanguage) {
            let selectedLanguage: Nullable<LanguageModel> = languageState.languageList.filter(nq => nq.globalName === deviceLanguage)[0];
            if (!selectedLanguage)
                selectedLanguage = languageState.languageList[0];
            dispatch(applicationLanguageActionCreators.changeApplicationLanguage(selectedLanguage));
        } else if ((!languageState.completeLocalization) || (languageState.completeLocalization && !i18next.isInitialized)) {
            dispatch(applicationLanguageActionCreators.initLocalizationSystem());
        }

    }, [dispatch, languageState]);

    return (
        <>
            {
                languageState.completeLocalization && languageState.activeLanguage && i18next.isInitialized ? props.children : <View/>
            }
        </>
    );
};

export default ApplicationLanguageProvider;
