import { FormSchema, FormField } from "@/schema"
import { parseSchema } from "json-schema-to-zod"

export function formToZodSchema(form: FormSchema) {
  const jsonSchema = formToJsonSchema(form)
  const formSchema = jsonSchemaToZod(jsonSchema)
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

function formToJsonSchema(form: FormSchema) {
  const definitions: { [key: string]: any } = {}
  const properties: { [key: string]: any } = {}
  const required: string[] = []

  form.fields.forEach((field: FormField) => {
    let property: any
    if (field.kind === "string")
      property = {
        type: field.kind,
        minLength: field.validation?.min,
        maxLength: field.validation?.max,
      }
    else if (field.kind === "number")
      property = {
        type: field.kind,
        minimum: field.validation?.min,
        maximum: field.validation?.max,
      }
    else if (field.kind === "boolean")
      property = {
        type: field.kind,
      }
    else if (field.kind === "date")
      property = {
        type: "string",
        format: "date-time",
      }
    else if (field.kind === "enum")
      property = {
        type: "string",
      }

    if (field.kind === "string" && field.validation?.format) {
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

  // const schema = {
  //   // $ref: `#/definitions/${form.id}`,
  //   definitions,
  //   $schema: "http://json-schema.org/draft-07/schema#",
  // }

  return definitions.form
}
