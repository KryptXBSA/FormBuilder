import { NEXT_COMPONENTS } from "./next-components";
import { VUE_COMPONENTS } from "./vue-components";

export type ComponentConfig = {
	[key: string]: {
		label: string;
		cli: string[];
		imports: string;
		template: string;
	};
};

export const COMPONENTS: ComponentConfig = {
	...NEXT_COMPONENTS,
	...VUE_COMPONENTS,
};
