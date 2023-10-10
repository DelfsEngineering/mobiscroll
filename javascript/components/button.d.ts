import { Button as ButtonComp } from '../../core/components/button/button.common';
import { MbscButtonOptions } from '../../core/components/button/button.types.public';
export declare class Button extends ButtonComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
export declare const button: (selector: string | HTMLElement, options?: MbscButtonOptions) => Button | {
    [key: string]: Button;
};
export * from '../../core/components/button/button.types.public';
