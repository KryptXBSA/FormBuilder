import type { FormFramework, FrameworkSettings } from ".";
import type { Prettify } from "./prettify";

export type BaseField = {
	id: string;
	label: string;
	key: string;
	required: boolean;
	desc?: string;
	placeholder?: string;
	disabled?: boolean;
	hidden?: boolean;
	className?: string;
	tooltip?: string;
	message?: string;
};

// Framework-specific field kinds
export const nextFieldKinds = [
	"text",
	"number",
	"boolean",
	"date",
	"file",
	"enum",
] as const;

export const reactFieldKinds = [
	"text",
	"number",
	"boolean",
	"date",
	"file",
	"enum",
] as const;

export const vueFieldKinds = [
	"text",
	"number",
	"boolean",
	"date",
	"file",
	"enum",
] as const;

export const svelteFieldKinds = [
	"text",
	"number",
	"boolean",
	"date",
	"file",
	"enum",
] as const;

export const solidFieldKinds = [
	"text",
	"number",
	"boolean",
	"date",
	"file",
	"enum",
] as const;

export const astroFieldKinds = [
	"text",
	"number",
	"boolean",
	"date",
	"file",
	"enum",
] as const;

// Framework-specific variants
const textVariants = [
	{ label: "Input", value: "input" },
	{ label: "Textarea", value: "textarea" },
	{ label: "Rich Text Editor", value: "rich-text" },
	{ label: "Markdown Editor", value: "markdown" },
	{ label: "Code Editor", value: "code" },
	{ label: "Password Input", value: "password" },
	{ label: "Auto-resizing Textarea", value: "autosize-textarea" },
	{ label: "OTP Input", value: "input-otp" },
	{ label: "Input Mask", value: "input-mask" }
] as const;

const numberVariants = [
	{ label: "Number Input", value: "input" },
	{ label: "Slider", value: "slider" },
	{ label: "Rating", value: "rating" },
	{ label: "OTP", value: "otp" },
	{ label: "Stepper", value: "stepper" }
] as const;

const booleanVariants = [
	{ label: "Checkbox", value: "checkbox" },
	{ label: "Switch", value: "switch" },
	{ label: "Toggle", value: "toggle" },
] as const;

const dateVariants = [
	{ label: "Date Picker", value: "date" },
	{ label: "Date & Time Picker", value: "datetime" },
	{ label: "Time Picker", value: "time" },
	{ label: "Date Range Picker", value: "daterange" },
	{ label: "Calendar Picker", value: "calendar-picker" },
	{ label: "Date Range Calendar", value: "date-range-picker" },
] as const;

const fileVariants = [
	{ label: "Single File Upload", value: "single" },
	{ label: "Multiple File Upload", value: "multiple" },
	{ label: "Drag & Drop Zone", value: "drag-drop" },
	{ label: "Avatar Upload", value: "avatar" },
	{ label: "Image Gallery", value: "image-gallery" },
] as const;

const enumVariants = [
	{ label: "Select Dropdown", value: "select" },
	{ label: "Combobox", value: "combobox" },
	{ label: "Radio Group", value: "radio" },
	{ label: "Checkbox Group", value: "checkbox" },
	{ label: "Segmented Control", value: "segmented" },
	{ label: "Chips Input", value: "chips" },
] as const;

export const nextFieldVariants = {
	text: textVariants,
	number: numberVariants,
	boolean: booleanVariants,
	date: dateVariants,
	file: fileVariants,
	enum: enumVariants,
} as const;

export const reactFieldVariants = {
	text: textVariants,
	number: numberVariants,
	boolean: booleanVariants,
	date: dateVariants,
	file: fileVariants,
	enum: enumVariants,
} as const;

export const vueFieldVariants = {
	text: textVariants,
	number: numberVariants,
	boolean: booleanVariants,
	date: dateVariants,
	file: fileVariants,
	enum: enumVariants,
} as const;

export const svelteFieldVariants = {
	text: textVariants,
	number: numberVariants,
	boolean: booleanVariants,
	date: dateVariants,
	file: fileVariants,
	enum: enumVariants,
} as const;

export const solidFieldVariants = {
	text: textVariants,
	number: numberVariants,
	boolean: booleanVariants,
	date: dateVariants,
	file: fileVariants,
	enum: enumVariants,
} as const;

export const astroFieldVariants = {
	text: textVariants,
	number: numberVariants,
	boolean: booleanVariants,
	date: dateVariants,
	file: fileVariants,
	enum: enumVariants,
} as const;

// Type helpers, Useless?
export type FrameworkFieldKinds = {
	next: typeof nextFieldKinds[number];
	react: typeof reactFieldKinds[number];
	vue: typeof vueFieldKinds[number];
	svelte: typeof svelteFieldKinds[number];
	solid: typeof solidFieldKinds[number];
	astro: typeof astroFieldKinds[number];
};

type ExtractVariantValue<T> = T extends readonly { value: infer V }[] ? V : never;

// this is new
export type FrameworkFieldVariants<F extends FormFramework, K extends FrameworkFieldKinds[F]> =
	F extends "next"
	? K extends keyof typeof nextFieldVariants
	? ExtractVariantValue<typeof nextFieldVariants[K]>
	: never
	: F extends "react"
	? K extends keyof typeof reactFieldVariants
	? ExtractVariantValue<typeof reactFieldVariants[K]>
	: never
	: F extends "vue"
	? K extends keyof typeof vueFieldVariants
	? ExtractVariantValue<typeof vueFieldVariants[K]>
	: never
	: F extends "svelte"
	? K extends keyof typeof svelteFieldVariants
	? ExtractVariantValue<typeof svelteFieldVariants[K]>
	: never
	: F extends "solid"
	? K extends keyof typeof solidFieldVariants
	? ExtractVariantValue<typeof solidFieldVariants[K]>
	: never
	: F extends "astro"
	? K extends keyof typeof astroFieldVariants
	? ExtractVariantValue<typeof astroFieldVariants[K]>
	: never
	: never;

// useless?
// export type FieldVariants<K extends keyof typeof nextFieldVariants> = typeof nextFieldVariants[K];
// export function getVariants<K extends keyof typeof nextFieldVariants>(kind: K): FieldVariants<K> {
// 	return nextFieldVariants[kind];
// }

// TODO: implement helpers, useless?
// type TextVariantValues = ExtractVariantValue<typeof textVariants>;
// type NextTextFieldVariants = FrameworkFieldVariants<"next", "text">;

// Validation types
export type TextValidation = {
	min?: number;
	max?: number;
	pattern?: string;
	email?: boolean;
	url?: boolean;
};

export type NumberValidation = {
	min?: number;
	max?: number;
	step?: number;
	precision?: number;
	allowNegative?: boolean;
	allowDecimal?: boolean;
};

export type DateValidation = {
	minDate?: string | Date;
	maxDate?: string | Date;
	excludeDates?: Array<string | Date>;
	excludeWeekends?: boolean;
};

export type FileValidation = {
	maxSize?: number;
	allowedTypes?: string[];
	maxFiles?: number;
	minFiles?: number;
};

export type EnumValidation = {
	minSelect?: number;
	maxSelect?: number;
	unique?: boolean;
};
export type EnumValue = {
	label: string;
	value: string;
	id: string;
	disabled?: boolean;
	description?: string;
};

export type BooleanValidation = {
	required?: boolean;
};

export type TextField<F extends FormFramework> = BaseField & {
	kind: "text";
	variant: FrameworkFieldVariants<F,"text">;
	defaultValue?: string;
	validation?: TextValidation;
};
export type NumberField<F extends FormFramework> = BaseField & {
	kind: "number";
	variant: FrameworkFieldVariants<F,"number">;
	defaultValue?: number;
	validation?: NumberValidation;
};
export type BooleanField<F extends FormFramework> = BaseField & {
	kind: "boolean";
	variant: FrameworkFieldVariants<F,"boolean">;
	defaultValue?: boolean;
	validation?: BooleanValidation;
};
export type DateField<F extends FormFramework> = BaseField & {
	kind: "date";
	variant: FrameworkFieldVariants<F,"date">;
	defaultValue?: number;
	validation?: DateValidation;
};
export type FileField<F extends FormFramework> = BaseField & {
	kind: "file";
	variant: FrameworkFieldVariants<F,"file">;
	defaultValue?: File;
	validation?: DateValidation;
};
export type EnumField<F extends FormFramework> = BaseField & {
	kind: "enum";
	variant: FrameworkFieldVariants<F,"enum">;
	defaultValue?: string[];
	enumName?: string
	enumValues?: EnumValue[]
	validation?: DateValidation;
};
export type FormField<F extends FormFramework> =
	| TextField<F>
	| NumberField<F>
	| BooleanField<F>
	| DateField<F>
	| FileField<F>
	| EnumField<F>;

export type FieldVariant<F extends FormFramework> =
	| TextField<F>
	| NumberField<F>
	| BooleanField<F>
	| DateField<F>
	| FileField<F>
	| EnumField<F>;