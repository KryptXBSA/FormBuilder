import { Form, FormField } from "@/schema"
import { $appState } from "@/state/state"
import Handlebars from "handlebars"

import { getRequiredComponents } from "@/lib/utils"

import { imports } from "./imports"
import {
  booleanInputTemplate,
  comboboxInputTemplate,
  dateInputTemplate,
  mainTemplate,
  numberInputTemplate,
  radioInputTemplate,
  selectInputTemplate,
  stringInputTemplate,
} from "./templates"
import { formToZodSchema } from "./utils"

Handlebars.registerPartial("numberInput", numberInputTemplate)
Handlebars.registerPartial("dateInput", dateInputTemplate)
Handlebars.registerPartial("booleanInput", booleanInputTemplate)
Handlebars.registerPartial("stringInput", stringInputTemplate)
Handlebars.registerPartial("radioInput", radioInputTemplate)
Handlebars.registerPartial("selectInput", selectInputTemplate)
Handlebars.registerPartial("comboboxInput", comboboxInputTemplate)

Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
  //@ts-ignore
  return arg1 == arg2 ? options.fn(this) : options.inverse(this)
})
Handlebars.registerHelper("ifNotEquals", function (arg1, arg2, options) {
  //@ts-ignore
  return arg1 != arg2 ? options.fn(this) : options.inverse(this)
})

Handlebars.registerHelper("defaultValues", function (fields) {
  let output = "{\n"
  fields.forEach((field: FormField) => {
    if (field.type === "string") {
      output += `${field.key}: "${field.defaultValue || ""}",\n`
    } else if (field.type === "number") {
      output += `${field.key}: ${field.defaultValue || 1},\n`
    }
  })
  output += "}"
  return new Handlebars.SafeString(output)
})

const main = Handlebars.compile(mainTemplate)

export function generateCode(form: Form) {
  const zodFormSchema = formToZodSchema(form)
  const generatedCode =
    generateImports(
      $appState.get().forms[$appState.get().selectedForm].fields
    ) + main({ ...form, zodFormSchema })
  return generatedCode
}
function generateImports(fields: FormField[]) {
  let initialImports = `
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
`
  let switchImport = `
import { Switch } from "@/components/ui/switch"
`
  let dateImport = `
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
`
  let selectImport = `
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
`
  let comboboxImport = `
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
`
  let radioImport = `
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
`

  let imports = initialImports
  for (let i of getRequiredComponents(fields)) {
    if (i === "date") imports += dateImport
    if (i === "boolean") imports += switchImport
    if (i === "radio-group") imports += radioImport
    if (i === "select") imports += selectImport
    if (i === "popover") imports += comboboxImport
    // if (i === "command") imports += comboboxImport
  }
  return imports
}
