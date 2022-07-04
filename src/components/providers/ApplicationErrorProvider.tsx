import i18next from 'i18next';
import {connect} from 'react-redux';
import * as Updates from 'expo-updates';
import React, {PureComponent} from 'react';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {ConnectionErrorPageStyle} from '../../style/providers/connectionErrorPageStyle';
import {ApplicationLanguageState} from '../../stores/applicationLanguageStore';
import * as ApplicationErrorStore from '../../stores/applicationErrorStore';
import {WarningPageStyle} from '../../style/providers/warningPageStyle';
import {ErrorPageStyle} from '../../style/providers/errorPageStyle';
import {ApplicationStates} from '../../stores/applicationStore';
import {DevConsole} from '../../helpers/consoleHelper';
import {ExceptionType} from '../../enums/exceptionType';
import {persistStorage} from '../../config/storeConfig';
import {appLogoLight} from '../../../assets/images';
import LottiePlayer from '../tools/LottiePlayer';

type ApplicationErrorProviderPropsType = {
    applicationErrorState: ApplicationErrorStore.ApplicationErrorState,
    applicationLanguageState: ApplicationLanguageState
} & typeof ApplicationErrorStore.applicationErrorActionCreators;

type ApplicationErrorProviderStateType = {
    connectionUnscribe: any
}

class ApplicationErrorProvider extends PureComponent<ApplicationErrorProviderPropsType, ApplicationErrorProviderStateType> {

    constructor(props: ApplicationErrorProviderPropsType) {
        super(props);
        this.state = {
            connectionUnscribe: null
        }
    }

    async componentDidMount() {
        const unsubscribe = NetInfo.addEventListener(state => {
            this.props.setConnectionStatus(state.isConnected ?? false);
        });
        this.setState({connectionUnscribe: unsubscribe});
    }

    componentWillUnmount() {
        try {
            if (this.state != null)
                this.state.connectionUnscribe();
        } catch (e) {
            DevConsole.error(e);
        }
    }

    handleReloadApplication = async () => {
        this.props.clearApplicationError(true);
        persistStorage.purge().then(() => {
            setTimeout(() => {
                AsyncStorage.clear().then(() => {
                    setTimeout(() => {
                        Updates.reloadAsync();
                    }, 300);
                });
            }, 300);
        });
    }

    handleClearErrors = () => {
        this.props.clearApplicationError(true);
    };

    renderStandardError = () => {
        return (
            <View style={ErrorPageStyle.pageContainer}>
                <View style={ErrorPageStyle.headerContainer}>
                    <Image source={appLogoLight} resizeMode={'contain'} style={ErrorPageStyle.headerLogo}/>
                </View>
                <View style={ErrorPageStyle.errorVideoContainer}>
                    <LottiePlayer source={require('../../../assets/animations/system-error.json')} style={ErrorPageStyle.errorVideo} autoPlay={true} loop={true}/>
                </View>
                <ScrollView style={ErrorPageStyle.pageScroll} scrollIndicatorInsets={{right: 1}}>
                    <View style={ErrorPageStyle.errorMessageContainer}>
                        <Text style={ErrorPageStyle.errorMessageCode}>{this.props.applicationErrorState.errorCode ?? '500'}</Text>
                        <Text style={ErrorPageStyle.errorMessage}>{(i18next.t('error-page-title', 'Bir Hata Oluştu') ?? 'Bir Hata Oluştu').toString()}</Text>
                    </View>
                    <View style={ErrorPageStyle.customBoxContainer}>
                        <Text style={ErrorPageStyle.customBoxTitle}>{(i18next.t('error-message-title', 'Hata Mesajı') ?? 'Hata Mesajı').toString()}</Text>
                        <View style={ErrorPageStyle.customBoxMessageContainer}>
                            <Text style={ErrorPageStyle.customBoxMessage}>{this.props.applicationErrorState.errorMessage ?? (i18next.t('undefined-error-message', 'Bilinmeyen bir hata meydana geldi.') ?? 'Bilinmeyen bir hata meydana geldi.')}</Text>
                        </View>
                    </View>
                </ScrollView>
                <SafeAreaView>
                    {
                        this.props.applicationErrorState.exceptionType !== ExceptionType.fatal &&
                        <TouchableOpacity onPress={this.handleClearErrors}>
                            <View style={ErrorPageStyle.greenButtonContainer}>
                                <Text style={ErrorPageStyle.greenButtonText}>{(i18next.t('ignore-error', 'Hatayı Yoksay') ?? 'Hatayı Yoksay').toString()}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={this.handleReloadApplication}>
                        <View style={ErrorPageStyle.buttonContainer}>
                            <Text style={ErrorPageStyle.buttonText}>{(i18next.t('reload-application', 'Uygulamayı Yeniden Yükle') ?? 'Uygulamayı Yeniden Yükle').toString()}</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        )
    }

    renderWarningInfo = () => {
        return (
            <View style={WarningPageStyle.pageContainer}>
                <View style={WarningPageStyle.warningContainer}>
                    <View style={WarningPageStyle.videoContainer}>
                        <LottiePlayer source={require('../../../assets/animations/system-warning.json')} style={WarningPageStyle.videoContent} autoPlay={true} loop={true}/>
                    </View>
                    <View style={WarningPageStyle.titleContent}>
                        <Text style={ErrorPageStyle.errorMessageCode}>{this.props.applicationErrorState.errorCode ?? '500'}</Text>
                        <Text style={ErrorPageStyle.errorMessage}>{(i18next.t('error-page-title', 'Bir Hata Oluştu') ?? 'Bir Hata Oluştu').toString()}</Text>
                    </View>
                    <View style={WarningPageStyle.errorMessages}>
                        <View style={ErrorPageStyle.customBoxContainer}>
                            <Text style={ErrorPageStyle.customBoxTitle}>{(i18next.t('error-message-title', 'Hata Mesajı') ?? 'Hata Mesajı').toString()}</Text>
                            <View style={ErrorPageStyle.customBoxMessageContainer}>
                                <Text style={ErrorPageStyle.customBoxMessage}>{this.props.applicationErrorState.errorMessage ?? (i18next.t('undefined-error-message', 'Bilinmeyen bir hata meydana geldi.') ?? 'Bilinmeyen bir hata meydana geldi.')}</Text>
                            </View>
                        </View>
                    </View>
                    {
                        this.props.applicationErrorState.exceptionType !== ExceptionType.fatal &&
                        <TouchableOpacity onPress={this.handleClearErrors}>
                            <View style={ErrorPageStyle.greenButtonContainer}>
                                <Text style={ErrorPageStyle.greenButtonText}>{(i18next.t('ignore-error', 'Hatayı Yoksay') ?? 'Hatayı Yoksay').toString()}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={this.handleReloadApplication}>
                        <View style={ErrorPageStyle.buttonContainer}>
                            <Text style={ErrorPageStyle.buttonText}>{(i18next.t('reload-application', 'Uygulamayı Yeniden Yükle') ?? 'Uygulamayı Yeniden Yükle').toString()}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderNetworkError = () => {
        return (
            <View style={ErrorPageStyle.pageContainer}>
                <View style={ErrorPageStyle.headerContainer}>
                    <Image source={appLogoLight} resizeMode={'contain'} style={ErrorPageStyle.headerLogo}/>
                </View>
                <View style={ConnectionErrorPageStyle.errorVideoContainer}>
                    <LottiePlayer source={require('../../../assets/animations/network-error.json')} style={ErrorPageStyle.errorVideo} autoPlay={true} loop={true}/>
                </View>
                <ScrollView style={ErrorPageStyle.pageScroll} scrollIndicatorInsets={{right: 1}}>
                    <View style={ConnectionErrorPageStyle.textContainer}>
                        <Text style={ConnectionErrorPageStyle.title}>{(i18next.t('connection-error-title', 'İnternet Bağlantısı Bulunamadı') ?? 'İnternet Bağlantısı Bulunamadı').toString()}</Text>
                        <Text style={ConnectionErrorPageStyle.message}>{(i18next.t('connection-error-content', 'İnternet bağlantısı bulunamadı. Lütfen bağlantınızı kontrol ediniz. Bağlantı sağlandığı zaman kaldığınız yerden devam edebilirsiniz.') ?? 'İnternet bağlantısı bulunamadı. Lütfen bağlantınızı kontrol ediniz. Bağlantı sağlandığı zaman kaldığınız yerden devam edebilirsiniz.').toString()}</Text>
                    </View>
                </ScrollView>
                <SafeAreaView>
                    <TouchableOpacity onPress={this.handleReloadApplication}>
                        <View style={ErrorPageStyle.buttonContainer}>
                            <Text style={ErrorPageStyle.buttonText}>{(i18next.t('reload-application', 'Uygulamayı Yeniden Yükle') ?? 'Uygulamayı Yeniden Yükle').toString()}</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        )
    }

    render() {
        return (
            <>
                {
                    (this.props.applicationErrorState.exceptionType != ExceptionType.fatal && this.props.applicationErrorState.exceptionType != ExceptionType.error) && this.props.applicationErrorState.internetConnection &&
                    this.props.children
                }
                {
                    this.props.applicationErrorState.internetConnection && (this.props.applicationErrorState.exceptionType === ExceptionType.fatal || this.props.applicationErrorState.exceptionType === ExceptionType.error) &&
                    this.renderStandardError()
                }
                {
                    this.props.applicationErrorState.internetConnection && (this.props.applicationErrorState.exceptionType === ExceptionType.warning || this.props.applicationErrorState.exceptionType === ExceptionType.info) &&
                    this.renderWarningInfo()
                }
                {
                    !this.props.applicationErrorState.internetConnection &&
                    this.renderNetworkError()
                }
            </>
        );
    }

}

export default connect((state: ApplicationStates) => ({
    applicationErrorState: state.ApplicationErrorState,
    applicationLanguageState: state.ApplicationLanguageState
}), {...ApplicationErrorStore.applicationErrorActionCreators})(ApplicationErrorProvider as any);

