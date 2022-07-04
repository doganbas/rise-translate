import i18next from 'i18next';
import {Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {FunctionComponent, useEffect} from 'react';
import {applicationLoaderActionCreators, ApplicationLoaderState} from '../../stores/applicationLoaderStore';
import {WarningPageStyle} from '../../style/providers/warningPageStyle';
import {LoaderPageStyle} from '../../style/providers/loaderPageStyle';
import {ErrorPageStyle} from '../../style/providers/errorPageStyle';
import {ApplicationStates} from '../../stores/applicationStore';
import applicationConfig from '../../config/applicationConfig';
import {appLogoLight} from '../../../assets/images';
import {LoaderType} from '../../enums/loaderType';
import DateHelper from '../../helpers/dateHelper';
import LottiePlayer from '../tools/LottiePlayer';
import TimeCounter from '../tools/TimeCounter';
import {Nullable} from '../../types';

let loaderInterval: Nullable<number> = null;
const ApplicationLoaderProvider: FunctionComponent = (props: any) => {
    const dispatch = useDispatch();
    const loaderState = useSelector<ApplicationStates, ApplicationLoaderState>(state => state.ApplicationLoaderState);

    useEffect(() => {
        if (loaderInterval)
            clearInterval(loaderInterval);

        if (loaderState && loaderState.loaderItems.length > 0) {
            loaderInterval = setInterval(() => checkProviderTime(loaderState), 1000) as any;
            checkProviderTime(loaderState);
        }
    }, [loaderState]);

    const checkProviderTime = (inLoaderState: ApplicationLoaderState) => {
        if (inLoaderState && inLoaderState.loaderItems.length) {
            const removeList = inLoaderState.loaderItems.map((item) => {
                const elapsedNow = DateHelper.timeDiff(item.startTime, null, 'second');
                const maxElapse = applicationConfig.settings.loadTimeOut;

                if (maxElapse <= elapsedNow)
                    return item.loaderId;
            });
            removeList.map(item => item && dispatch(applicationLoaderActionCreators.hideGlobalLoader(item)));
        }
    };

    const renderFullLoader = () => {
        return (
            <View style={LoaderPageStyle.pageContainer}>
                <View style={ErrorPageStyle.headerContainer}>
                    <Image source={appLogoLight} resizeMode={'contain'} style={ErrorPageStyle.headerLogo}/>
                </View>
                <View style={ErrorPageStyle.errorVideoContainer}>
                    <LottiePlayer source={require('../../../assets/animations/waiting-animation.json')} style={ErrorPageStyle.errorVideo} autoPlay={true} loop={true}/>
                </View>
                <View style={LoaderPageStyle.scrollContainer}>
                    <View>
                        <Text style={LoaderPageStyle.loaderTitleText}>{(i18next.t('application-loader-title', 'Bekleyen yükleme(ler) mevcut') ?? 'Bekleyen yükleme(ler) mevcut').toString()}</Text>
                    </View>
                    {renderLoaderContent()}
                </View>
            </View>
        )
    }

    const renderLightboxLoader = () => {
        return (
            <View style={WarningPageStyle.pageContainer}>
                <View style={WarningPageStyle.warningContainer}>
                    <View style={WarningPageStyle.videoContainer}>
                        <LottiePlayer source={require('../../../assets/animations/waiting-animation.json')} style={WarningPageStyle.videoContent} autoPlay={true} loop={true}/>
                    </View>
                    <View style={WarningPageStyle.titleContent}>
                        <Text style={ErrorPageStyle.errorMessage}>{(i18next.t('application-loader-title', 'Bekleyen yükleme(ler) mevcut') ?? 'Bekleyen yükleme(ler) mevcut').toString()}</Text>
                    </View>
                    {renderLoaderContent()}
                </View>
            </View>
        )
    };

    const renderLoaderContent = () => {
        return (
            <>
                {
                    loaderState.loaderItems.map(item => (
                        <View style={LoaderPageStyle.loaderItem} key={item.loaderId}>
                            <View style={LoaderPageStyle.loaderItemEffectContainer}>
                                <LottiePlayer source={require('../../../assets/animations/trans-loading-white.json')} style={LoaderPageStyle.loaderItemEffect} autoPlay={true} loop={true}/>
                            </View>
                            <View style={LoaderPageStyle.loaderItemTextContainer}>
                                <Text style={LoaderPageStyle.loaderItemText}>
                                    {
                                        item.visibleText ?
                                            (i18next.t(item.visibleText.name, item.visibleText.defaultTranslation) ?? item.visibleText.defaultTranslation).toString() :
                                            (i18next.t('undefined-loader-text', 'Bilinmeyen yükleme...') ?? 'Bilinmeyen yükleme...').toString()
                                    }
                                </Text>
                            </View>
                            <View style={LoaderPageStyle.loaderCounterContainer}>
                                <TimeCounter startDate={item.startTime} textStyle={LoaderPageStyle.loaderCounter}/>
                            </View>
                        </View>
                    ))
                }
            </>
        )
    }

    return (
        <>
            {
                props.children
            }
            {
                loaderState.isVisible && loaderState.loaderItems.filter(nq => nq.loaderType === LoaderType.inclusive).length > 0 &&
                renderFullLoader()
            }
            {
                loaderState.isVisible && loaderState.loaderItems.filter(nq => nq.loaderType === LoaderType.overlay).length > 0 &&
                renderLightboxLoader()
            }
        </>
    );
}

export default ApplicationLoaderProvider;
