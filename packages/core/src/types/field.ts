import type { FormFramework } from "./index";
import type { FrameworkFieldVariants } from "./fieldVariants";

export type FormField<F extends FormFramework> =
	| HeadingField<F>
	| TextField<F>
	| NumberField<F>
	| BooleanField<F>
	| DateField<F>
	// | FileField<F>
	| EnumField<F>;

// TODO: error message, success message
export type BaseField = {
	id: string;
	label: string;
	key: string;
	required: boolean;
	description?: string;
	placeholder?: string;
	disabled?: boolean;
	// message?: string;
};

export type HeadingField<F extends FormFramework> = {
	id: string;
	key: string;
	label: string;
	kind: "heading";
	headingLevel?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
	variant: FrameworkFieldVariants[F];
};

export type TextField<F extends FormFramework> = BaseField & {
	kind: "text";
	variant: FrameworkFieldVariants[F];
	defaultValue?: string;
	validation: TextValidation;
};

export type NumberField<F extends FormFramework> = BaseField & {
	kind: "number";
	digits?: number;
	variant: FrameworkFieldVariants[F];
	defaultValue?: number;
	validation?: NumberValidation;
};

export type BooleanField<F extends FormFramework> = BaseField & {
	kind: "boolean";
	variant: FrameworkFieldVariants[F];
	defaultValue?: boolean;
	validation?: BooleanValidation;
};

export type DateField<F extends FormFramework> = BaseField & {
	kind: "date";
	variant: FrameworkFieldVariants[F];
	defaultValue?: number;
	validation?: DateValidation;
};

// export type FileField<F extends FormFramework> = BaseField & {
// 	kind: "file";
// 	variant: FrameworkFieldVariants[F];
// 	defaultValue?: File;
// 	validation?: DateValidation;
// };

export type EnumField<F extends FormFramework> = BaseField & {
	kind: "enum";
	variant: FrameworkFieldVariants[F];
	defaultValue?: string[];
	enumName?: string;
	enumValues?: EnumValue[];
	validation?: EnumValidation;
};

export type TextValidation = {
	min?: number;
	max?: number;
	isEmail?: boolean;
};

export type NumberValidation = {
	min?: number;
	max?: number;
	step?: number;
	allowNegative?: boolean;
	allowDecimal?: boolean;
};

export type BooleanValidation = {
	required?: boolean;
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

export type EnumValue = {
	label: string;
	value: string;
	id: string;
	disabled?: boolean;
};

export type EnumValidation = {
	minSelect?: number;
	maxSelect?: number;
	unique?: boolean;
};
