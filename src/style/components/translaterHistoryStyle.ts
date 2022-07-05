import {StyleSheet} from 'react-native';
import StylesHelper from '../../helpers/stylesHelper';
import SizeHelper from '../../helpers/sizeHelper';

export const TranslationHistoryStyle = StyleSheet.create({
    historyContainer: {
        flex: 1
    },
    historyTitleContainer: {
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        backgroundColor: StylesHelper.white
    },
    historyTitle: {
        ...StylesHelper.WriteFont(30, '500', StylesHelper.project3)
    },

    historyListContainer: {
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        flex: 1
    },

    historyItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: StylesHelper.gray300,
        paddingVertical: SizeHelper.calculateWidth(StylesHelper.contentPadding),
    },
    historyItemInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    historyItemInfoLang: {
        ...StylesHelper.WriteFont(26, '500', StylesHelper.project5)
    },
    historyItemInfoTime: {
        ...StylesHelper.WriteFont(20, '300', StylesHelper.gray700)
    },

    historyItemTranslate: {
        marginTop: SizeHelper.calculateHeight(10),
        ...StylesHelper.WriteFont(26, '500', StylesHelper.gray700)
    },
    historyItemTranslation: {
        marginTop: SizeHelper.calculateHeight(10),
        ...StylesHelper.WriteFont(26, '800', StylesHelper.gray900)
    }
});
