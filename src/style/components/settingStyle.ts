import {StyleSheet} from 'react-native';
import SizeHelper from '../../helpers/sizeHelper';
import StylesHelper from '../../helpers/stylesHelper';

export const SettingStyle = StyleSheet.create({

    settingSection: {
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding)
    },
    settingSectionTitleContainer: {
        paddingVertical: SizeHelper.calculateWidth(10)
    },
    settingSectionTitle: {
        ...StylesHelper.WriteFont(26, 'bold', StylesHelper.project3),
        paddingLeft: SizeHelper.calculateWidth(5)
    },
    settingSectionContent: {
        backgroundColor: '#fff',
        borderRadius: SizeHelper.calculateWidth(10),
        ...StylesHelper.boxShadow(7),
    },

    languageListLineContainer: {},
    languageListLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        borderBottomWidth: 1,
        borderBottomColor: StylesHelper.gray200
    },
    languageListLineActive: {
        backgroundColor: StylesHelper.project5
    },
    languageListLineText: {
        ...StylesHelper.WriteFont(26, 'normal', StylesHelper.project3)
    },
    languageListLineCheck: {
        width: SizeHelper.calculateWidth(60),
        height: SizeHelper.calculateWidth(60)
    },

    clearScrollLast: {
        height: SizeHelper.calculateHeight(520)
    }
});
