import React from "react"
import { useFormStore } from "@/stores/form-store"
import { FiTrash,FiPlus } from "react-icons/fi"

import { Button } from "@/components/ui/button"
import { useAppState } from "@/state/state"

export function FormList(props: {}) {
  const { forms, newForm, selectForm, deleteForm } = useAppState()
  return (
    <ul className="flex flex-col gap-2 mt-20">
      {forms?.map((f, idx) => (
        <li className="flex gap-2" key={idx}>
          <Button className="w-32" onClick={() => selectForm(idx)}>
            <p>{f.name}</p>
          </Button>
          <Button variant="ghost" className="hover:bg-red-500">
            <FiTrash size={24} onClick={() => deleteForm(idx)} />
          </Button>
        </li>
      ))}
      <Button
        className="w-32"
        onClick={() => newForm({ name: "My Form", fields: [] })}
      >
        <FiPlus size={22} />
        New Form
      </Button>
    </ul>
  )
}
