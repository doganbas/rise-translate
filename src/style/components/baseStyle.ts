import {Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import StylesHelper from '../../helpers/stylesHelper';
import SizeHelper from '../../helpers/sizeHelper';

export const BaseStyle = StyleSheet.create({
    modalContainer: {
        flex: 1
    },
    modalContainerArea: {
        flex: 1,
        zIndex: 3
    },
    modalContainerAreaAndroid: {
        flex: 1,
        zIndex: 3,
        paddingTop: SizeHelper.calculateHeight(40),
        paddingBottom: SizeHelper.calculateHeight(40)
    },
    modalCloserContainer: {
        height: SizeHelper.calculateHeight(50),
        justifyContent: 'center',
        alignItems: 'center',
        width: SizeHelper.deviceWidth,
        zIndex: 50,
        position: 'absolute'
    },
    modalCloserButton: {
        width: SizeHelper.calculateWidth(200),
        height: SizeHelper.calculateHeight(8),
        backgroundColor: StylesHelper.black,
        borderRadius: SizeHelper.calculateWidth(5)
    },
    modalCloserButtonLight: {
        backgroundColor: StylesHelper.white
    },
    clearScroll: {
        height: SizeHelper.calculateHeight(StylesHelper.contentPadding)
    },

    fullFlex: {
        flex: 1
    },
    pageContainer: {
        flex: 1,
        backgroundColor: StylesHelper.blueBackground,
        marginTop: SizeHelper.calculateHeight(120) + getStatusBarHeight()
    },
    safeViewContainer: {
        flex: 1
    },
    customScrollContainer: {
        flex: 1,
        overflow: Platform.OS == 'ios' ? 'hidden' : 'scroll',
        borderRadius: SizeHelper.calculateWidth(10),
    },
    customScroll: {
        marginHorizontal: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        marginBottom: SizeHelper.calculateHeight(StylesHelper.contentPadding),
    },
    keyboardAvoid: {
        flex: 1,
        zIndex: 100
    },

    notFoundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notFoundAnimationContainer: {
        margin: SizeHelper.calculateWidth(StylesHelper.contentPadding),
    },
    notFoundAnimation: {
        width: '100%'
    },
    notFoundButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    notFoundButton: {
        paddingVertical: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        paddingHorizontal: SizeHelper.calculateWidth(StylesHelper.contentPadding * 2),
        backgroundColor: StylesHelper.cyan,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: SizeHelper.calculateWidth(10)
    },
    notFoundButtonText: {
        paddingLeft: SizeHelper.calculateWidth(15),
        ...StylesHelper.WriteFont(28, '300', StylesHelper.gray700)
    },
    notFoundButtonIcon: {
        color: StylesHelper.gray700,
        fontSize: SizeHelper.calculateWidth(28)
    },

    appMenuTabContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: SizeHelper.calculateHeight(15)
    },
    appMenuTabIcon: {
        color: StylesHelper.project5,
        fontSize: SizeHelper.calculateWidth(45)
    },
    appMenuTabText: {
        marginTop: SizeHelper.calculateHeight(5),
        ...StylesHelper.WriteFont(22, '400', StylesHelper.gray600)
    },
    appMenuTabIconActive: {
        color: StylesHelper.project2
    },
    appMenuTabTextActive: {
        color: StylesHelper.gray900
    }
});
