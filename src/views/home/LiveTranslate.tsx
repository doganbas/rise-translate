import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {translationActionCreators, TranslationState} from '../../stores/translationStore';
import MultiColorTextInput from '../../components/form/MultiColorTextInput';
import {TranslationHistoryStyle} from '../../style/components/translationHistoryStyle';
import {ApplicationStates} from '../../stores/applicationStore';
import LottiePlayer from '../../components/tools/LottiePlayer';
import {CustomThunkDispatch} from '../../types';

const LiveTranslate: FunctionComponent = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch<CustomThunkDispatch>();
    const translationState = useSelector<ApplicationStates, TranslationState>(states => states.TranslationState);
    const [translateValue, setTranslateValue] = useState<string | undefined>();
    const [translateEvetId, setTranslateEvetId] = useState<number | undefined>();


    useEffect(() => {
        return () => {
            dispatch(translationActionCreators.getTranslation(undefined));
        };
    }, []);

    useEffect(() => {
        getTranslate();
    }, [translateValue]);

    const getTranslate = () => {
        if (translateEvetId)
            clearTimeout(translateEvetId);
        setTranslateEvetId(setTimeout(() => {
            dispatch(translationActionCreators.getTranslation(translateValue));
        }, 700) as any);
    }

    return (
        <MultiColorTextInput
            inputProps={{
                multiline: true
            }}
            containerStyle={isFocused => [TranslationHistoryStyle.translateInputContainer, isFocused ? TranslationHistoryStyle.translateInputContainerActive : null]}
            inputStyle={value => [TranslationHistoryStyle.translateInput, value ? TranslationHistoryStyle.translateInputActive : null]}
            onChangeText={(value) => setTranslateValue(value)}
            value={translateValue}
            placeholder={t('live-translate-input-placeholder', 'Çevirilecek metni girin!')}
            renderIcon={() => {
                if (translationState.isFetchTranslate) {
                    return (
                        <View style={TranslationHistoryStyle.loaderIconContainer}>
                            <LottiePlayer source={require('../../../assets/animations/trans-loading.json')} style={TranslationHistoryStyle.loaderIcon} autoPlay={true} loop={true}/>
                        </View>
                    )
                } else {
                    return (
                        <TouchableOpacity style={TranslationHistoryStyle.loaderIconContainer} onPress={() => {
                            alert('Test');
                        }}>
                            <MaterialCommunityIcons name="text-to-speech" style={TranslationHistoryStyle.translateInputIcon}/>
                        </TouchableOpacity>
                    )
                }
            }}
        />
    )
}

export default LiveTranslate;
