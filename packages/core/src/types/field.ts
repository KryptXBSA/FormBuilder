export type FormField =
	| TextField
	| NumberField
	| BooleanField
	| DateField
	| FileField
	| EnumField;

export type FormVariant =
	| TextFieldVariant
	| NumberFieldVariant
	| BooleanFieldVariant
	| DateFieldVariant
	| FileFieldVariant
	| SelectionFieldVariant;

export const fieldKind = [
	"text",
	"number",
	"boolean",
	"date",
	"file",
	"enum",
] as const;
export type FieldKind = (typeof fieldKind)[number];

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

// Text Field
export const textFieldVariants = [
	{ label: "Input", value: "input" },
	{ label: "Textarea", value: "textarea" },
	{ label: "Rich Text Editor", value: "rich-text" },
	{ label: "Markdown Editor", value: "markdown" },
	{ label: "Code Editor", value: "code" },
	{ label: "Password Input", value: "password" },
	{ label: "Auto-resizing Textarea", value: "autosize-textarea" },
	{ label: "OTP Input", value: "input-otp" },
	{ label: "Input Mask", value: "input-mask" },
] as const;
export type TextFieldVariant = (typeof textFieldVariants)[number]["value"];

export type TextField = BaseField & {
	kind: "text";
	variant: TextFieldVariant;
	defaultValue?: string;
	validation?: TextValidation;
};

export type TextValidation = {
	min?: number;
	max?: number;
	pattern?: string;
	email?: boolean;
	url?: boolean;
};

// Number Field
export const numberFieldVariants = [
	{ label: "Number Input", value: "input" },
	{ label: "Slider", value: "slider" },
	{ label: "Rating", value: "rating" },
	{ label: "OTP", value: "otp" },
	{ label: "Stepper", value: "stepper" },
] as const;
export type NumberFieldVariant = (typeof numberFieldVariants)[number]["value"];

export type NumberField = BaseField & {
	kind: "number";
	variant: NumberFieldVariant;
	defaultValue?: number;
	validation?: NumberValidation;
};

export type NumberValidation = {
	min?: number;
	max?: number;
	step?: number;
	precision?: number;
	allowNegative?: boolean;
	allowDecimal?: boolean;
};

// Boolean Field
export const booleanFieldVariants = [
	{ label: "Checkbox", value: "checkbox" },
	{ label: "Switch", value: "switch" },
	{ label: "Toggle", value: "toggle" },
] as const;
export type BooleanFieldVariant =
	(typeof booleanFieldVariants)[number]["value"];

export type BooleanField = BaseField & {
	kind: "boolean";
	variant: BooleanFieldVariant;
	defaultValue?: boolean;
};

// Date Field
export const dateFieldVariants = [
	{ label: "Date Picker", value: "date" },
	{ label: "Date & Time Picker", value: "datetime" },
	{ label: "Time Picker", value: "time" },
	{ label: "Date Range Picker", value: "daterange" },
	// Shadcn specific
	{ label: "Calendar Picker", value: "calendar-picker" },
	{ label: "Date Range Calendar", value: "date-range-picker" },
] as const;
export type DateFieldVariant = (typeof dateFieldVariants)[number]["value"];

export type DateField = BaseField & {
	kind: "date";
	variant: DateFieldVariant;
	defaultValue?: string | Date;
	validation?: DateValidation;
};

export type DateValidation = {
	minDate?: string | Date;
	maxDate?: string | Date;
	excludeDates?: Array<string | Date>;
	excludeWeekends?: boolean;
};

// File Field
export const fileFieldVariants = [
	{ label: "Single File Upload", value: "single" },
	{ label: "Multiple File Upload", value: "multiple" },
	{ label: "Drag & Drop Zone", value: "drag-drop" },
	{ label: "Avatar Upload", value: "avatar" },
	{ label: "Image Gallery", value: "image-gallery" },
] as const;
export type FileFieldVariant = (typeof fileFieldVariants)[number]["value"];

export type FileField = BaseField & {
	kind: "file";
	variant: FileFieldVariant;
	defaultValue?: string | string[];
	validation?: FileValidation;
};

export type FileValidation = {
	maxSize?: number;
	allowedTypes?: string[];
	maxFiles?: number;
	minFiles?: number;
};

// Enum Field
export const selectionFieldVariants = [
	{ label: "Select Dropdown", value: "select" },
	{ label: "Combobox", value: "combobox" },
	{ label: "Radio Group", value: "radio" },
	{ label: "Checkbox Group", value: "checkbox" },
	{ label: "Segmented Control", value: "segmented" },
	{ label: "Chips Input", value: "chips" },
] as const;
export type SelectionFieldVariant =
	(typeof selectionFieldVariants)[number]["value"];

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

export type SelectionValidation = {
	minSelect?: number;
	maxSelect?: number;
	unique?: boolean;
};

// Framework Settings
export type FrameworkFieldSettings = {
	next?: NextFieldSettings;
	react?: ReactFieldSettings;
	svelte?: SvelteFieldSettings;
	vue?: VueFieldSettings;
	solid?: SolidFieldSettings;
	astro?: AstroFieldSettings;
};

export type NextFieldSettings = {
	serverAction?: boolean;
	apiEndpoint?: string;
};

export type ReactFieldSettings = {
	stateKey?: string;
};

export type SvelteFieldSettings = {
	reactive?: boolean;
};

export type VueFieldSettings = {
	vModel?: string;
};

export type SolidFieldSettings = {
	signal?: string;
};

export type AstroFieldSettings = {
	partial?: boolean;
};
