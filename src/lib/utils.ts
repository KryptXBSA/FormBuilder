import { FormField } from "@/schema"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRequiredComponents(fields: FormField[]) {
  let requiredComponents = []
  for (let f of fields) {
    if (f.kind === "string") requiredComponents.push("input")
    if (f.kind === "number") requiredComponents.push("input")
    if (f.kind === "date") requiredComponents.push("date")
    if (f.kind === "boolean") requiredComponents.push("switch")
    if (f.style === "radio") requiredComponents.push("radio-group")
    if (f.style === "select") requiredComponents.push("select")
    if (f.style === "combobox") requiredComponents.push("popover", "command")
    if (f.type === "textarea") requiredComponents.push("textarea")
  }
  requiredComponents = requiredComponents.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
  return requiredComponents
}
