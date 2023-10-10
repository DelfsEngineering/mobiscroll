import { Dropcontainer as DropcontainerComp } from '../../core/components/dropcontainer/dropcontainer.common';
import { MbscDropcontainerOptions } from '../../core/components/dropcontainer/dropcontainer.types.public';
declare class Dropcontainer extends DropcontainerComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
export declare const dropcontainer: (selector: string | HTMLElement, options?: MbscDropcontainerOptions) => Dropcontainer | {
    [key: string]: Dropcontainer;
};
export { Dropcontainer };
export * from '../../core/components/dropcontainer/dropcontainer.types.public';
