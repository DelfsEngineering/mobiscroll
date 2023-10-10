import { MbscCalendarHeaderOptions } from '../../core/shared/calendar-view/calendar-view.types.public';
declare const CalendarNav: {
    ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
    _name: string;
};
declare const CalendarNext: {
    ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
    _name: string;
};
declare const CalendarPrev: {
    ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
    _name: string;
};
declare const CalendarToday: {
    ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
    _name: string;
};
export declare const calendarNext: (selector: string | HTMLElement, options?: MbscCalendarHeaderOptions) => {
    ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
    _name: string;
} | {
    [key: string]: {
        ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
        _name: string;
    };
};
export declare const calendarPrev: (selector: string | HTMLElement, options?: MbscCalendarHeaderOptions) => {
    ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
    _name: string;
} | {
    [key: string]: {
        ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
        _name: string;
    };
};
export declare const calendarToday: (selector: string | HTMLElement, options?: MbscCalendarHeaderOptions) => {
    ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
    _name: string;
} | {
    [key: string]: {
        ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
        _name: string;
    };
};
export declare const calendarNav: (selector: string | HTMLElement, options?: MbscCalendarHeaderOptions) => {
    ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
    _name: string;
} | {
    [key: string]: {
        ({ calendar, view, ...others }: MbscCalendarHeaderOptions): import("../../preact/lib/src").JSX.Element;
        _name: string;
    };
};
export { CalendarNext, CalendarPrev, CalendarToday, CalendarNav };
