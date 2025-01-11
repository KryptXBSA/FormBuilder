import type { FormField, FormFramework } from "formbuilder-core";
import { COMPONENTS } from "../components";

export function getRequiredComponents<F extends FormFramework>(framework: FormFramework, fields: FormField<F>[][]) {
	let requiredComponents: string[] = [];

	fields.flat().forEach((field) => {
		requiredComponents.push(...COMPONENTS[field.variant].cli);
	});
	requiredComponents = Array.from(new Set(requiredComponents));
	return requiredComponents;
}
