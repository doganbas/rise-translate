import moment from 'moment';
import {IndexedString, Nullable} from '../types';

export default class DateHelper {
    static timeDiff(startTime: Nullable<Date>, endTime: Nullable<Date>, diffType: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year' = 'hour'): number {
        const startTimeLocal = moment(startTime ?? undefined);
        const endTimeLocal = moment(endTime ?? undefined);

        return endTimeLocal.diff(startTimeLocal, diffType);
    }

    static timeDiffString(startTime: Nullable<Date>, endTime?: Date): { key: string, translate: string, param?: IndexedString<string> | undefined } {
        const startTimeLocal = moment(startTime ?? undefined);
        const endTimeLocal = moment(endTime ?? undefined);

        let result = endTimeLocal.diff(startTimeLocal, 'second');
        if (result < 60)
            return {key: 'time-diff-second', translate: 'Saniyeler Önce'}

        result = endTimeLocal.diff(startTimeLocal, 'minute');
        if (result < 60)
            return {key: 'time-diff-minute', translate: '{{minute}} dakika önce', param: {minute: result.toString()}};

        result = endTimeLocal.diff(startTimeLocal, 'hour');
        if (result < 60)
            return {key: 'time-diff-hour', translate: '{{hour}} saat önce', param: {hour: result.toString()}};

        result = endTimeLocal.diff(startTimeLocal, 'day');
        if (result < 60)
            return {key: 'time-diff-day', translate: '{{day}} gün önce', param: {day: result.toString()}};

        result = endTimeLocal.diff(startTimeLocal, 'week');
        if (result < 4)
            return {key: 'time-diff-week', translate: '{{week}} hafta önce', param: {week: result.toString()}};

        result = endTimeLocal.diff(startTimeLocal, 'month');
        if (result < 12)
            return {key: 'time-diff-month', translate: '{{month}} hafta önce', param: {month: result.toString()}};

        result = endTimeLocal.diff(startTimeLocal, 'year');
        return {key: 'time-diff-yıl', translate: '{{year}} yıl önce', param: {year: result.toString()}};
    }

    static addTime(date: Date, addTime: number, addType: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year' = 'hour'): Date {
        return moment(date ?? undefined).add(addTime, addType).toDate();
    }

    static toString(date: Date, format: string = 'DD MMMM yyyy - dddd'): string {
        return moment(date).format(format);
    }
}
