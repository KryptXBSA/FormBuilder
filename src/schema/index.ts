import { z } from "zod"

import { fieldKinds } from "@/types/fieldKind"

const fieldSchema = z.object({
  id: z.string(),
  label: z.string().min(1).max(50),
  desc: z.string().min(1).max(50).optional(),
  placeholder: z.string().min(1).max(50).optional(),
  key: z.string().min(1).max(50),
  kind: z.enum(fieldKinds),
  required: z.boolean(),
  defaultValue: z.union([z.string(), z.number(), z.boolean()]).optional(),
  style: z.enum(["radio", "select", "combobox"]).optional(),
  enumValues: z
    .array(z.object({ label: z.string(), value: z.string(), id: z.string() }))
    .optional(),
  enumName: z.string().min(1).max(50).optional(),
  validation: z
    .object({
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
