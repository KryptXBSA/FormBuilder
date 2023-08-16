"use client"

import { useRef, useState } from "react"
import { FormBuilder, formBuilderSchema } from "@/schema"
import {
  newBooleanField,
  newDateField,
  newEnumField,
  newNumberField,
  newStringField,
} from "@/utils/newField"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ArrowDown,
  ArrowDownIcon,
  ArrowUpIcon,
  Check,
  ChevronsUpDown,
  Trash,
  TrashIcon,
} from "lucide-react"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
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
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const fieldTypes = [
  "string",
  "number",
  "boolean",
  "date",
  "enum",
] as const

export type FieldTypes = "string" | "number" | "boolean" | "date" | "enum"
const types: { value: FieldTypes; label: string }[] = [
  {
    value: "string",
    label: "String",
  },
  {
    value: "number",
    label: "Number",
  },
  {
    value: "boolean",
    label: "Boolean",
  },
  {
    value: "enum",
    label: "Enum",
  },
  {
    value: "date",
    label: "Date",
  },
]

export function FormBuilder() {
  const form = useForm<FormBuilder>({
    resolver: zodResolver(formBuilderSchema),
    defaultValues: {
      name: "MyForm",
      fields: [],
    },
  })
  form.watch()

  const { fields, append, update, prepend, remove, swap, move, insert } =
    useFieldArray({
      control: form.control, // control props comes from useForm (optional: if you are using FormContext)
      name: "fields", // unique name for your Field Array
    })

  const [moreInfo, setMoreInfo] = useState<string[]>([])
  function toggleMoreInfo(id: string) {
    if (moreInfo.find((s) => s === id))
      setMoreInfo(moreInfo.filter((s) => s !== id))
    else setMoreInfo(moreInfo.concat([id]))
  }
  function onSubmit(values: z.infer<typeof formBuilderSchema>) {
    console.log("values", values)
  }
  function MoreInfo({
    id,
    type,
    idx,
  }: {
    id: string
    idx: number
    type: FieldTypes
  }) {
    function EnumValues() {
      const [inputRefs, setInputRefs] = useState<
        Array<{
          labelRef: React.RefObject<HTMLInputElement>
          valueRef: React.RefObject<HTMLInputElement>
        }>
      >(
        fields[idx].enumValues?.map(() => ({
          labelRef: useRef<HTMLInputElement>(null),
          valueRef: useRef<HTMLInputElement>(null),
        })) || []
      )
      return (
        <div className="flex w-1/4 flex-col items-start gap-2">
          <div className="flex flex-col">
            {fields[idx].enumValues?.map((f, idxx: number) => {
              const inputRef = inputRefs[idxx]
              return (
                <div className="flex items-center gap-1" key={idxx}>
                  <Input
                    ref={inputRef.labelRef}
                    type="text"
                    defaultValue={f.label}
                  />
                  <p className="text-2xl">:</p>
                  <Input
                    ref={inputRef.valueRef}
                    type="text"
                    defaultValue={f.value}
                  />
                </div>
              )
            })}
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                const newEnumValues: { label: string; value: string }[] =
                  inputRefs.map((inputRef) => ({
                    label: inputRef.labelRef.current?.value || "",
                    value: inputRef.valueRef.current?.value || "",
                  }))

                update(idx, {
                  ...form.getValues("fields")[idx],
                  enumValues: newEnumValues,
                })
              }}
            >
              Save
            </Button>
            <Button
              onClick={() => {
                let enumValues: any[] = []
                let arr = form.getValues().fields[idx].enumValues || []
                enumValues = enumValues.concat(arr)
                enumValues.push({ label: "label", value: "value" })

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
      } else if (type === "enum") {
        return (
          <TableRow className="border-b">
            <TableCell
              style={{ display: "table-cell" }}
              colSpan={9}
              className="flex flex-col gap-2"
            >
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

              <EnumValues />
            </TableCell>
          </TableRow>
        )
      } else {
        return <TableRow className="border-b">&nbsp;</TableRow>
      }
    } else return <></>
  }
  return (
    <div className="flex">
      <Form {...form}>
        <form className="w-5/6" onSubmit={form.handleSubmit(onSubmit)}>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Move</TableHead>
                <TableHead>Label</TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Required</TableHead>
                <TableHead>Delete</TableHead>
                <TableHead>More</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fields.map((field, idx) => (
                <>
                  <TableRow key={field.key}>
                    <TableCell>
                      <ArrowUpIcon onClick={() => move(idx, idx - 1)} />
                      <ArrowDownIcon onClick={() => move(idx, idx + 1)} />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`fields.${idx}.label`}
                        render={({ field }) => (
                          <FormItem className="py-1">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`fields.${idx}.key`}
                        render={({ field }) => (
                          <FormItem className="py-1">
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <Type idx={idx} />
                    </TableCell>
                    <TableCell className="p-4  text-center">
                      <FormField
                        control={form.control}
                        name={`fields.${idx}.required`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>
                    <TableCell className="text-center">
                      <Trash onClick={() => remove(idx)} />
                    </TableCell>
                    <TableCell>
                      <ChevronsUpDown
                        onClick={() => toggleMoreInfo(field.key)}
                      />
                    </TableCell>
                  </TableRow>
                  <MoreInfo idx={idx} type={field.type} id={field.key} />
                </>
              ))}
            </TableBody>
          </Table>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <div className="flex flex-col  gap-2">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Add Field
        </h3>
        <Button onClick={() => append(newStringField())}>String</Button>
        <Button onClick={() => append(newNumberField())}>Number</Button>
        <Button onClick={() => append(newBooleanField())}>Boolean</Button>
        <Button onClick={() => append(newEnumField())}>Enum</Button>
        <Button onClick={() => append(newDateField())}>Date</Button>
      </div>
    </div>
  )
  function Type({ idx }: { idx: number }) {
    return (
      <FormField
        control={form.control}
        name={`fields.${idx}.type`}
        render={({ field }) => (
          <FormItem className="flex flex-col">
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
                      ? types.find((item) => item.value === field.value)?.label
                      : "Select item"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search n12nnnnn..." />
                  <CommandEmpty>No n12nnnnn found.</CommandEmpty>
                  <CommandGroup>
                    {types.map((item) => (
                      <CommandItem
                        value={item.label}
                        key={item.value}
                        onSelect={() => {
                          form.setValue(`fields.${idx}.type`, item.value)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            item.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
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
    )
  }
}
