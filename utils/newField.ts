import { FormField } from "@/schema"

export function newStringField(): FormField {
  return {
    key: "key" + randNum(),
    label: "My string",
    desc: "My string",
    placeholder: "My string",
    type: "string",
    defaultValue: "string",
    required: true,
    validation: {
      min: 1,
      max: 255,
    },
  }
}
export function newNumberField(): FormField {
  return {
    key: "key" + randNum(),
    label: "My number",
    desc: "My string",
    placeholder: "My string",
    type: "number",
    enumName: "myEnum",
    enumValues: [],
    defaultValue: 1,
    required: true,
    validation: {
      min: 1,
      max: 9999999999,
    },
  }
}
export function newBooleanField(): FormField {
  return {
    key: "key" + randNum(),
    label: "My bool",
    desc: "My string",
    placeholder: "My string",
    type: "boolean",
    defaultValue: true,
    required: true,
  }
}
export function newEnumField(): FormField {
  return {
    key: "key" + randNum(),
    label: "My enum",
    desc: "My string",
    placeholder: "My string",
    type: "enum",
    required: true,
  }
}
export function newDateField(): FormField {
  return {
    key: "key" + randNum(),
    label: "My date",
    desc: "My string",
    placeholder: "My string",
    type: "date",
    required: true,
  }
}
function randNum() {
  const min = 1
  const max = 999
  return Math.floor(Math.random() * (max - min + 1)) + min
}
