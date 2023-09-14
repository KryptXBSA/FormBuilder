import { Form, FormField } from "@/schema"
import { StateCreator, create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { mockFields } from "@/app/mockFields"

type Store = {
  selectedForm: number
  selectForm: (a: number) => void
  deleteForm: (a: number) => void
  forms: Form[]
  updateFormName: (a: string) => void
  updateFormFields: (a: FormField[]) => void
  newForm: (a: Form) => void
}

const myMiddlewares = (f: StateCreator<Store>) => persist(f, { name: "state" })

// const myMiddlewares = (f: StateCreator<Store>) =>
// devtools(persist(f, { name: 'bearStore' }))
export const useFormStore = create<Store>()(
  myMiddlewares((set) => ({
    selectedForm: 0,
    selectForm: (idx) =>
      set((state) => {
        // localStorage.setItem("forms", JSON.stringify(state.forms))
        return { selectedForm: idx }
      }),
    deleteForm: (idx) =>
      set((state) => {
        if (state.forms.length === 1) return state
        return {
          forms: state.forms.filter((_f, id) => id !== idx),
          selectedForm: 0,
        }
      }),
    //@ts-ignore
    forms:
      // (JSON.parse(localStorage.getItem("bearStore")!)
      //   ?.state as Form[]) ??
      [{ name: "My Form", fields: mockFields }],
    updateFormFields: (fields) =>
      set((state) => {
        let newForms = state.forms
        newForms[state.selectedForm].fields = fields
        return { forms: newForms }
      }),
    updateFormName: (name) =>
      set((state) => {
        let newForms = state.forms
        newForms[state.selectedForm].name = name
        return { forms: newForms }
      }),
    newForm: (form) =>
      set((state) => {
        return { ...state, forms: state.forms.concat([form]) }
      }),
    // fo: () => set((state) => ({ count: state.count + 1 })),
  }))
)
