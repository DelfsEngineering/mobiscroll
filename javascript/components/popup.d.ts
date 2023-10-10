import { Popup } from '../../core/components/popup/popup.common';
import { MbscPopupOptions } from '../../core/components/popup/popup.types.public';
export declare const popup: (selector: string | HTMLElement, options?: MbscPopupOptions) => Popup | {
    [key: string]: Popup;
};
export { Popup };
export * from '../../core/components/popup/popup.types.public';
