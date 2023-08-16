import { Form, FormField } from "@/schema"
import { parseSchema } from "json-schema-to-zod"
export function formToZodSchema(form: Form) {
  const jsonSchema = formToJsonSchema(form)
  const formSchema = jsonSchemaToZod(jsonSchema)
  console.log("azzzzzzzzzzzzzzz", formSchema)
  return formSchema
}

function jsonSchemaToZod(obj: any) {
  let schema = parseSchema(obj)
  const catchallPattern = /\.catchall\(z\.never\(\)\)/
  schema = schema.replace(catchallPattern, "")
  schema = schema.replace(".number()", ".coerce.number()")
  schema = schema.replace(".string().datetime()", ".date()")
  return schema
}

function formToJsonSchema(form: Form) {
  const definitions: { [key: string]: any } = {}
  const properties: { [key: string]: any } = {}
  const required: string[] = []

  form.fields.forEach((field: FormField) => {
    let property: any
    if (field.type === "string")
      property = {
        type: field.type,
        minLength: field.validation?.min,
        maxLength: field.validation?.max,
      }
    else if (field.type === "number")
      property = {
        type: field.type,
        minimum: field.validation?.min,
        maximum: field.validation?.max,
      }
    else if (field.type === "boolean")
      property = {
        type: field.type,
      }
    else if (field.type === "date")
      property = {
        type: "string",
        format: "date-time",
      }
    else if (field.type === "enum")
      property = {
        type: "string",
      }

    if (field.type === "string" && field.validation?.format) {
      property.format = field.validation.format
    }
    properties[field.key] = property
    if (field.required) {
      required.push(field.key)
    }
  })

  definitions["form"] = {
    type: "object",
    properties,
    required,
    additionalProperties: false,
    // description: "My neat object schema",
  }

  const schema = {
    // $ref: `#/definitions/${form.id}`,
    definitions,
    $schema: "http://json-schema.org/draft-07/schema#",
  }

  return definitions.form
}
