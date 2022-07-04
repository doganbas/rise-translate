import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfiguration = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ([
        'ApplicationLanguageState',

    ]),
    blacklist: [
        'ApplicationErrorState',
        'ApplicationLoaderState'
    ]
};

export default persistConfiguration;
