import type { Prettify } from "./prettify";
import type { FormField } from "./field";

export type FormSchema = Prettify<{
	id: number;
	settings: Settings;
	name: string;
	fields: FormField[][];
}>;

export type Settings = {
	importAliasComponents: string;
	importAliasUtils: string;
	noDescription: boolean;
	noPlaceholder: boolean;
	framework: "next" | "react" | "svelte" | "vue" | "solid" | "astro";
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
