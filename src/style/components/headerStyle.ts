import {StyleSheet} from 'react-native';
import SizeHelper from '../../helpers/sizeHelper';
import StylesHelper from '../../helpers/stylesHelper';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const HeaderStyle = StyleSheet.create({
    headerContainer: {
        height: SizeHelper.calculateHeight(120) + getStatusBarHeight(),
        paddingTop: getStatusBarHeight(),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SizeHelper.calculateHeight(10),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: StylesHelper.project3
    },
    headerMain: {
        position: 'relative',
        overflow: 'hidden',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerLogoContainer: {
        width: SizeHelper.calculateWidth(375),
        height: SizeHelper.calculateHeight(72),
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLogo: {
        width: '100%'
    },

    leftIconContainer: {
        width: SizeHelper.calculateWidth(100),
        paddingVertical: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0
    },
    leftIcon: {
        color: StylesHelper.white,
        fontSize: SizeHelper.calculateWidth(50),
        height: SizeHelper.calculateWidth(50)
    },
    leftIconLight: {
        color: '#fff',
        fontSize: SizeHelper.calculateWidth(45)
    }
});
