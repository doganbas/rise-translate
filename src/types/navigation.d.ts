import {AppNavigatorParamList} from '../config/appNavigatorParamList';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppNavigatorParamList {
        }
    }
}
