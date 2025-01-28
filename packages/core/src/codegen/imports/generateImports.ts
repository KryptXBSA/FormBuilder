import type { FormField, FormFramework } from "formbuilder-core";
import { nextInitialImports } from "./next/initialImports";
import { vueInitialImports } from "./vue/initialImports";
import { COMPONENTS } from "../../components/components";
import { svelteInitialImports } from "./svelte/initialImports";

export function generateImports<F extends FormFramework>(
	framework: FormFramework,
	fields: FormField<F>[][],
) {
	let imports =
		framework === "vue"
			? vueInitialImports
			: framework === "svelte"
				? svelteInitialImports
				: nextInitialImports;
	const addedVariants: Set<string> = new Set();

	for (const field of fields.flat()) {
		if (!addedVariants.has(field.variant)) {
			if (
				addedVariants.has("next-shadcn-date-date") &&
				field.variant === "next-shadcn-date-daterange"
			) {
				continue;
			}
			if (
				addedVariants.has("next-shadcn-date-daterange") &&
				field.variant === "next-shadcn-date-date"
			) {
				continue;
			}
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
	}

	return imports;
}
