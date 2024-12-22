"use client";
import { mockFields } from "@/mock/mockFields";
import type { FormSchema, FormField } from "formbuilder-core";
import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/react";

export type State = {
	selectedForm: number;
	forms: FormSchema[];
	renderContent: boolean;
};

export const $appState = persistentAtom<State>(
	"state",
	{
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
