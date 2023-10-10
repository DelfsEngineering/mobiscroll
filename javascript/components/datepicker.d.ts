import { Datepicker } from '../../core/components/datepicker/datepicker.common';
import { MbscDatepickerOptions } from '../../core/components/datepicker/datepicker.types.public';
export * from '../../core/components/datepicker/datepicker.public';
export * from '../shared/calendar-header';
export declare const datepicker: (selector: string | HTMLElement, options?: MbscDatepickerOptions) => Datepicker | {
    [key: string]: Datepicker;
};
export { Datepicker };
