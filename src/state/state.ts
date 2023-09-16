import { Form, FormField } from "@/schema"
import { persistentAtom } from "@nanostores/persistent"
import { useStore } from "@nanostores/react"
import { atom } from "nanostores"

import { mockFields } from "@/app/mockFields"

export type State = {
  selectedForm: number
  forms: Form[]
}

export const $appState = persistentAtom<State>(
  "state",
  { selectedForm: 0, forms: [{ name: "My Form", fields: mockFields }] },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
)

export function useAppState() {
  return {
    selectedForm: useStore($appState).selectedForm,
    forms: useStore($appState).forms,
    selectForm,
    deleteForm,
    updateFormName,
    updateFormFields,
    newForm,
    setAppState,
  }
}
function setAppState(state: State) {
  $appState.set(state)
}

function newForm(f: Form) {
  let currentForms = $appState.get().forms
  $appState.set({
    ...$appState.get(),
    forms: currentForms.concat(f),
  })
}

function updateFormFields(p: FormField[]) {
  let newForms = $appState.get().forms
  newForms[$appState.get().selectedForm].fields = p
  $appState.set({
    ...$appState.get(),
    forms: newForms,
  })
}

function selectForm(selectedForm: number) {
  $appState.set({ ...$appState.get(), selectedForm })
}

function deleteForm(idx: number) {
  if ($appState.get().forms.length === 1) return $appState.get()
  $appState.set({
    forms: $appState.get().forms.filter((_f, i) => i !== idx),
    selectedForm: 0,
  })
}

function updateFormName(newName: string) {
  let currentForms = $appState.get().forms
  currentForms[$appState.get().selectedForm].name = newName
  $appState.set({
    ...$appState.get(),
    forms: currentForms,
  })
}
