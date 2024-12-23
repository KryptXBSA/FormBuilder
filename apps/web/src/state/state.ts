"use client";
import { mockFields } from "@/mock/mockFields";
import type { FormSchema, FormField } from "formbuilder-core";
import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/react";
import { randNum } from "@/utils/randNum";
import { findFieldIndex } from "@/utils/findFieldIndex";

export type State = {
	selectedForm: number;
	temp_items: string[][];
	forms: FormSchema[];
	renderContent: boolean;
};

export const $appState = persistentAtom<State>(
	"state",
	{
		temp_items: [["0", "98"], ["1", "33"], ["2"], ["3"], ["4"], ["5"], ["6"]],
		renderContent: false,
		selectedForm: 0,
		forms: [
			{
				id: 1,
				settings: { importAlias: "a", mode: "a" },
				name: "My Form",
				fields: mockFields,
				framework: "react",
			},
		],
	},
	{
		encode: JSON.stringify,
		decode: JSON.parse,
	},
);

export function useAppState() {
	return {
		temp_items: useStore($appState).temp_items,
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

function updateFormFields(p: FormField[]) {
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
		temp_items: [],
		renderContent: true,
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

export function addItem(
	id: string,
	direction: "up" | "down" | "left" | "right",
) {
	const temp_items = $appState.get().temp_items;
	const index = findFieldIndex(temp_items, id);
	console.log("index", index);
	if (!index) return;

	const newItem = randNum().toString();
	const { row, col } = index;
	const newTempItems = [...temp_items];

	switch (direction) {
		case "up":
			if (row === 0) {
				newTempItems.unshift([newItem]);
			} else {
				newTempItems[row - 1].push(newItem);
			}
			break;
		case "down":
			if (row === newTempItems.length - 1) {
				newTempItems.push([newItem]);
			} else {
				newTempItems[row + 1].push(newItem);
			}
			break;
		// TODO: Left is broken
		case "left":
			if (col === 0) {
				newTempItems[row].unshift(newItem);
			} else {
				newTempItems[row].splice(col - 1, 0, newItem);
			}
			break;
		case "right":
			newTempItems[row].splice(col + 1, 0, newItem);
			break;
	}

	$appState.set({
		...$appState.get(),
		temp_items: newTempItems,
	});
}

export function removeItem(id: string) {
	const temp_items = $appState.get().temp_items;
	const index = findFieldIndex(temp_items, id);
	if (!index) return;

	const { row, col } = index;
	const newTempItems = [...temp_items];

	// Remove the item at the found index
	newTempItems[row].splice(col, 1);

	// Check if the array at the index is empty and remove it if so
	if (newTempItems[row].length === 0) {
		newTempItems.splice(row, 1);
	}

	$appState.set({
		...$appState.get(),
		temp_items: newTempItems,
	});
}
