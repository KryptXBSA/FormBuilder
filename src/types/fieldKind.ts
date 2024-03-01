export const fieldKinds = [
  "string",
  "number",
  "boolean",
  "date",
  "enum",
] as const

// Define a union type for field types
export type FieldKind = (typeof fieldKinds)[number]
