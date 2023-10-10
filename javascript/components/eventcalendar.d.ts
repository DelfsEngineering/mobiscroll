import { Eventcalendar } from '../../core/components/eventcalendar/eventcalendar.common';
import { MbscEventcalendarOptions } from '../../core/components/eventcalendar/eventcalendar.types';
export * from '../../core/components/eventcalendar/eventcalendar.public';
export * from '../shared/calendar-header';
export * from './draggable';
export * from './dropcontainer';
export declare const eventcalendar: (selector: string | HTMLElement, options?: MbscEventcalendarOptions) => Eventcalendar | {
    [key: string]: Eventcalendar;
};
export { Eventcalendar };
