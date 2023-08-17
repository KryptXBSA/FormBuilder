import { FormField } from "@/schema"

export function newStringField(): FormField {
  return {
    key: "key" + randNum(),
    label: "My string",
    desc: "Description",
    placeholder: "Placeholder",
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
    desc: "Description",
    placeholder: "Placeholder",
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
    desc: "Description",
    placeholder: "Placeholder",
    type: "boolean",
    defaultValue: true,
    required: true,
  }
}
export function newEnumField(): FormField {
  return {
    key: "key" + randNum(),
    label: "My enum",
    desc: "Description",
    placeholder: "Placeholder",
    type: "enum",
    style:"combobox",
    enumName:"myEnum"+randNum(),
    enumValues:[{"label":"label",value:"value"}],
    required: true,
  }
}
export function newDateField(): FormField {
  return {
    key: "key" + randNum(),
    label: "My date",
    desc: "Description",
    placeholder: "Placeholder",
    type: "date",
    required: true,
  }
}
function randNum() {
  const min = 1
  const max = 999
  return Math.floor(Math.random() * (max - min + 1)) + min
}
