import {View} from 'react-native';
import {useAssets} from 'expo-asset';
import {useSelector} from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import React, {FunctionComponent, useEffect} from 'react';
import {useFonts, Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black} from '@expo-google-fonts/roboto';
import {ApplicationLanguageState} from '../../stores/applicationLanguageStore';
import {ApplicationStates} from '../../stores/applicationStore';
import * as AppAsset from '../../../assets/images';

const ApplicationAssetProvider: FunctionComponent = (props: any) => {
    const [fontsLoaded] = useFonts({Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black});
    const [assetLoaded] = useAssets([
        AppAsset.connectionErrorBg,
        AppAsset.generalErrorBg,
        AppAsset.loadingBg
    ]);

    const languageState = useSelector<ApplicationStates, ApplicationLanguageState>(states => states.ApplicationLanguageState);

    useEffect(() => {
        if (fontsLoaded && assetLoaded && languageState.completeLocalization) {
            SplashScreen.hideAsync().then(() => {
            });
        }
    });

    return (
        fontsLoaded && assetLoaded ? props.children : <View/>
    )

}

export default ApplicationAssetProvider;
