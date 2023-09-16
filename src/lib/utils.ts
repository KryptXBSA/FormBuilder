import { FormField } from "@/schema"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRequiredComponents(fields: FormField[]) {
  let requiredComponents = []
  for (let f of fields) {
    if (f.type === "string") requiredComponents.push("input")
    if (f.type === "number") requiredComponents.push("input")
    if (f.type === "date") requiredComponents.push("date")
    if (f.type === "boolean") requiredComponents.push("switch")
    if (f.style === "radio") requiredComponents.push("radio-group")
    if (f.style === "select") requiredComponents.push("select")
    if (f.style === "combobox") requiredComponents.push("popover", "command")
  }
  requiredComponents = requiredComponents.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
  return requiredComponents
}
