import type { Prettify } from "./prettify";
import type { FieldKind, FormVariant, FormField } from "./field";

export type FormFramework =
	| "next"
	| "react"
	| "svelte"
	| "vue"
	| "solid"
	| "astro";

export type ChosenField = { kind: FieldKind; variant: FormVariant };

export type FormSchema = Prettify<{
	id: number;
	name: string;
	framework: FormFramework;
	fields: FormField[][];
	settings: Settings;
}>;

export type Settings = {
	importAliasComponents: string;
	importAliasUtils: string;
	noDescription: boolean;
	noPlaceholder: boolean;
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
