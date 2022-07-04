import {StyleSheet} from 'react-native';
import StylesHelper from '../../helpers/stylesHelper';
import SizeHelper from '../../helpers/sizeHelper';

export const LoaderPageStyle = StyleSheet.create({
    pageContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 999,
        backgroundColor: StylesHelper.project5
    },
    scrollContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingHorizontal: SizeHelper.calculateWidth(20),
        paddingTop: SizeHelper.calculateHeight(90)
    },
    scrollContent: {
        height: 'auto'
    },
    loaderTitleText: {
        ...StylesHelper.WriteFont(30, 'bold', StylesHelper.project3)
    },
    loaderItem: {
        marginTop: SizeHelper.calculateHeight(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    loaderItemEffectContainer: {},
    loaderItemEffect: {
        width: SizeHelper.calculateWidth(60)
    },
    loaderItemTextContainer: {
        flex: 1,
        paddingHorizontal: SizeHelper.calculateWidth(20)
    },
    loaderItemText: {
        ...StylesHelper.WriteFont(24, 'normal', StylesHelper.project3)
    },
    loaderCounterContainer: {
        alignItems: 'center'
    },
    loaderCounter: {
        ...StylesHelper.WriteFont(24, 'normal', StylesHelper.project2)
    }
});
