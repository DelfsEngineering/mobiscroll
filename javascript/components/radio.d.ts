import { Radio as RadioComp } from '../../core/components/radio/radio.common';
import { MbscRadioOptions } from '../../core/components/radio/radio.types.public';
export declare class Radio extends RadioComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
export declare const radio: (selector: string | HTMLElement, options?: MbscRadioOptions) => Radio | {
    [key: string]: Radio;
};
export * from '../../core/components/radio/radio.types.public';
