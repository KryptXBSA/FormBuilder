export * from "./initial";
export * from "./switch";
export * from "./date";
export * from "./select";
export * from "./combobox";
export * from "./radio";
export * from "./textarea";

import type { FormField, FormFramework } from "formbuilder-core";
import {
	initialImports,
	switchImport,
	dateImport,
	selectImport,
	comboboxImport,
	radioImport,
	textareaImport,
} from "./";
import { getRequiredComponents } from "formbuilder-core";

export function generateImports<F extends FormFramework>(framework: FormFramework, fields: FormField<F>[][]) {
	let imports = initialImports;
	for (const i of getRequiredComponents(framework, fields)) {
		if (i === "date") imports += dateImport;
		if (i === "switch") imports += switchImport;
		if (i === "radio-group") imports += radioImport;
		if (i === "select") imports += selectImport;
		if (i === "popover") imports += comboboxImport;
		if (i === "textarea") imports += textareaImport;
	}
	return imports;
}
