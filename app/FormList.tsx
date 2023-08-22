import React from "react"
import { useFormStore } from "@/stores/form-store"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function FormList(props: {}) {
  const { forms, newForm, selectForm } = useFormStore()
  return (
    <ul className="flex flex-col gap-2 mt-20">
      {forms.map((f, idx) => (
        <li key={idx}>
          <Button onClick={() => selectForm(idx)}>
            <p>{f.name}</p>
          </Button>
        </li>
      ))}
      <Button onClick={() => newForm({ name: "My Form", fields: [] })}>
        {/* <PlusIcon /> */}
        New Form
      </Button>
    </ul>
  )
}
