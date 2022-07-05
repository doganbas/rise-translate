import {StyleSheet} from 'react-native';
import StylesHelper from '../../helpers/stylesHelper';
import SizeHelper from '../../helpers/sizeHelper';

export const TranslatorStyle = StyleSheet.create({
    languageDisplayContainer: {
        borderBottomWidth: 1,
        borderBottomColor: StylesHelper.gray400,
        borderStyle: 'solid',
        padding: SizeHelper.calculateHeight(StylesHelper.contentPadding / 2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: StylesHelper.white
    },
    languageDisplayItem: {
        flex: 1,
        alignItems: 'center',
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding / 3)
    },
    languageDisplayItemText: {
        ...StylesHelper.WriteFont(28, 'normal', StylesHelper.project1)
    },
    languageDisplaySwap: {
        paddingVertical: SizeHelper.calculateWidth(StylesHelper.contentPadding / 2),
        paddingHorizontal: SizeHelper.calculateWidth(StylesHelper.contentPadding)
    },
    languageDisplaySwapIcon: {
        color: StylesHelper.project5,
        fontSize: SizeHelper.calculateWidth(40)
    },

    translateInputContainer: {
        backgroundColor: StylesHelper.blueBackground,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        borderBottomColor: StylesHelper.gray400,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    translateInputContainerActive: {
        backgroundColor: StylesHelper.white
    },

    translateInput: {
        flex: 1,
        marginLeft: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        marginVertical: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        height: SizeHelper.calculateHeight(350),
        fontSize: SizeHelper.calculateWidth(26),
        fontWeight: '500'
    },
    translateInputActive: {
        ...StylesHelper.WriteFont(26, '500', StylesHelper.project7)
    },

    loaderIconContainer: {
        width: SizeHelper.calculateWidth(60),
        justifyContent: 'center',
        alignItems: 'center',
        margin: SizeHelper.calculateWidth(StylesHelper.contentPadding)
    },
    translateInputIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: SizeHelper.calculateWidth(40),
        color: StylesHelper.project2
    },
    loaderIcon: {
        width: SizeHelper.calculateWidth(60)
    },

    translationResultContainer: {
        backgroundColor: StylesHelper.white
    },
    translationResult: {
        paddingVertical: SizeHelper.calculateHeight(StylesHelper.contentPadding)
    },
    translationResultTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: StylesHelper.gray300,
        borderBottomWidth: 1,
        paddingBottom: SizeHelper.calculateHeight(10)
    },
    translationResultTitleText: {
        ...StylesHelper.WriteFont(34, '600', StylesHelper.project3)
    },
    translationResultTitleInfo: {
        ...StylesHelper.WriteFont(20, '300', StylesHelper.project3)
    },

    translationResultContent: {},
    translationResultText: {
        ...StylesHelper.WriteFont(26, '500', StylesHelper.gray800)
    }
});
