export type FormField =
	| TextField
	| NumberField
	| BooleanField
	| DateField
	| FileField
	| EnumField;

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
	frameworkSettings?: FrameworkFieldSettings;
};

export type EnumField = BaseField & {
	kind: "enum";
	variant: SelectionFieldVariant;
	enumValues: EnumValue[];
	enumName?: string;
	defaultValue?: string | string[];
	validation?: SelectionValidation;
};

export type EnumValue = {
	label: string;
	value: string;
	id: string;
	disabled?: boolean;
	description?: string;
};

export type FileField = BaseField & {
	kind: "file";
	variant: FileFieldVariant;
	defaultValue?: string | string[];
	validation?: FileValidation;
};

export type DateField = BaseField & {
	kind: "date";
	variant: DateFieldVariant;
	defaultValue?: string | Date;
	validation?: DateValidation;
};

export type BooleanField = BaseField & {
	kind: "boolean";
	variant: BooleanFieldVariant;
	defaultValue?: boolean;
};

export type NumberField = BaseField & {
	kind: "number";
	variant: NumberFieldVariant;
	defaultValue?: number;
	validation?: NumberValidation;
};

export type TextField = BaseField & {
	kind: "string";
	variant: TextFieldVariant;
	defaultValue?: string;
	validation?: TextValidation;
};

export type FileValidation = {
	maxSize?: number;
	allowedTypes?: string[];
	maxFiles?: number;
	minFiles?: number;
};

export type DateValidation = {
	minDate?: string | Date;
	maxDate?: string | Date;
	excludeDates?: Array<string | Date>;
	excludeWeekends?: boolean;
};

export type SelectionValidation = {
	minSelect?: number;
	maxSelect?: number;
	unique?: boolean;
};

export type NumberValidation = {
	min?: number;
	max?: number;
	step?: number;
	precision?: number;
	allowNegative?: boolean;
	allowDecimal?: boolean;
};

export type TextValidation = {
	minLength?: number;
	maxLength?: number;
	pattern?: string;
	email?: boolean;
	url?: boolean;
};

export type FrameworkFieldSettings = {
	next?: NextFieldSettings;
	react?: ReactFieldSettings;
	svelte?: SvelteFieldSettings;
	vue?: VueFieldSettings;
	solid?: SolidFieldSettings;
	astro?: AstroFieldSettings;
};

export type AstroFieldSettings = {
	partial?: boolean;
};

export type SolidFieldSettings = {
	signal?: string;
};

export type VueFieldSettings = {
	vModel?: string;
};

export type SvelteFieldSettings = {
	reactive?: boolean;
};

export type ReactFieldSettings = {
	stateKey?: string;
};

export type NextFieldSettings = {
	serverAction?: boolean;
	apiEndpoint?: string;
};

export const booleanFieldVariants = ["checkbox", "switch", "toggle"] as const;
export type BooleanFieldVariant = (typeof booleanFieldVariants)[number];

export const fileFieldVariants = [
	"single",
	"multiple",
	"drag-drop",
	"avatar",
	"image-gallery",
] as const;
export type FileFieldVariant = (typeof fileFieldVariants)[number];

export const dateFieldVariants = [
	"date",
	"datetime",
	"time",
	"daterange",
] as const;
export type DateFieldVariant = (typeof dateFieldVariants)[number];

export const selectionFieldVariants = [
	"select",
	"combobox",
	"radio",
	"checkbox",
	"segmented",
	"chips",
] as const;
export type SelectionFieldVariant = (typeof selectionFieldVariants)[number];

export const numberFieldVariants = [
	"input",
	"slider",
	"rating",
	"otp",
	"stepper",
] as const;
export type NumberFieldVariant = (typeof numberFieldVariants)[number];

export const textFieldVariants = [
	"input",
	"textarea",
	"rich-text",
	"markdown",
	"code",
	"password",
] as const;
export type TextFieldVariant = (typeof textFieldVariants)[number];
