import { Form, FormField } from "@/schema"
import { create } from "zustand"

import { mockFields } from "@/app/mockFields"

type Store = {
  selectedForm: number
  selectForm: (a: number) => void
  forms: Form[]
  updateFormName: (a: string) => void
  updateFormFields: (a: FormField[]) => void
  newForm: (a: Form) => void
}

export const useFormStore = create<Store>()((set) => ({
  selectedForm: 0,
  selectForm: (idx) => set((state) => ({ selectedForm: idx })),
  forms: [{ name: "My Form", fields: mockFields }],
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
