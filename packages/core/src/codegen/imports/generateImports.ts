import type { FormField, FormFramework } from "formbuilder-core";
import { nextInitialImports } from "./next/initialImports";
import { vueInitialImports } from "./vue/initialImports";
import { COMPONENTS } from "../../components/components";

export function generateImports<F extends FormFramework>(
	framework: FormFramework,
	fields: FormField<F>[][],
) {
	let imports = framework === 'vue' ? vueInitialImports : nextInitialImports;
	const addedVariants: Set<string> = new Set();

	fields.flat().forEach((field) => {
		if (!addedVariants.has(field.variant)) {
			if (field.kind === "heading") {
				imports += COMPONENTS[field.variant].imports.replace(
					"{{headingLevel}}",
					field.headingLevel!,
				);
			} else {
				imports += COMPONENTS[field.variant].imports;
			}
			addedVariants.add(field.variant);
		}
	});

	return imports;
}
