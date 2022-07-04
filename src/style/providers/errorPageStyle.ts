import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import StylesHelper from '../../helpers/stylesHelper';
import SizeHelper from '../../helpers/sizeHelper';

export const ErrorPageStyle = StyleSheet.create({
    pageContainer: {
        backgroundColor: StylesHelper.project5,
        flexDirection: 'column',
        flex: 1
    },
    pageScroll: {
        flex: 1,
        flexDirection: 'column',
        borderBottomLeftRadius: SizeHelper.calculateWidth(10),
        borderBottomRightRadius: SizeHelper.calculateWidth(10),
        marginBottom: SizeHelper.calculateHeight(10)
    },
    headerContainer: {
        height: SizeHelper.calculateHeight(140) + getStatusBarHeight(),
        paddingTop: getStatusBarHeight(),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SizeHelper.calculateHeight(10),
        backgroundColor: StylesHelper.project3,
        ...StylesHelper.boxShadow()
    },
    headerLogo: {
        width: SizeHelper.calculateWidth(375),
        height: SizeHelper.calculateHeight(72),
    },
    errorVideoContainer: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: SizeHelper.calculateWidth(150),
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorVideo: {
        width: '100%',
        height: 'auto'
    },
    errorMessageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SizeHelper.calculateHeight(10),
        paddingHorizontal: SizeHelper.calculateWidth(5)
    },
    errorMessageCode: {
        ...StylesHelper.WriteFont(50, 'bold', StylesHelper.project3)
    },
    errorMessage: {
        ...StylesHelper.WriteFont(30, '500', StylesHelper.project5),
        marginTop: SizeHelper.calculateHeight(5)
    },
    customBoxContainer: {
        marginHorizontal: SizeHelper.calculateWidth(16),
        marginTop: SizeHelper.calculateWidth(16),
        borderWidth: 1,
        borderRadius: SizeHelper.calculateWidth(10),
        borderColor: StylesHelper.project3,
        backgroundColor: 'rgba(255,255,255,0.6)',
        padding: SizeHelper.calculateWidth(10)
    },
    customBoxTitle: {
        ...StylesHelper.WriteFont(28, 'bold', StylesHelper.project3),
        textAlign: 'center'
    },
    customBoxMessageContainer: {
        borderTopWidth: 1,
        borderColor: StylesHelper.project3,
        marginTop: SizeHelper.calculateHeight(16),
        paddingTop: SizeHelper.calculateHeight(16)
    },
    customBoxMessage: {
        ...StylesHelper.WriteFont(20, 'normal', StylesHelper.gray700),
        textAlign: 'center'
    },
    buttonContainer: {
        marginBottom: SizeHelper.calculateHeight(25),
        marginHorizontal: SizeHelper.calculateWidth(16),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: StylesHelper.project7,
        backgroundColor: 'rgba(66, 24, 0, 0.8)',
        borderWidth: 1,
        borderRadius: SizeHelper.calculateWidth(10),
        padding: SizeHelper.calculateHeight(12)
    },
    buttonText: {
        ...StylesHelper.WriteFont(28, 'normal', StylesHelper.white)
    },
    greenButtonContainer: {
        marginBottom: SizeHelper.calculateHeight(16),
        marginHorizontal: SizeHelper.calculateWidth(16),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#00e1c1',
        backgroundColor: 'rgba(0,225,193,0.8)',
        borderWidth: 1,
        borderRadius: SizeHelper.calculateWidth(10),
        padding: SizeHelper.calculateHeight(12)
    },
    greenButtonText: {
        ...StylesHelper.WriteFont(28, 'normal', StylesHelper.project3)
    },
});
