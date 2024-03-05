import { EnumValue, FormSchema } from "@/schema"
import { useFieldArray, useFormContext } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function EnumValues({ idx }: { idx: number }) {
  const form = useFormContext<FormSchema>()
  const { fields, update } = useFieldArray({
    control: form.control,
    name: "fields",
  })

  function deleteCurrentEnum(idx: number, idxx: number) {
    let enumValues = fields[idx].enumValues?.filter(
      (_val, index) => index !== idxx
    )
    console.log("enumvalues", enumValues)

    update(idx, {
      ...form.getValues("fields")[idx],
      enumValues,
    })
  }

  const newEnumValue = () => {
    let enumValues: EnumValue[] = []
    let arr = form.getValues().fields[idx].enumValues || []
    enumValues = enumValues.concat(arr)
    enumValues.push({
      label: "label",
      value: "value",
      id: Date.now().toString(),
    })

    update(idx, {
      ...form.getValues("fields")[idx],
      enumValues,
    })
  }

  return (
    <div className="flex w-1/4 flex-col items-start gap-2">
      <div className="flex flex-col">
        {fields[idx].enumValues?.map((f, idxx: number) => {
          return (
            <div className="flex items-center gap-1" key={f.id}>
              <FormField
                control={form.control}
                name={`fields.${idx}.enumValues.${idxx}.label`}
                render={({ field }) => (
                  <FormItem className="py-1">
                    <FormLabel>Label</FormLabel>
                    <FormControl>
                      <Input className="w-32" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`fields.${idx}.enumValues.${idxx}.value`}
                render={({ field }) => (
                  <FormItem className="py-1">
                    <FormLabel>Value</FormLabel>
                    <FormControl>
                      <Input className="w-32" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                onClick={() => deleteCurrentEnum(idx, idxx)}
                variant={"destructive"}
                className="ml-2 mt-7"
              >
                Delete
              </Button>
            </div>
          )
        })}
      </div>
      <div className="flex gap-4">
        <Button onClick={newEnumValue}>New</Button>
      </div>
    </div>
  )
}
