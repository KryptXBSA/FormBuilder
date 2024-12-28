"use client";
import {
	type FormSchema,
	type FormField,
	type FormFramework,
	newBooleanField,
	type FieldKind,
	newDateField,
	newTextAreaField,
	newEnumField,
	newNumberField,
	newStringField,
	type FormVariant,
	type ChosenField,
} from "formbuilder-core";
import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/react";
import { findFieldIndex } from "@/utils/findFieldIndex";
import { mockForm } from "@/mock/mockForm";

export type State = {
	selectedForm: number;
	forms: FormSchema[];
	renderContent: boolean;
	chosenField: ChosenField | null;
};

export const $appState = persistentAtom<State>(
	"state",
	{
		renderContent: true,
		chosenField: null,
		selectedForm: 0,
		forms: [mockForm],
	},
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	},
);

export function useAppState() {
	return {
		chosenField: useStore($appState).chosenField,
		renderContent: useStore($appState).renderContent,
		currentForm: useStore($appState).forms[useStore($appState).selectedForm],
		selectedForm: useStore($appState).selectedForm,
		forms: useStore($appState).forms,
		selectForm,
		deleteForm,
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

function updateFormFields(p: FormField[][]) {
	const newForms = $appState.get().forms;
	newForms[$appState.get().selectedForm].fields = p;
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

function createNewField(chosenField: ChosenField): FormField {
	switch (chosenField.kind) {
		case "text":
			return newStringField();
		case "number":
			return newNumberField();
		case "boolean":
			return newBooleanField();
		case "enum":
			return newEnumField();
		case "date":
			return newDateField();
		// case "text":
		// 	return newTextAreaField();
		default:
			return newBooleanField(); // Return undefined if chosenField is not recognized
	}
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
				newFields[row - 1].push(newItem);
			}
			break;
		// TODO: down for the last row is broken
		case "down":
			if (row === newFields.length - 1) {
				newFields.push([newItem]);
			} else {
				newFields[row + 1].push(newItem);
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
