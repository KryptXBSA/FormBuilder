import type {
	BooleanField,
	DateField,
	EnumField,
	HeadingField,
	NumberField,
	TextField,
} from "@/types/field";

import { randID } from "./randID";
import type { FormFramework } from "@/types";
import type { FrameworkFieldVariants } from "@/types/fieldVariants";

export function newHeadingField<F extends FormFramework>(
	variant: FrameworkFieldVariants[F],
): HeadingField<F> {
	return {
		id: `id-${randID()}`,
		key: `key-${randID()}`,
		label: "My string",
		kind: "heading",
		variant: variant,
	};
}
export function newTextField<F extends FormFramework>(
	variant: FrameworkFieldVariants[F],
): TextField<F> {
	console.log("xz1112", variant);
	return {
		id: `id-${randID()}`,
		key: `key-${randID()}`,
		label: "My string",
		description: "Description",
		placeholder: "Placeholder",
		kind: "text",
		variant: variant,
		defaultValue: "string",
		digits: 6,
		required: true,
		disabled: false,
		validation: {
			min: 1,
			max: 255,
		},
	};
}
export function newNumberField<F extends FormFramework>(
	variant: FrameworkFieldVariants[F],
): NumberField<F> {
	return {
		id: `id-${randID()}`,
		key: `key-${randID()}`,
		label: "My number",
		description: "Description",
		placeholder: "Placeholder",
		kind: "number",
		variant: variant,
		defaultValue: 1,
		required: true,
		disabled: false,
		// inputotp
		validation: {
			min: 1,
			max: 99999,
			step: 1,
		},
	};
}
export function newBooleanField<F extends FormFramework>(
	variant: FrameworkFieldVariants[F],
): BooleanField<F> {
	return {
		id: `id-${randID()}`,
		key: `key-${randID()}`,
		label: "My boolean",
		description: "Description",
		placeholder: "Placeholder",
		kind: "boolean",
		variant: variant,
		defaultValue: true,
		required: true,
		disabled: false,
	};
}

export function newDateField<F extends FormFramework>(
	variant: FrameworkFieldVariants[F],
): DateField<F> {
	return {
		id: `id-${randID()}`,
		key: `key-${randID()}`,
		label: "My date",
		description: "Description",
		placeholder: "Pick a date",
		kind: "date",
		variant: variant,
		required: true,
		disabled: false,
	};
}

export function newEnumField<F extends FormFramework>(
	variant: FrameworkFieldVariants[F],
): EnumField<F> {
	return {
		id: `id-${randID()}`,
		key: `key-${randID()}`,
		label: "My enum",
		description: "Description",
		placeholder: "Placeholder",
		kind: "enum",
		variant: variant,
		enumName: `myEnum${randID()}`,
		enumValues: [
			{ id: `id-${randID()}`, label: "label1", value: "value1" },
			{ id: `id-${randID()}`, label: "label2", value: "value2" },
		],
		required: true,
		disabled: false,
	};
}
