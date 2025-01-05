import type {
	BooleanFieldVariant, DateFieldVariant, EnumFieldVariant,
	FormField, FormVariant, NumberFieldVariant,
	TextFieldVariant
} from "@/types/field";

import { randNum } from "./randNum";

export function newTextField(variant: FormVariant): FormField {
	return {
		id: `id${randNum()}`,
		key: `key${randNum()}`,
		label: "My string",
		desc: "Description",
		placeholder: "Placeholder",
		kind: "text",
		variant: variant as TextFieldVariant,
		defaultValue: "string",
		required: true,
		validation: {
			min: 1,
			max: 255,
		},
	};
}
export function newNumberField(variant: NumberFieldVariant): FormField {
	return {
		id: `id${randNum()}`,
		key: `key${randNum()}`,
		label: "My number",
		desc: "Description",
		placeholder: "Placeholder",
		kind: "number",
		variant: variant as NumberFieldVariant,
		defaultValue: 1,
		required: true,
		validation: {
			min: 1,
			max: 9999999999,
			step: 1
		},
	};
}
export function newBooleanField(variant: BooleanFieldVariant): FormField {
	return {
		id: `id${randNum()}`,
		key: `key${randNum()}`,
		label: "My bool",
		desc: "Description",
		placeholder: "Placeholder",
		kind: "boolean",
		variant: variant as BooleanFieldVariant,
		defaultValue: true,
		required: true,
	};
}

export function newDateField(variant: DateFieldVariant): FormField {
	return {
		id: `id${randNum()}`,
		key: `key${randNum()}`,
		label: "My date",
		desc: "Description",
		placeholder: "Pick a date",
		kind: "date",
		variant: variant as DateFieldVariant,
		required: true,
	};
}

export function newEnumField(variant: EnumFieldVariant): FormField {
	return {
		id: `id${randNum()}`,
		key: `key${randNum()}`,
		label: "My enum",
		desc: "Description",
		placeholder: "Placeholder",
		kind: "enum",
		variant: variant as EnumFieldVariant,
		enumName: `myEnum${randNum()}`,
		enumValues: [{ id: Date.now().toString(), label: "label", value: "value" }],
		required: true,
	};
}