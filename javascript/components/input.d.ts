import { Dropdown as DropdownComp } from '../../core/components/input/dropdown.common';
import { Input as InputComp } from '../../core/components/input/input.common';
import { MbscInputOptions } from '../../core/components/input/input.types.public';
import { Textarea as TextareaComp } from '../../core/components/input/textarea.common';
declare class Input extends InputComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
declare class Dropdown extends DropdownComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
declare class Textarea extends TextareaComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
export declare const input: (selector: string | HTMLElement, options?: MbscInputOptions) => Input | {
    [key: string]: Input;
};
export declare const dropdown: (selector: string | HTMLElement, options?: MbscInputOptions) => Input | {
    [key: string]: Input;
};
export declare const textarea: (selector: string | HTMLElement, options?: MbscInputOptions) => Input | {
    [key: string]: Input;
};
export * from '../../core/components/input/input.types.public';
export { Input, Dropdown, Textarea };
