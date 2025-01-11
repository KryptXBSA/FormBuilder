import type { FormField, FormFramework } from "formbuilder-core";

export function getRequiredComponents<F extends FormFramework>(framework: FormFramework, fields: FormField<F>[][]) {
	let requiredComponents: string[] = [];
	let count = 0
	for (const row of fields) {
		for (const col of row) {
			count++
			// text variants
			if (col.variant === "next-shadcn-text-input") requiredComponents.push("input");
			if (col.variant === "next-shadcn-text-textarea") requiredComponents.push("textarea");
			if (col.variant === "next-shadcn-text-inputotp") requiredComponents.push("inputotp");
			// origin ui
			if (col.variant === "next-originui-text-password") requiredComponents.push("originui-password");
			if (col.variant === "next-originui-text-inputtag") requiredComponents.push("originui-inputtag");
			// expansions
			if (col.variant === "next-shadcnexpansion-text-autoresizetextarea") requiredComponents.push("shadcnexpansion-autoresizetextarea");

			// number 
			// if (col.variant === "next-shadcn-number-input") requiredComponents.push("input");
			if (col.variant === "next-shadcn-number-slider") requiredComponents.push("slider");
			if (col.variant === "next-shadcn-number-phone") requiredComponents.push("phone");
			// boolean 
			if (col.variant === "next-shadcn-boolean-checkbox") requiredComponents.push("checkbox");
			if (col.variant === "next-shadcn-boolean-switch") requiredComponents.push("switch");
			// date 
			if (col.variant === "next-shadcn-date-date") requiredComponents.push("date");
			if (col.variant === "next-shadcn-date-daterange") requiredComponents.push("daterange");
			// enum
			if (col.variant === "next-shadcn-enum-combobox") requiredComponents.push(...["popover", "command"]);
			if (col.variant === "next-shadcn-enum-select") requiredComponents.push("select");
			if (col.variant === "next-shadcn-enum-radio") requiredComponents.push("radio");
			if (col.variant === "next-shadcn-enum-button") requiredComponents.push("button");

		}
		requiredComponents = requiredComponents.filter((item, index, array) => {
			return array.indexOf(item) === index;
		});
	}
	return requiredComponents;
}
