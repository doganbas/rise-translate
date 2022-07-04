import {Dimensions, Platform} from 'react-native';
import applicationConfig from '../config/applicationConfig';

// noinspection DuplicatedCode
export default class SizeHelper {

    static activeWindow: any = Dimensions.get('window');
    static isAndroid: boolean = Platform.OS === 'android';

    static deviceWidth: number = SizeHelper.activeWindow.width;
    static deviceHeight: number = SizeHelper.activeWindow.height;
    static activeScale: number = SizeHelper.deviceHeight / SizeHelper.deviceWidth;

    static defaultWidth: number = applicationConfig.devSetting.designWidth;
    static defaultHeight: number = applicationConfig.devSetting.designHeight;
    static defaultScale: number = SizeHelper.defaultHeight / SizeHelper.defaultWidth;

    static calculateWidth(width: number): number {
        let turnSize: number = (width * SizeHelper.deviceWidth) / SizeHelper.defaultWidth;
        if (SizeHelper.defaultWidth !== width)
            turnSize *= (SizeHelper.activeScale / SizeHelper.defaultScale);
        if (!SizeHelper.isAndroid && ((SizeHelper.deviceWidth === 812 || SizeHelper.deviceHeight === 812) || (SizeHelper.deviceHeight / SizeHelper.deviceWidth > 2)))
            turnSize = turnSize / 1.2;
        if (SizeHelper.isAndroid && SizeHelper.deviceWidth / SizeHelper.deviceHeight < 0.6)
            turnSize = turnSize / 1.2;
        return parseInt(Math.ceil(turnSize).toString());
    }

    static calculateHeight(height: number): number {
        if (height === 1)
            return 1;
        let turnSize = (height * SizeHelper.deviceHeight) / SizeHelper.defaultHeight;
        if (!SizeHelper.isAndroid && ((SizeHelper.deviceWidth === 812 || SizeHelper.deviceHeight === 812) || (SizeHelper.deviceHeight / SizeHelper.deviceWidth > 2)))
            turnSize = turnSize / 1.2;
        if (SizeHelper.isAndroid && SizeHelper.deviceWidth / SizeHelper.deviceHeight < 0.6)
            turnSize = turnSize / 1.2;
        return parseInt(Math.ceil(turnSize).toString());
    }

}
