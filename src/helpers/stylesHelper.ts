import {ColorValue} from 'react-native';
import SizeHelper from './sizeHelper';

export default class StylesHelper {
    static white: string = '#fff';
    static gray100: string = '#f8f9fa';
    static gray200: string = '#e9ecef';
    static gray300: string = '#dee2e6';
    static gray400: string = '#ced4da';
    static gray500: string = '#adb5bd';
    static gray600: string = '#6c757d';
    static gray700: string = '#495057';
    static gray800: string = '#343a40';
    static gray900: string = '#212529';
    static black: string = '#000';
    static red: string = '#dc3545';
    static green: string = '#80c343';
    static teal: string = '#58d68d';
    static darkTeal: string = '#9ac441';
    static cyan: string = '#10d2e5';

    static project1: string = '#008F8C';
    static project2: string = '#015958';
    static project3: string = '#023535';
    static project4: string = '#0CABA8';
    static project5: string = '#0FC2C0';
    static project6: string = '#8F3400';
    static project7: string = '#421800';

    static formBorderColor: string = '#e5e5e5';
    static blueBackground: string = '#e6ecf0';
    static blueBackgroundLight: string = '#f3f9ff';
    static blueGray: string = '#a6b4bf';

    static contentPadding: number = 25;
    static boxShadow = (size = 6, shadowColor: string = '#000') => ({
        shadowColor: shadowColor,
        shadowOffset: {width: 0, height: (size / 2)},
        shadowOpacity: ((0.27 * size) / 6),
        shadowRadius: ((4.65 * size) / 6),
        elevation: size
    })

    static WriteFont(fontSize: number, fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' = '400', fontColor: ColorValue | undefined = undefined, fontStyle: 'normal' | 'italic' | undefined = undefined): object {
        const turnItem: any = {};
        turnItem.fontSize = SizeHelper.calculateWidth(fontSize);
        turnItem.fontWeight = fontWeight;

        switch (fontWeight) {
            case 'normal':
                turnItem.fontFamily = 'Roboto_400Regular';
                break;
            case 'bold':
                turnItem.fontFamily = 'Roboto_700Bold';
                break;
            case '100':
                turnItem.fontFamily = 'Roboto_100Thin';
                break;
            case '200':
                turnItem.fontFamily = 'Roboto_100Thin';
                break;
            case '300':
                turnItem.fontFamily = 'Roboto_300Light';
                break;
            case '400':
                turnItem.fontFamily = 'Roboto_400Regular';
                break;
            case '500':
                turnItem.fontFamily = 'Roboto_500Medium';
                break;
            case '600':
                turnItem.fontFamily = 'Roboto_500Medium';
                break;
            case '700':
                turnItem.fontFamily = 'Roboto_700Bold';
                break;
            case '800':
                turnItem.fontFamily = 'Roboto_700Bold';
                break;
            case '900':
                turnItem.fontFamily = 'Roboto_900Black';
                break;
        }

        if (fontColor)
            turnItem.color = fontColor;
        if (fontStyle)
            turnItem.fontStyle = fontStyle;
        return turnItem;
    }

    static RGBToRGBA(rgb: string, alpha: number = 1) {
        const rgba = rgb.replace(/rgb/i, 'rgba');
        return rgba.replace(/\)/i, `,${alpha})`);
    }
}
