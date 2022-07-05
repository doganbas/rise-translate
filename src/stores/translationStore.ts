import {Action, Reducer} from 'redux';
import fetchApi, {AxiosError} from 'axios';
import {applicationLoaderActionCreators} from './applicationLoaderStore';
import {applicationErrorActionCreators} from './applicationErrorStore';
import applicationConfig from '../config/applicationConfig';
import {TranslationModel} from '../models/translationModel';
import {ApiLanguageModel} from '../models/apiLanguageModel';
import {ExceptionType} from '../enums/exceptionType';
import {AppThunkAction} from './applicationStore';
import generateUUID from '../helpers/uuidHelper';
import DateHelper from '../helpers/dateHelper';
import {LoaderType} from '../enums/loaderType';
import {CustomThunkDispatch} from '../types';

export interface TranslationState {
    apiLanguages: ApiLanguageModel[],
    translateLang: string,
    translationLang: string,
    liveTranslate?: string,
    liveTranslation?: string,
    isFetchTranslate: boolean,
    translationHistory: TranslationModel[],
    lastSync?: Date
}

interface RequestApiLanguagesAction {
    type: 'REQUEST_API_LANGUAGE_ACTION'
}

interface ReceiveApiLanguageAction {
    type: 'RECEIVE_API_LANGUAGE_ACTION',
    apiLanguages: ApiLanguageModel[]
}

interface RequestLiveTranslateAction {
    type: 'REQUEST_LIVE_TRANSLATE_ACTION',
    liveTranslate?: string
}

interface ReceiveLiveTranslateAction {
    type: 'RECEIVE_LIVE_TRANSLATE_ACTION',
    translation?: string,
    translationHistory: TranslationModel[],
    fromLang: string,
    toLang: string
}

type KnownAction = RequestApiLanguagesAction | ReceiveApiLanguageAction | RequestLiveTranslateAction | ReceiveLiveTranslateAction;

const unloadedState: TranslationState = {
    apiLanguages: [],
    translateLang: 'tr',
    translationLang: 'en',
    isFetchTranslate: false,
    translationHistory: []
}

export const translationActionCreators = {
    getApiLanguages: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        const globalDispatch = dispatch as CustomThunkDispatch;
        const loaderId = generateUUID();
        if (getState().TranslationState.apiLanguages.length == 0 || getState().TranslationState.lastSync == undefined || DateHelper.timeDiff(getState().TranslationState.lastSync ?? null, null, 'day') > 12) {
            fetchApi.get<ApiLanguageModel[]>(applicationConfig.serviceUrls.getLanguageList).then(response => {
                dispatch({type: 'RECEIVE_API_LANGUAGE_ACTION', apiLanguages: response.data});
            }).catch((exception: AxiosError) => {
                globalDispatch(applicationErrorActionCreators.generateApplicationError(exception.message, ExceptionType.error, exception.code, true));
            }).finally(() => {
                globalDispatch(applicationLoaderActionCreators.hideGlobalLoader(loaderId));
            });
            globalDispatch(applicationLoaderActionCreators.showGlobalLoader({name: 'loading-api-languages', defaultTranslation: 'Çeviri sistemi dilleri yükleniyor...'}, loaderId, LoaderType.inclusive));
            dispatch({type: 'REQUEST_API_LANGUAGE_ACTION'});
        }
    },
    getTranslation: (translate: string | undefined, translaLang?: string, translationLang?: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
        const globalDispatch = dispatch as CustomThunkDispatch;
        const loaderId = 'live-translate-fetch';
        const fromLang = translaLang || getState().TranslationState.translateLang;
        const toLang = translationLang || getState().TranslationState.translationLang;

        const translationHistory = getState().TranslationState.translationHistory;
        if (!translate) {
            dispatch({type: 'RECEIVE_LIVE_TRANSLATE_ACTION', translation: undefined, translationHistory: translationHistory, fromLang, toLang});
            return;
        }

        const historyTranslation = translationHistory.find(nq => nq.translate.toLowerCase() == translate!.toLowerCase() && nq.fromLang == fromLang && nq.toLang == toLang);
        if (historyTranslation) {
            dispatch({type: 'RECEIVE_LIVE_TRANSLATE_ACTION', translation: historyTranslation.translation, translationHistory: translationHistory, fromLang, toLang});
            return;
        }

        fetchApi.post<{ translatedText: string }>(applicationConfig.serviceUrls.postTranslate, {q: translate, source: fromLang, target: toLang, format: 'text'}).then(response => {
            translationHistory.push({
                translate: translate,
                fromLang: fromLang,
                toLang: toLang,
                date: new Date(),
                translation: response.data.translatedText
            });
            dispatch({type: 'RECEIVE_LIVE_TRANSLATE_ACTION', translation: response.data.translatedText, translationHistory: translationHistory, fromLang, toLang});
        }).catch((exception: AxiosError) => {
            globalDispatch(applicationErrorActionCreators.generateApplicationError(exception.message, ExceptionType.error, exception.code, true));
        }).finally(() => {
            globalDispatch(applicationLoaderActionCreators.hideGlobalLoader(loaderId));
        });

        globalDispatch(applicationLoaderActionCreators.showGlobalLoader({name: 'live-translate-fetch', defaultTranslation: 'Çeviriliyor...'}, loaderId, LoaderType.custom));
        dispatch({type: 'REQUEST_LIVE_TRANSLATE_ACTION', liveTranslate: translate});
    }
}

export const translationDataReducer: Reducer<TranslationState> = (state: TranslationState | undefined, incomingAction: Action): TranslationState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction
    switch (action.type) {
        case 'REQUEST_API_LANGUAGE_ACTION':
            return {
                ...state,
                isFetchTranslate: true
            }
        case 'RECEIVE_API_LANGUAGE_ACTION':
            return {
                ...state,
                isFetchTranslate: false,
                apiLanguages: action.apiLanguages,
                lastSync: new Date()
            }
        case 'REQUEST_LIVE_TRANSLATE_ACTION':
            return {
                ...state,
                isFetchTranslate: true,
                liveTranslate: action.liveTranslate,
                liveTranslation: action.liveTranslate && state.liveTranslation
            }
        case 'RECEIVE_LIVE_TRANSLATE_ACTION':
            return {
                ...state,
                liveTranslation: action.translation,
                translationHistory: action.translationHistory,
                translationLang: action.toLang,
                translateLang: action.fromLang,
                isFetchTranslate: false
            }

    }

    return state || unloadedState;
}
