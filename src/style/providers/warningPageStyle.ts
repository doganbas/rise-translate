import {StyleSheet} from 'react-native';
import StylesHelper from '../../helpers/stylesHelper';
import SizeHelper from '../../helpers/sizeHelper';

export const WarningPageStyle = StyleSheet.create({
    pageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(2,53,53,0.80)',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: SizeHelper.calculateHeight(20),
    },
    warningContainer: {
        backgroundColor: StylesHelper.white,
        borderRadius: SizeHelper.calculateWidth(10),
        padding: SizeHelper.calculateHeight(25)
    },
    videoContainer: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: SizeHelper.calculateWidth(30),
        justifyContent: 'center',
        alignItems: 'center'
    },
    videoContent: {
        width: SizeHelper.calculateWidth(400),
        height: 'auto'
    },
    titleContent: {
        paddingVertical: SizeHelper.calculateWidth(30),
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessages: {
        marginTop: SizeHelper.calculateHeight(-10),
        marginBottom: SizeHelper.calculateHeight(15)
    }
});
