import { Page as PageComp } from '../../core/components/page/page.common';
import { MbscPageOptions } from '../../core/components/page/page.types.public';
declare class Page extends PageComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
export declare const page: (selector: string | HTMLElement, options?: MbscPageOptions) => Page | {
    [key: string]: Page;
};
export { Page };
export * from '../../core/components/page/page.types.public';
