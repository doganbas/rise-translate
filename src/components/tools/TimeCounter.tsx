import {StyleProp, Text, TextStyle} from 'react-native';
import React, {FunctionComponent, useEffect, useState} from 'react';
import DateHelper from '../../helpers/dateHelper';

const TimeCounter: FunctionComponent<{ startDate: Date, textStyle: StyleProp<TextStyle> | undefined }> = ({startDate, textStyle}) => {
    const [timeLeft, setTimeLeft] = useState<number>(DateHelper.timeDiff(startDate, null, 'second'));

    useEffect(() => {
        const activeInterval = setInterval(() => {
            setTimeLeft(DateHelper.timeDiff(startDate, null, 'second'));
        }, 1000);

        return (() => {
            clearInterval(activeInterval)
        })
    }, []);

    return (
        <Text style={textStyle}>{timeLeft}s</Text>
    );
};

export default TimeCounter;
