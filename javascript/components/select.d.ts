import { Select } from '../../core/components/select/select.common';
import { MbscSelectOptions } from '../../core/components/select/select.types.public';
export declare const select: (selector: string | HTMLElement, options?: MbscSelectOptions) => Select | {
    [key: string]: Select;
};
export * from '../../core/components/popup/popup.types.public';
export * from '../../core/components/select/select.types.public';
export { getJson } from '../../core/util/http';
export { Select };
