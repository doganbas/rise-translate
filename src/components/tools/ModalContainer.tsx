import React, {FunctionComponent} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageSourcePropType, ImageStyle, StyleProp, View, ViewStyle, Image, Platform} from 'react-native';
import {BaseStyle} from '../../style/components/baseStyle';

const ModalContainer: FunctionComponent<{ containerStyle?: StyleProp<ViewStyle>, isLight?: boolean, backgroundImage?: ImageSourcePropType | undefined, backgroundImageStyle?: StyleProp<ImageStyle> | undefined }> = (props) => {
    return (
        <View style={[BaseStyle.modalContainer, props.containerStyle]}>
            {
                Platform.OS == 'ios' &&
                <SafeAreaView style={BaseStyle.modalContainerArea}>
                    <View style={BaseStyle.modalCloserContainer}>
                        <View style={[BaseStyle.modalCloserButton, (props.isLight ? BaseStyle.modalCloserButtonLight : null)]}/>
                    </View>
                    {props.children}
                </SafeAreaView>
            }
            {
                Platform.OS != 'ios' &&
                <View style={BaseStyle.modalContainerAreaAndroid}>
                    <>{props.children}</>
                </View>
            }
            {
                props.backgroundImage &&
                <Image source={props.backgroundImage} style={props.backgroundImageStyle}/>
            }
        </View>
    )
}

export default ModalContainer;
