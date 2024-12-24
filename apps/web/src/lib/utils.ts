import type { FormField } from "formbuilder-core";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getRequiredComponents(fields: FormField[]) {
	let requiredComponents = [];
	for (const f of fields) {
		if (f.kind === "string") requiredComponents.push("input");
		if (f.kind === "number") requiredComponents.push("input");
		if (f.kind === "date") requiredComponents.push("date");
		if (f.kind === "boolean") requiredComponents.push("switch");
		if (f.style === "radio") requiredComponents.push("radio-group");
		if (f.style === "select") requiredComponents.push("select");
		if (f.style === "combobox")
			requiredComponents.push(...["popover", "command"]);
		if (f.kind === "textarea") requiredComponents.push("textarea");
	}
	requiredComponents = requiredComponents.filter((item, index, array) => {
		return array.indexOf(item) === index;
	});
	return requiredComponents;
}
