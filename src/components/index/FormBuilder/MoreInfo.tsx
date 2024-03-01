"use client"

import { FormSchema } from "@/schema"
import { UseFormReturn, useFieldArray, useFormContext } from "react-hook-form"
import { HiChevronUpDown } from "react-icons/hi2"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { TableCell, TableRow } from "@/components/ui/table"

import {  style } from "./FormBuilder"
import { FieldKind } from "@/types/fieldKind"

interface MoreInfoProps {
  id: string
  idx: number
  type: FieldKind
  moreInfo: string[]
}

export function MoreInfo({ id, type, idx, moreInfo }: MoreInfoProps) {
  const form = useFormContext<FormSchema>()

  const { fields, update } = useFieldArray({
    control: form.control,
    name: "fields",
  })
  if (moreInfo.find((s) => s === id)) {
    if (type === "string") {
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
    } else if (type === "number") {
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
    } else if (type === "boolean") {
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
          </TableCell>
        </TableRow>
      )
    } else if (type === "enum") {
      return (
        <TableRow className="border-b">
          <TableCell style={{ display: "table-cell" }} colSpan={9} className="">
            <div className="flex gap-5">
              <div>
                <FormField
                  control={form.control}
                  name={`fields.${idx}.desc`}
                  render={({ field }) => (
                    <FormItem className="py-1">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input className="w-full" {...field} />
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
                        <Input className="w-full" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`fields.${idx}.style`}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Style</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-[200px] justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? style.find(
                                    (item) => item.value === field.value
                                  )?.label
                                : "Select item"}
                              <HiChevronUpDown
                                size={22}
                                className="ml-2 h-4 w-4 shrink-0 opacity-50"
                              />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search types..." />
                            <CommandEmpty>No type found.</CommandEmpty>
                            <CommandGroup>
                              {style.map((item) => (
                                <CommandItem
                                  value={item.label}
                                  key={item.value}
                                  onSelect={() => {
                                    form.setValue(
                                      `fields.${idx}.style`,
                                      item.value
                                    )
                                  }}
                                >
                                  {/* <Check */}
                                  {/*   className={cn( */}
                                  {/*     "mr-2 h-4 w-4", */}
                                  {/*     item.value === field.value */}
                                  {/*       ? "opacity-100" */}
                                  {/*       : "opacity-0" */}
                                  {/*   )} */}
                                  {/* /> */}
                                  {item.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name={`fields.${idx}.enumName`}
                  render={({ field }) => (
                    <FormItem className="py-1">
                      <FormLabel>Enum Name</FormLabel>
                      <FormControl>
                        <Input className="w-40" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="text-lg">Enum Values</p>
                {EnumValues()}
              </div>
            </div>
          </TableCell>
        </TableRow>
      )
    } else if (type === "date") {
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
          </TableCell>
        </TableRow>
      )
    } else {
      return <TableRow className="border-b">&nbsp;</TableRow>
    }
  } else return <></>

  function EnumValues() {
    function deleteCurrentEnum(idx: number, idxx: number) {
      let enumValues = fields[idx].enumValues?.filter(
        (val, index) => index !== idxx
      )
      console.log("enumvalues", enumValues)
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
          <Button
            onClick={() => {
              let enumValues: any[] = []
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
            }}
          >
            New
          </Button>
        </div>
      </div>
    )
  }
}
