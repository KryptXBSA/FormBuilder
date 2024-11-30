export const fieldKind = [
	"string",
	"number",
	"boolean",
	"date",
	"enum",
	"textarea",
] as const;
export type FieldKind = (typeof fieldKind)[number];

export interface EnumValue {
	label: string;
	value: string;
	id: string;
}

export const enumStyleValues = ["radio", "select", "combobox"] as const;
export type EnumStyleValues = (typeof enumStyleValues)[number];

export interface ValidationOptions {
	format?: "email" | "string" | "password";
	min: number;
	max: number;
}

export interface FormField {
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
}

export interface FormSchema {
	name: string;
	fields: FormField[];
}
