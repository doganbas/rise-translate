import {StyleSheet} from 'react-native';
import StylesHelper from '../../helpers/stylesHelper';
import SizeHelper from '../../helpers/sizeHelper';

export const ConnectionErrorPageStyle = StyleSheet.create({
    errorVideoContainer: {
        width: '100%',
        height: 'auto',
        padding: SizeHelper.calculateWidth(100),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        paddingHorizontal: SizeHelper.calculateWidth(20),
        paddingVertical: SizeHelper.calculateWidth(40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        ...StylesHelper.WriteFont(30, 'bold', StylesHelper.project3)
    },
    message: {
        ...StylesHelper.WriteFont(24, 'normal', StylesHelper.project3),
        textAlign: 'center',
        marginTop: SizeHelper.calculateHeight(10)
    }
});
