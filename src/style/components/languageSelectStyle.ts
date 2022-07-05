import {StyleSheet} from 'react-native';
import StylesHelper from '../../helpers/stylesHelper';
import SizeHelper from '../../helpers/sizeHelper';

export const LanguageSelectStyle = StyleSheet.create({
    titleContainer: {
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: StylesHelper.gray300,
        borderBottomWidth: 1
    },
    title: {
        ...StylesHelper.WriteFont(26, '500', StylesHelper.project3)
    },
    flatListContainer: {
        paddingTop: SizeHelper.calculateHeight(StylesHelper.contentPadding)
    },
    flatListItem: {
        padding: SizeHelper.calculateHeight(StylesHelper.contentPadding),
        borderBottomColor: StylesHelper.gray300,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    flatListItemActive: {
        borderBottomColor: StylesHelper.project5
    },
    flatListItemIconContainer: {
        width: SizeHelper.calculateWidth(45)
    },
    flatListItemIcon: {
        color: StylesHelper.project5,
        fontSize: SizeHelper.calculateWidth(26)
    },
    flatListItemText: {
        ...StylesHelper.WriteFont(26, '400', StylesHelper.gray800)
    }
});
