import {LanguageLocalizationModel} from '../models/languageModel';
import {DataType} from '../enums/dataType';

const localizationsTr = [
    {key: 'app-name', value: 'Rise Translate', dataType: DataType.string},
    {key: 'error-page-title', value: 'Bir Hata Oluştu', dataType: DataType.string},
    {key: 'error-message-title', value: 'Hata Mesajı', dataType: DataType.string},
    {key: 'undefined-error-message', value: 'Bilinmeyen bir hata meydana geldi.', dataType: DataType.string},
    {key: 'ignore-error', value: 'Hatayı Yoksay', dataType: DataType.string},
    {key: 'reload-application', value: 'Uygulamayı Yeniden Yükle', dataType: DataType.string},
    {key: 'connection-error-title', value: 'İnternet Bağlantısı Bulunamadı', dataType: DataType.string},
    {key: 'connection-error-content', value: 'İnternet bağlantısı bulunamadı. Lütfen bağlantınızı kontrol ediniz. Bağlantı sağlandığı zaman kaldığınız yerden devam edebilirsiniz.', dataType: DataType.string},
    {key: 'application-loader-title', value: 'Bekleyen yükleme(ler) mevcut', dataType: DataType.string},
    {key: 'undefined-loader-text', value: 'Bilinmeyen yükleme...', dataType: DataType.string},
    {key: 'screen-home-tab-title', value: 'Anasayfa', dataType: DataType.string},
    {key: 'validation-required', value: '\'{{name}}\' isimli alan boş bırakılamaz.', dataType: DataType.string},
    {key: 'validation-string-min', value: '\'{{name}}\' isimli alan değeri en az {{min}} karakterden oluşmalıdır.', dataType: DataType.string},
    {key: 'validation-string-max', value: '\'{{name}}\' isimli alan değeri en fazla {{max}} karakterden oluşmalıdır.', dataType: DataType.string},
    {key: 'validation-string-length', value: '\'{{name}}\' isimli alan değeri en en {{min}} en fazla {{max}} karakterden oluşmalıdır.', dataType: DataType.string},
    {key: 'validation-required', value: '\'{{name}}\' isimli alan boş bırakılamaz.', dataType: DataType.string},

] as LanguageLocalizationModel[];

const localizationsEn = [
    {key: 'app-name', value: 'Rise Translate', dataType: DataType.string},
    {key: 'error-page-title', value: 'Something Went Error', dataType: DataType.string},
    {key: 'error-message-title', value: 'Error Message', dataType: DataType.string},
    {key: 'undefined-error-message', value: 'Unknown error occurred.', dataType: DataType.string},
    {key: 'ignore-error', value: 'Ignore Error', dataType: DataType.string},
    {key: 'reload-application', value: 'Reload Application', dataType: DataType.string},
    {key: 'connection-error-title', value: 'Internet Connection Not Found', dataType: DataType.string},
    {key: 'connection-error-content', value: 'Internet connection not found. Please check your connection. Once the connection is established, you can continue where you left off.', dataType: DataType.string},
    {key: 'application-loader-title', value: 'Pending download(s) available', dataType: DataType.string},
    {key: 'undefined-loader-text', value: 'Unknown install...', dataType: DataType.string},
    {key: 'screen-home-tab-title', value: 'Home', dataType: DataType.string},
    {key: 'validation-required', value: 'The field named \'{{name}}\' cannot be left blank.', dataType: DataType.string},
    {key: 'validation-string-min', value: 'The field value \'{{name}}\' must be at least {{min}} characters.', dataType: DataType.string},
    {key: 'validation-string-max', value: 'The field value named \'{{name}}\' must be a maximum of {{max}} characters.', dataType: DataType.string},
    {key: 'validation-string-length', value: 'The field value named \'{{name}}\' must be at least {{min}} and at most {{max}} characters.', dataType: DataType.string},
    {key: 'validation-required', value: 'The field named \'{{name}}\' cannot be left blank.', dataType: DataType.string},

] as LanguageLocalizationModel[];

export {localizationsTr, localizationsEn};
