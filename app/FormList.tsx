import React from "react"
import { useFormStore } from "@/stores/form-store"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function FormList(props: {}) {
  const { forms } = useFormStore()
  return (
    <ul className="flex flex-col gap-2 mt-20">
      {forms.map((f) => (
        <li>
          <Button>
            <p>{f.name}</p>
          </Button>
        </li>
      ))}
      <Button>
        <PlusIcon />
        New Form
      </Button>
    </ul>
  )
}
