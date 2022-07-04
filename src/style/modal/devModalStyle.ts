import {StyleSheet} from 'react-native';
import StylesHelper from '../../helpers/stylesHelper';
import SizeHelper from '../../helpers/sizeHelper';

export const DevModalStyle = StyleSheet.create({
    testModelFull: {
        margin: 0,
        backgroundColor: StylesHelper.black,
        flex: 1
    },
    testModalFullButton: {
        paddingTop: SizeHelper.calculateHeight(100)
    },
    testModalFullButtonText: {
        ...StylesHelper.WriteFont(26, 'bold', StylesHelper.white)
    },

    devModal: {
        margin: 0,
        marginTop: SizeHelper.deviceHeight - SizeHelper.calculateHeight(800),
        backgroundColor: 'transparent',
        flex: 1
    },

    devModalContainer: {
        flex: 1,
        backgroundColor: StylesHelper.project5,
        borderRadius: SizeHelper.calculateWidth(8),
    },

    appInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop: SizeHelper.calculateHeight(40),
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding)
    },
    appInfoLogoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: StylesHelper.white,
        width: SizeHelper.calculateWidth(120),
        height: SizeHelper.calculateHeight(120),
        borderRadius: SizeHelper.calculateWidth(10),
    },
    appInfoLogo: {
        resizeMode: 'contain',
        width: '100%'
    },
    appInfoContent: {
        paddingLeft: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        justifyContent: 'space-between',
        height: SizeHelper.calculateHeight(120),
        paddingVertical: SizeHelper.calculateHeight(5)
    },
    appInfoName: {
        ...StylesHelper.WriteFont(26, 'bold', StylesHelper.white),
        flex: 1
    },
    appInfoWeb: {
        ...StylesHelper.WriteFont(24, '300', StylesHelper.white)
    },
    appInfoVersion: {
        ...StylesHelper.WriteFont(24, '300', StylesHelper.white)
    },

    sectionSeparator: {
        height: SizeHelper.calculateHeight(7),
        backgroundColor: StylesHelper.white,
        marginTop: SizeHelper.calculateHeight(30),
        ...StylesHelper.boxShadow(2)
    },

    poweredByList: {
        flex: 1,
        justifyContent: 'space-around'
    },
    poweredByListItem: {
        marginTop: SizeHelper.calculateHeight(30),
        paddingHorizontal: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        justifyContent: 'center',
        alignItems: 'center'
    },
    poweredByListTitle: {
        ...StylesHelper.WriteFont(26, 'bold', StylesHelper.white),
        textAlign: 'center'
    },
    poweredByListItemLogo: {
        height: SizeHelper.calculateWidth(110),
        resizeMode: 'contain',
        marginTop: SizeHelper.calculateHeight(50)
    },

    testModal: {
        flex: 1,
        backgroundColor: StylesHelper.black
    },
    testModalContainer: {
        flex: 1,
        marginTop: SizeHelper.calculateHeight(30)
    },

    testInlineTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SizeHelper.calculateHeight(40),
        borderBottomWidth: 1,
        borderBottomColor: StylesHelper.gray800,
        paddingBottom: SizeHelper.calculateHeight(30)
    },
    testInlineTitleText: {
        ...StylesHelper.WriteFont(26, 'bold', StylesHelper.white),
        textAlign: 'center'
    },

    testInlineButtonLine: {},
    testInlineButtonLineContainer: {
        borderBottomColor: StylesHelper.gray800,
        borderBottomWidth: 1,
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    testInlineButtonLineIcon: {
        fontSize: SizeHelper.calculateWidth(24),
        color: StylesHelper.white
    },
    testInlineButtonLineText: {
        ...StylesHelper.WriteFont(24, '300', StylesHelper.white),
        paddingLeft: SizeHelper.calculateWidth(20)
    },

    testInlineListContainer: {
        marginTop: SizeHelper.calculateHeight(25)
    },
    testInlineListTitle: {
        ...StylesHelper.WriteFont(24, 'normal', StylesHelper.white),
        textAlign: 'center',
        paddingBottom: SizeHelper.calculateHeight(20)
    },
    testInlineList: {
        height: SizeHelper.calculateHeight(450),
        marginHorizontal: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        borderWidth: 1,
        borderColor: StylesHelper.gray800,
        borderRadius: SizeHelper.calculateWidth(10)
    },
    testInlineListItem: {
        borderBottomColor: StylesHelper.gray800,
        borderBottomWidth: 1,
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    testInlineListItemKey: {
        ...StylesHelper.WriteFont(24, 'bold', StylesHelper.white)
    },
    testInlineListItemValue: {
        ...StylesHelper.WriteFont(24, '300', StylesHelper.white),
        paddingLeft: SizeHelper.calculateWidth(5)
    },
    testInlineListItemValueLink: {
        ...StylesHelper.WriteFont(24, '300', StylesHelper.teal),
        paddingLeft: SizeHelper.calculateWidth(5)
    },

    testFormContainer: {
        padding: SizeHelper.calculateWidth(StylesHelper.contentPadding)
    },
    testFormSubmit: {
        padding: SizeHelper.calculateWidth(20),
        borderWidth: 1,
        borderColor: StylesHelper.white,
        ...StylesHelper.boxShadow(6, StylesHelper.white),
        borderRadius: SizeHelper.calculateHeight(10),
        marginBottom: SizeHelper.calculateHeight(20)
    },
    testFormSubmitText: {
        ...StylesHelper.WriteFont(24, 'bold', StylesHelper.white),
        textAlign: 'center'
    },
    testFormInputControl: {
        padding: SizeHelper.calculateWidth(20),
        borderWidth: 1,
        borderColor: StylesHelper.gray900,
        ...StylesHelper.boxShadow(6, StylesHelper.white),
        borderRadius: SizeHelper.calculateHeight(10),
        marginBottom: SizeHelper.calculateHeight(20),
        ...StylesHelper.WriteFont(24, 'normal', StylesHelper.white)
    },
    testFormLoginResultText: {
        ...StylesHelper.WriteFont(22, 'normal', StylesHelper.white)
    }
});
