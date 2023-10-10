import { Checkbox as CheckboxComp } from '../../core/components/checkbox/checkbox.common';
import { MbscCheckboxOptions } from '../../core/components/checkbox/checkbox.types.public';
export declare class Checkbox extends CheckboxComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
export declare const checkbox: (selector: string | HTMLElement, options?: MbscCheckboxOptions) => Checkbox | {
    [key: string]: Checkbox;
};
export * from '../../core/components/checkbox/checkbox.types.public';
