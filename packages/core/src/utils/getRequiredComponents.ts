import type { FormField, FormFramework } from "formbuilder-core";
import { COMPONENTS } from "../components";

export function getRequiredComponents<F extends FormFramework>(framework: FormFramework, fields: FormField<F>[][]) {
	let requiredComponents: string[] = [];

	for (const row of fields) {
		for (const col of row) {
			requiredComponents.push(...COMPONENTS[col.variant].cli);
		}
		requiredComponents = Array.from(new Set(requiredComponents)); 
	}
	return requiredComponents;
}
