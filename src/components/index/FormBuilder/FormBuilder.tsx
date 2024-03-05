"use client"

import { useEffect } from "react"
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
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { GenerateCodeDialog } from "./CopyCodeDialog"
import { FormTableBody } from "./FormTableBody"

export function FormBuilder() {
  const { forms, selectedForm, updateFormFields } = useAppState()

  const form = useForm<FormSchema>({
    resolver: zodResolver(formBuilderSchema),
    defaultValues: {
      name: forms[selectedForm]?.name || "",
      fields: forms[selectedForm]?.fields || [],
    },
  })

  // Important!, watching the form for any changes
  form.watch()

  // Thanks to react-hook-form, we can easily update the nested FieldArray
  const { append } = useFieldArray({
    control: form.control,
    name: "fields",
  })

  function onSubmit(values: z.infer<typeof formBuilderSchema>) {
    console.log("values", values)
  }

  useEffect(() => {
    form.setValue("name", forms[selectedForm].name)
    form.setValue("fields", forms[selectedForm].fields)
  }, [selectedForm])

  useEffect(() => {
    updateFormFields(form.getValues("fields"))
  }, [form.getValues("fields")])

  const tableHeaders = [
    "Move",
    "Label",
    "Key",
    "Type",
    "Required",
    "Delete",
    "More",
  ]

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-4 w-full">
        <Form {...form}>
          <form className="w-5/6" onSubmit={form.handleSubmit(onSubmit)}>
            <Table>
              <TableHeader>
                <TableRow>
                  {tableHeaders.map((header, index) => (
                    <TableHead key={index}>{header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <FormTableBody />
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
        </div>
      </div>
    </div>
  )
}
