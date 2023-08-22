import { Form } from "@/schema"
import { create } from "zustand"

import { mockFields } from "@/app/mockFields"

type Store = {
  selectedForm: number
  forms: Form[]
  updateFormName: (a: string) => void
}

export const useFormStore = create<Store>()((set) => ({
  selectedForm: 0,
  forms: [{ name: "My Form", fields: mockFields }],
  updateFormName: (name) =>
    set((state) => {
      let newForms = state.forms
      newForms[state.selectedForm].name = name
      return { ...state, forms: newForms }
    }),
  // fo: () => set((state) => ({ count: state.count + 1 })),
}))
