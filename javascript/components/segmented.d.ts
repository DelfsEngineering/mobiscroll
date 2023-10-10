import { SegmentedGroup as SegmentedGroupComp } from '../../core/components/segmented/segmented-group.common';
import { Segmented as SegmentedComp } from '../../core/components/segmented/segmented-item.common';
import { MbscSegmentedOptions } from '../../core/components/segmented/segmented.types.public';
export declare class Segmented extends SegmentedComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
export declare class SegmentedGroup extends SegmentedGroupComp {
    static _selector: string;
    static _renderOpt: import("../../preact/renderer").IRenderOptions;
}
export declare const segmented: (selector: string | HTMLElement, options?: MbscSegmentedOptions) => Segmented | {
    [key: string]: Segmented;
};
export * from '../../core/components/segmented/segmented.types.public';
