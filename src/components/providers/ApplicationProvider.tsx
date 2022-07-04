import React, {FunctionComponent} from 'react';
import ApplicationErrorProvider from './ApplicationErrorProvider';
import ApplicationLanguageProvider from './ApplicationLanguageProvider';
import ApplicationLoaderProvider from './ApplicationLoaderProvider';
import ApplicationAssetProvider from './ApplicationAssetProvider';

const ApplicationProvider: FunctionComponent = (props) => {
    return (
        <ApplicationAssetProvider>
            <ApplicationErrorProvider>
                <ApplicationLoaderProvider>
                    <ApplicationLanguageProvider>
                        {props.children}
                    </ApplicationLanguageProvider>
                </ApplicationLoaderProvider>
            </ApplicationErrorProvider>
        </ApplicationAssetProvider>
    )
}

export default ApplicationProvider;
