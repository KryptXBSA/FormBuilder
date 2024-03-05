import { FormSchema } from "@/schema"
import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { TableCell, TableRow } from "@/components/ui/table"

import { FieldKindProps } from "./FieldKindProps"

export function StringFieldKind({ idx }: FieldKindProps) {
  const form = useFormContext<FormSchema>()
  return (
    <TableRow className="border-b">
      <td></td>
      <TableCell
        style={{ display: "table-cell" }}
        colSpan={9}
        className="flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name={`fields.${idx}.desc`}
          render={({ field }) => (
            <FormItem className="py-1">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input className="w-1/2" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`fields.${idx}.placeholder`}
          render={({ field }) => (
            <FormItem className="py-1">
              <FormLabel>Placeholder</FormLabel>
              <FormControl>
                <Input className="w-1/2" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`fields.${idx}.validation.format`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Format</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value || "string"}
                  className="flex gap-4"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="email" />
                    </FormControl>
                    <FormLabel className="font-normal">Email</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="string" />
                    </FormControl>
                    <FormLabel className="font-normal">String</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name={`fields.${idx}.validation.min`}
            render={({ field }) => (
              <FormItem className="py-1">
                <FormLabel>Min</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`fields.${idx}.validation.max`}
            render={({ field }) => (
              <FormItem className="py-1">
                <FormLabel>Max</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </TableCell>
    </TableRow>
  )
}
