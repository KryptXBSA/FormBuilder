import type { Prettify } from "./prettify";

export const fieldKind = [
	"string",
	"number",
	"boolean",
	"date",
	"enum",
	"textarea",
] as const;
export type FieldKind = (typeof fieldKind)[number];

export type EnumValue = {
	label: string;
	value: string;
	id: string;
};

export const enumStyleValues = ["radio", "select", "combobox"] as const;
export type EnumStyleValues = (typeof enumStyleValues)[number];

export type ValidationOptions = {
	format?: "email" | "string" | "password";
	min: number;
	max: number;
};

export type FormField = {
	id: string;
	label: string;
	desc?: string;
	placeholder?: string;
	key: string;
	kind: FieldKind;
	required: boolean;
	defaultValue?: string | number | boolean;
	style?: EnumStyleValues;
	enumValues?: EnumValue[];
	enumName?: string;
	validation?: ValidationOptions;
};
// TODO: add more settings and framework independent settings
export type Settings = {
	importAlias: string;
	mode: string;
	noDescription: boolean;
	noPlaceholder: boolean;
};

export type FormFramework =
	| "next"
	| "react"
	| "svelte"
	| "vue"
	| "solid"
	| "astro";
export type FormSchema = Prettify<{
	id: number;
	settings: Settings;
	framework: FormFramework;
	name: string;
	fields: FormField[][];
}>;
