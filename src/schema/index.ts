import { z } from "zod"

export const fieldKind = [
  "string",
  "number",
  "boolean",
  "date",
  "enum",
] as const
export type FieldKind = (typeof fieldKind)[number]

const enumValueSchema = z.object({
  label: z.string(),
  value: z.string(),
  id: z.string(),
})
export type EnumValue = z.infer<typeof enumValueSchema>

const enumStyleValues = ["radio", "select", "combobox"] as const
export type EnumStyleValues = (typeof enumStyleValues)[number]

const fieldSchema = z.object({
  id: z.string(),
  label: z.string().min(1).max(50),
  desc: z.string().min(1).max(50).optional(),
  placeholder: z.string().min(1).max(50).optional(),
  key: z.string().min(1).max(50),
  kind: z.enum(fieldKind),
  required: z.boolean(),
  defaultValue: z.union([z.string(), z.number(), z.boolean()]).optional(),
  style: z.enum(enumStyleValues).optional(),
  enumValues: z.array(enumValueSchema).optional(),
  enumName: z.string().min(1).max(50).optional(),
  validation: z
    .object({
      // TODO add format values for string or ALL
      format: z.enum(["email", "string"]).optional(),
      min: z.coerce.number().min(1),
      max: z.coerce.number().max(99999999999),
    })
    .optional(),
})

export const formBuilderSchema = z.object({
  name: z.string().min(1).max(50),
  fields: z.array(fieldSchema),
})

export type FormSchema = z.infer<typeof formBuilderSchema>
export type FormField = z.infer<typeof fieldSchema>
