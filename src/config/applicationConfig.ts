import {localizationsEn, localizationsTr} from './localizationConfiguration';
import {LanguageModel} from '../models/languageModel';

const applicationConfig = {
    apiInfo: {
        apiUrl: 'https://libretranslate.de/',
        apiDevUrl: 'https://libretranslate.de/',
        maxFetchSecond: 200
    },
    serviceUrls: {
        getLanguageList: '/languages',
        postTranslate: '/translate'
    },
    settings: {
        loadTimeOut: 15
    },
    languageInfo: {
        activeLanguage: 'tr',
        languageList: [
            {
                name: 'Türkçe',
                smallName: 'tr',
                globalName: 'tr',
                flagPath: '',
                localization: localizationsTr
            },
            {
                name: 'English',
                smallName: 'en',
                globalName: 'en',
                flagPath: '',
                localization: localizationsEn
            }
        ] as LanguageModel[]
    },
    devSetting: {
        designWidth: 750,
        designHeight: 1340,
    },
    brandInfo: {
        companyName: 'Serkan DOĞANBAŞ',
        brandName: 'Rise TODO App',
        companyLink: '//github.com/doganbas',
        brandLink: '//github.com/doganbas/rise-translate'
    },
}

export default applicationConfig;
