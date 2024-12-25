import type { FormField } from "formbuilder-core";

export function findFieldIndex(formFields: FormField[][], id: string) {
	for (let i = 0; i < formFields.length; i++) {
		const index = formFields[i].findIndex((field) => field.id === id);
		if (index !== -1) return { row: i, col: index };
	}
	return null;
}
