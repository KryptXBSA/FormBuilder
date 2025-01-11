import type { FormField, FormFramework } from "formbuilder-core";
import {
	initialImports,
} from "./next/initialImports";
import { COMPONENTS } from "../../components/components";

export function generateImports<F extends FormFramework>(framework: FormFramework, fields: FormField<F>[][]) {
	let imports = initialImports;
	const addedVariants: Set<string> = new Set();

	for (const row of fields) {
		for (const col of row) {
			if (!addedVariants.has(col.variant)) {
				if (col.kind === "heading") {
					imports += COMPONENTS[col.variant].imports.replace("{{headingLevel}}", col.headingLevel!);
				} else {
					imports += COMPONENTS[col.variant].imports;
				}
				addedVariants.add(col.variant);
			}
		}
	}

	return imports;
}