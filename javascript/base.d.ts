import { registerComponent } from '../preact/renderer';
export { registerComponent };
export declare function createComponentFactory<OptionsType, ComponentType>(Component: any, renderOptions?: any): (selector: string | HTMLElement, options?: OptionsType) => ComponentType | {
    [key: string]: ComponentType;
};
