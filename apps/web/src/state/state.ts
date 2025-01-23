"use client";
import {
	type FormSchema,
	type FormField,
	type FormFramework,
	newBooleanField,
	newDateField,
	newEnumField,
	newNumberField,
	newTextField,
	type ChosenField,
} from "formbuilder-core";
import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/react";
import { findFieldIndex } from "@/utils/findFieldIndex";
import { mockForm } from "@/mock/mockForm";
import { newStringField } from "@/utils/newField";
import { LOCALSTORAGE_KEY } from "@/constants";

export type BuilderContent =
	| "fieldSettings"
	| "formSettings"
	| "editor"
	| "preview"
	| "code"
	| null;
type State<F extends FormFramework = FormFramework> = {
	selectedForm: number;
	fieldId: string | null;
	builderContent: BuilderContent;
	packageManager: "npm" | "yarn" | "pnpm" | "bun";
	forms: FormSchema<F>[];
	renderContent: boolean;
	chosenField: ChosenField<F> | null;
};

type MockFormFramework = (typeof mockForm)["framework"];
export const $appState = persistentAtom<State<MockFormFramework>>(
	LOCALSTORAGE_KEY,
	{
		packageManager: "bun",
		renderContent: true,
		chosenField: null,
		fieldId: null,
		builderContent: null,
		selectedForm: 0,
		forms: [mockForm as FormSchema<MockFormFramework>],
	},
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	},
);

export function useAppState() {
	return {
		packageManager: useStore($appState).packageManager,
		chosenField: useStore($appState).chosenField,
		builderContent: useStore($appState).builderContent,
		fieldId: useStore($appState).fieldId,
		renderContent: useStore($appState).renderContent,
		currentForm: useStore($appState).forms[useStore($appState).selectedForm],
		selectedForm: useStore($appState).selectedForm,
		forms: useStore($appState).forms,
		selectForm,
		deleteForm,
		updateField,
		updateFormName,
		updateFormFields,
		newForm,
		setAppState,
		addItem,
		removeItem,
		updateFormSettings,
		updateFormFramework,
	};
}
function setAppState(state: Partial<State>) {
	$appState.set({ ...$appState.get(), ...state });
}
function newForm(f: FormSchema) {
	const currentForms = $appState.get().forms;
	$appState.set({
		...$appState.get(),
		forms: currentForms.concat(f),
	});
}
function updateField<F extends FormFramework>(field: Partial<FormField<F>>) {
	const newForms = $appState.get().forms;

	const { col, row } = findFieldIndex(
		newForms[$appState.get().selectedForm].fields,
		$appState.get().fieldId!,
	)!;
	const fieldData = newForms[$appState.get().selectedForm].fields[row][col];
	// @ts-ignore
	newForms[$appState.get().selectedForm].fields[row][col] = {
		...fieldData,
		...field,
	};

	$appState.set({
		...$appState.get(),
		forms: newForms,
	});
}
function updateFormFields<F extends FormFramework>(fields: FormField<F>[][]) {
	const newForms = $appState.get().forms;
	newForms[$appState.get().selectedForm].fields = fields;
	$appState.set({
		...$appState.get(),
		forms: newForms,
	});
}

function selectForm(selectedForm: number) {
	$appState.set({ ...$appState.get(), selectedForm });
}

function deleteForm(idx: number) {
	if ($appState.get().forms.length === 1) return $appState.get();
	$appState.set({
		...$appState.get(),
		forms: $appState.get().forms.filter((_f, i) => i !== idx),
		selectedForm: 0,
	});
}

function updateFormName(newName: string) {
	const currentForms = $appState.get().forms;
	currentForms[$appState.get().selectedForm].name = newName;
	$appState.set({
		...$appState.get(),
		forms: currentForms,
	});
}
function createNewField<F extends FormFramework>(
	chosenField: ChosenField<F>,
): FormField<F> {
	const currentForm = $appState.get().forms[$appState.get().selectedForm];
	const { noDescription, noPlaceholder } = currentForm.settings;
	// TODO: newField.ts is broken after the new types
	// switch (chosenField.kind) {
	// 	case "text":
	// 		return newStringField();
	// 	case "number":
	// 		return newNumberField();
	// 	case "boolean":
	// 		return newBooleanField();
	// 	case "enum":
	// 		return newEnumField();
	// 	case "date":
	// 		return newDateField();
	// 	case "file":
	// 		return newFile();
	// }
	// Create a base field specific to the framework and kind
	const baseField: Partial<FormField<F>> = {
		id: crypto.randomUUID(),
		label: `New ${chosenField.kind} Field`,
		key: `new_${chosenField.kind}_${Date.now()}`,
		required: false,
		kind: chosenField.kind,
		variant: chosenField.variant,
	};
	if (chosenField.kind === "enum") {
		(baseField as any).enumName = "myEnum";
	}

	// Apply settings
	if (!noDescription) baseField.description = "";
	if (!noPlaceholder) baseField.placeholder = "";

	return baseField as FormField<F>;
}

function addItem(id: string, direction: "up" | "down" | "left" | "right") {
	const currentForms = $appState.get().forms;
	const chosenField = $appState.get().chosenField;
	const currentForm = currentForms[$appState.get().selectedForm];
	const fields = currentForm.fields;
	const index = findFieldIndex(fields, id);

	if (!index) return;
	if (!chosenField) return;

	const newItem = createNewField(chosenField);
	if (!newItem) return;

	const { row, col } = index;
	const newFields = [...fields];

	switch (direction) {
		case "up":
			if (row === 0) {
				newFields.unshift([newItem]);
			} else {
				if (chosenField.kind === "heading") {
					newFields.splice(row, 0, [newItem]);
				} else {
					newFields[row - 1].push(newItem);
				}
			}
			break;
		// TODO: down for the last row is broken
		case "down":
			if (row === newFields.length - 1) {
				newFields.push([newItem]);
			} else {
				if (chosenField.kind === "heading") {
					newFields.splice(row + 1, 0, [newItem]);
				} else {
					newFields[row + 1].push(newItem);
				}
			}
			break;
		// TODO: Left is broken
		case "left":
			if (col === 0) {
				newFields[row].unshift(newItem);
			} else {
				newFields[row].splice(col - 1, 0, newItem);
			}
			break;
		case "right":
			newFields[row].splice(col + 1, 0, newItem);
			break;
	}
	currentForm.fields = newFields;
	$appState.set({
		...$appState.get(),
		renderContent: true,
		chosenField: null,
		forms: currentForms,
	});
}

export function removeItem(id: string) {
	const currentForms = $appState.get().forms;
	const currentForm = currentForms[$appState.get().selectedForm];
	const fields = currentForm.fields;
	const index = findFieldIndex(fields, id);
	if (!index) return;

	const { row, col } = index;
	const newFields = [...fields];

	newFields[row].splice(col, 1);

	if (newFields[row].length === 0) {
		newFields.splice(row, 1);
	}

	currentForm.fields = newFields;
	$appState.set({
		...$appState.get(),
		forms: currentForms,
	});
}

export function updateFormSettings(
	newSettings: Partial<FormSchema["settings"]>,
) {
	const currentForms = $appState.get().forms;
	currentForms[$appState.get().selectedForm].settings = {
		...currentForms[$appState.get().selectedForm].settings,
		...newSettings,
	};
	$appState.set({
		...$appState.get(),
		forms: currentForms,
	});
}

function updateFormFramework(newFramework: FormFramework) {
	const currentForms = $appState.get().forms;
	currentForms[$appState.get().selectedForm].framework = newFramework;
	$appState.set({
		...$appState.get(),
		forms: currentForms,
	});
}
