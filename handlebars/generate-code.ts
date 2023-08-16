import { Form, FormField } from "@/schema"
import Handlebars from "handlebars"

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
  const generatedCode = imports + main({ ...form, zodFormSchema })
  console.log("generatedCode", generatedCode)
  return generatedCode
}
