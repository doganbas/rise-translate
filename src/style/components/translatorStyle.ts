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
        alignItems: 'center'
    },
    languageDisplayItem: {
        flex: 1,
        alignItems: 'center',
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding / 3)
    },
    languageDisplayItemText: {
        ...StylesHelper.WriteFont(28, 'normal', StylesHelper.project3)
    },
    languageDisplaySwap: {
        paddingVertical: SizeHelper.calculateWidth(StylesHelper.contentPadding / 2),
        paddingHorizontal: SizeHelper.calculateWidth(StylesHelper.contentPadding)
    },
    languageDisplaySwapIcon: {
        color: StylesHelper.project5,
        fontSize: SizeHelper.calculateWidth(40)
    },
    translateInputContainer: {},
    translateInput: {
        backgroundColor: StylesHelper.project5,
        height: SizeHelper.calculateHeight(350),
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        fontSize: SizeHelper.calculateWidth(26)
    }
});
