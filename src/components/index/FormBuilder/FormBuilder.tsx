"use client"

import { useEffect, useState } from "react"
import { FormSchema, formBuilderSchema } from "@/schema"
import { useAppState } from "@/state/state"
import {
  newBooleanField,
  newDateField,
  newEnumField,
  newNumberField,
  newStringField,
} from "@/utils/newField"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { FiArrowDown, FiArrowUp, FiTrash } from "react-icons/fi"
import { HiChevronUpDown } from "react-icons/hi2"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { GenerateCodeDialog } from "./CopyCodeDialog"
import { MoreInfo } from "./MoreInfo"
import { FieldTypeComboBox } from "./Type"

export function FormBuilder() {
  const { forms, selectedForm, updateFormFields } = useAppState()

  const form = useForm<FormSchema>({
    resolver: zodResolver(formBuilderSchema),
    defaultValues: {
      name: forms[selectedForm]?.name || "",
      fields: forms[selectedForm]?.fields || [],
    },
  })

  const [moreInfo, setMoreInfo] = useState<string[]>([])

  // Important!, watching the form for any changes
  form.watch()

  // Thanks to react-hook-form, we can easily update the nested FieldArray
  const { append, remove, move } = useFieldArray({
    control: form.control,
    name: "fields",
  })

  function onSubmit(values: z.infer<typeof formBuilderSchema>) {
    console.log("values", values)
  }

  function toggleMoreInfo(id: string) {
    if (moreInfo.find((s) => s === id))
      setMoreInfo(moreInfo.filter((s) => s !== id))
    else setMoreInfo(moreInfo.concat([id]))
  }

  useEffect(() => {
    form.setValue("name", forms[selectedForm].name)
    form.setValue("fields", forms[selectedForm].fields)
  }, [selectedForm])

  useEffect(() => {
    updateFormFields(form.getValues("fields"))
  }, [form.getValues("fields")])

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4 w-full">
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
                        <FiArrowUp
                          size={22}
                          className="cursor-pointer"
                          onClick={() => move(idx, idx - 1)}
                        />
                        <FiArrowDown
                          size={22}
                          className="cursor-pointer"
                          onClick={() => move(idx, idx + 1)}
                        />
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
                        <FieldTypeComboBox idx={idx} />
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
                        <FiTrash
                          className="cursor-pointer"
                          size={22}
                          onClick={() => remove(idx)}
                        />
                      </TableCell>
                      <TableCell>
                        <HiChevronUpDown
                          className="cursor-pointer"
                          size={25}
                          onClick={() => toggleMoreInfo(field.key)}
                        />
                      </TableCell>
                    </TableRow>
                    <MoreInfo
                      moreInfo={moreInfo}
                      idx={idx}
                      type={field.kind}
                      id={field.key}
                    />
                  </>
                ))}
              </TableBody>
            </Table>
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


          <GenerateCodeDialog form={form} />
          {/* <GenerateCodeDialog/> */}
        </div>
      </div>
    </div>
  )
}
