import type { Prettify } from "./prettify";
import type { FormField } from "./field";
import type {
	FrameworkFieldVariants,
	FrameworkFieldKinds,
} from "./fieldVariants";

export type FormFramework =
	| "next"
	| "svelte"
	| "vue"

export type ChosenField<F extends FormFramework> = {
	kind: FrameworkFieldKinds[F];
	variant: FrameworkFieldVariants[F];
};

export type FormSchema<F extends FormFramework = FormFramework> = Prettify<{
	id: number;
	name: string;
	framework: F;
	fields: FormField<F>[][];
	settings: Settings;
}>;

export type Settings = {
	importAliasComponents: string;
	importAliasUtils: string;
	noDescription?: boolean;
	noPlaceholder?: boolean;
	frameworkSettings?: FrameworkSettings;
};

export type FrameworkSettings = {
	next?: {
		useServerActions?: boolean;
		apiRoute?: string;
	};
	react?: {
		stateManager?: "context" | "redux" | "none";
	};
	svelte?: {
		kit: boolean;
	};
	vue?: {
		composition: boolean;
	};
	solid?: {
		signals: boolean;
	};
	astro?: {
		ssr: boolean;
	};
};
