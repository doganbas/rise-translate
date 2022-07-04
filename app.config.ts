import {ExpoConfig} from '@expo/config-types';

export default (): ExpoConfig => {
    return {
        name: 'Rise Translate',
        description: 'Rise translate application',
        slug: 'rise-translate',
        scheme: 'translate',
        version: '1.0.0',
        orientation: 'portrait',
        assetBundlePatterns: ['./*'],
        icon: './assets/native/icon.png',
        backgroundColor: '#fff',
        splash: {
            image: './assets/native/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#0FC2C0'
        },
        updates: {
            enabled: true,
            checkAutomatically: 'ON_LOAD',
            fallbackToCacheTimeout: 50000
        },

        ios: {
            bundleIdentifier: 'org.doganbas.rise.translate',
            usesIcloudStorage: true,
            supportsTablet: true,
            infoPlist: {
                'CFBundleDevelopmentRegion': 'tr'
            }
        },
        android: {
            versionCode: 832,
            package: 'com.doganbas.rise.translate',
            adaptiveIcon: {
                foregroundImage: './assets/native/adaptive-icon.png',
                backgroundColor: '#FFFFFF'
            },
            permissions: [
                'ACCESS_MEDIA_LOCATION',
                'RECEIVE_BOOT_COMPLETED',
                'ACCESS_COARSE_LOCATION',
                'ACCESS_FINE_LOCATION',
                'CAMERA',
                'MANAGE_DOCUMENTS',
                'READ_EXTERNAL_STORAGE ',
                'WRITE_EXTERNAL_STORAGE',
                'VIBRATE'
            ]
        },
        web: {
            favicon: './assets/favicon.png'
        },
        plugins: [],
        locales: {
            'tr': './assets/localization/app.info.tr.json',
            'en': './assets/localization/app.info.en.json'
        }
    }
}
