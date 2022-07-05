import * as ApplicationLanguageStore from './applicationLanguageStore';
import * as ApplicationLoaderStore from './applicationLoaderStore';
import * as ApplicationErrorStore from './applicationErrorStore';
import * as TranslationStore from './translationStore';

export interface ApplicationStates {
    ApplicationErrorState: ApplicationErrorStore.ApplicationErrorState,
    ApplicationLanguageState: ApplicationLanguageStore.ApplicationLanguageState,
    ApplicationLoaderState: ApplicationLoaderStore.ApplicationLoaderState,
    TranslationState: TranslationStore.TranslationState
}

export const ApplicationReducers = {
    ApplicationErrorState: ApplicationErrorStore.applicationErrorReducer,
    ApplicationLanguageState: ApplicationLanguageStore.applicationLanguageReducer,
    ApplicationLoaderState: ApplicationLoaderStore.applicationLoaderReducer,
    TranslationState: TranslationStore.translationDataReducer
};

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationStates): void;
}
