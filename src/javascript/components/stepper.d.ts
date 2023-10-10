import { Stepper as StepperComp } from '../../core/components/stepper/stepper.common';
import { MbscStepperOptions } from '../../core/components/stepper/stepper.types.public';
export declare class Stepper extends StepperComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
export declare const stepper: (selector: string | HTMLElement, options?: MbscStepperOptions) => Stepper | {
    [key: string]: Stepper;
};
export * from '../../core/components/stepper/stepper.types.public';
