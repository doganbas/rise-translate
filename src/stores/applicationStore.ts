import * as ApplicationLanguageStore from './applicationLanguageStore';
import * as ApplicationLoaderStore from './applicationLoaderStore';
import * as ApplicationErrorStore from './applicationErrorStore';

export interface ApplicationStates {
    ApplicationErrorState: ApplicationErrorStore.ApplicationErrorState,
    ApplicationLanguageState: ApplicationLanguageStore.ApplicationLanguageState,
    ApplicationLoaderState: ApplicationLoaderStore.ApplicationLoaderState,
}

export const ApplicationReducers = {
    ApplicationErrorState: ApplicationErrorStore.applicationErrorReducer,
    ApplicationLanguageState: ApplicationLanguageStore.applicationLanguageReducer,
    ApplicationLoaderState: ApplicationLoaderStore.applicationLoaderReducer,
};

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationStates): void;
}
