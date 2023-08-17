"use client"

import { useEffect, useState } from "react"
import { generateCode } from "@/codegen/generate-code"
import { Form as F, formBuilderSchema } from "@/schema"
import { checkDuplicates } from "@/utils/checkDuplicates"
import {
  newBooleanField,
  newDateField,
  newEnumField,
  newNumberField,
  newStringField,
} from "@/utils/newField"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Check,
  ChevronsUpDown,
  Trash,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

import { CopyCodeDialog } from "./CopyCodeDialog"
import { mockFields } from "./mockFields"

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
const style: { value: "combobox" | "select" | "radio"; label: string }[] = [
  {
    value: "combobox",
    label: "ComboBox",
  },
  {
    value: "select",
    label: "Select",
  },
  {
    value: "radio",
    label: "Radio",
  },
]

export function FormBuilder() {
  const { toast } = useToast()
  const form = useForm<F>({
    resolver: zodResolver(formBuilderSchema),
    defaultValues: {
      name: "MyForm",
      fields: [],
    },
  })
  form.watch()
  const [setInitial, setSetInitial] = useState(false)
  useEffect(() => {
    if (!setInitial) {
      form.setValue("fields", mockFields)
      setSetInitial(true)
    }
  }, [])

  const { fields, append, update, prepend, remove, swap, move, insert } =
    useFieldArray({
      control: form.control,
      name: "fields",
    })

  function onSubmit(values: z.infer<typeof formBuilderSchema>) {
    console.log("values", values)
  }

  const [moreInfo, setMoreInfo] = useState<string[]>([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [generatedCode, setGeneratedCode] = useState("")

  function showCodeDialog() {
    if (form.getValues("fields").length === 0)
      toast({
        variant: "destructive",
        title: "Form has 0 Fields",
      })
    const result = checkDuplicates(form.getValues("fields"))
    if (result.hasDuplicates) {
      if (result.duplicates.key.length > 0)
        toast({
          variant: "destructive",
          title: "Duplicate Keys found",
          description: result.duplicates.key.toString(),
        })
      if (result.duplicates.enum.length > 0)
        toast({
          variant: "destructive",
          title: "Duplicate Enum Names found",
          description: result.duplicates.enum.toString(),
        })
    } else {
      setDialogOpen(true)
      const code = generateCode(form.getValues())
      setGeneratedCode(code)
    }
  }

  function toggleMoreInfo(id: string) {
    if (moreInfo.find((s) => s === id))
      setMoreInfo(moreInfo.filter((s) => s !== id))
    else setMoreInfo(moreInfo.concat([id]))
  }

  return (
    <div className="flex gap-4">
      <CopyCodeDialog
        code={generatedCode}
        setOpen={setDialogOpen}
        open={dialogOpen}
      />
      <Form {...form}>
        <form className="w-5/6" onSubmit={form.handleSubmit(onSubmit)}>
          <Table>
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
              {form.getValues("fields").map((field, idx) => (
                <>
                  <TableRow key={field.id}>
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
                  {/* using  component causes inputs to lose focus */}
                  {/* <MoreInfo idx={idx} type={field.type} id={field.key} /> */}
                  {MoreInfo({ idx, type: field.type, id: field.key })}
                </>
              ))}
            </TableBody>
          </Table>
          {/* <Button onClick={()=>console.log("aaa",form.getValues())} type="submit">Submit</Button> */}
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
        <Button onClick={showCodeDialog}>Generate Code</Button>
      </div>
    </div>
  )
  function MoreInfo({
    id,
    type,
    idx,
  }: {
    id: string
    idx: number
    type: FieldTypes
  }) {
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
            <TableCell
              style={{ display: "table-cell" }}
              colSpan={9}
              className=""
            >
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
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
      return (
        <div className="flex w-1/4 flex-col items-start gap-2">
          <div className="flex flex-col">
            {fields[idx].enumValues?.map((f, idxx: number) => {
              return (
                <div className="flex items-center gap-1" key={idxx}>
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
  }
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
                  <CommandInput placeholder="Search types..." />
                  <CommandEmpty>No type found.</CommandEmpty>
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
