import type { Prettify } from "./prettify";
import type { FormField, FrameworkFieldKinds, FrameworkFieldKinds } from "./field";

export type FormFramework =
	| "next"
	| "react"
	| "svelte"
	| "vue"
	| "solid"
	| "astro";

export type ChosenField<F extends FormFramework> = {
	kind: FrameworkFieldKinds[F];
	variant: FrameworkFieldKinds<F, FrameworkFieldKinds[F]>;
};

export type FormSchema<F extends FormFramework = FormFramework> = Prettify<{
	id: number;
	name: string;
	framework: F;
	fields: FormField<F>[][];
	settings: Settings & {
		frameworkSettings?: {
			[K in F]: FrameworkSettings[K];
		};
	};
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
		useServerActions: boolean;
		apiRoute?: string;
	};
	react?: {
		stateManager: "context" | "redux" | "none";
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
