import type { FormField, FormFramework } from "formbuilder-core";

export function findFieldIndex<F extends FormFramework>(formFields: FormField<F>[][], id: string) {
	for (let i = 0; i < formFields.length; i++) {
		const index = formFields[i].findIndex((field) => field.id === id);
		if (index !== -1) return { row: i, col: index };
	}
	return null;
}
