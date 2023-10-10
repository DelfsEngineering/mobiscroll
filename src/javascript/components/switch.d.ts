import { Switch as SwitchComp } from '../../core/components/switch/switch.common';
import { MbscSwitchOptions } from '../../core/components/switch/switch.types.public';
export declare class Switch extends SwitchComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
export declare const formSwitch: (selector: string | HTMLElement, options?: MbscSwitchOptions) => Switch | {
    [key: string]: Switch;
};
export * from '../../core/components/switch/switch.types.public';
