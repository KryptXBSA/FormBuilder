import React, { useState } from "react"
import { useFormStore } from "@/stores/form-store"
import { zodResolver } from "@hookform/resolvers/zod"
// import { PencilIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const editNameSchema = z.object({
  name: z.string(),
})

export function FormName() {
  const { forms, selectedForm, updateFormName } = useFormStore()

  const [editName, setEditName] = useState(false)

  function toggleEdit() {
    setEditName(!editName)
  }

  const form = useForm<z.infer<typeof editNameSchema>>({
    resolver: zodResolver(editNameSchema),
    defaultValues: {
      name: "",
    },
  })

  function onSubmit(values: z.infer<typeof editNameSchema>) {
    console.log("values", values)
    toggleEdit()
    updateFormName(values.name)
    // editModelMutation.mutate({
    //   ...values,
    //   modelId: modelState.selectedModel,
    // })
  }
  if (editName) {
    return (
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4  rounded-md ">
              <div className="flex items-center gap-2 ">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  onClick={() => console.log("wtdfffff")}
                  size="sm"
                  className="h-9 w-16"
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </>
    )
  } else
    return (
      <>
        <div className="flex flex-col">
          <h3 className="flex scroll-m-20 items-center gap-1  text-2xl font-semibold tracking-tight">
            {forms[selectedForm].name}
            {/* <PencilIcon */}
            {/*   onClick={toggleEdit} */}
            {/*   className="mb-1 ml-1 cursor-pointer" */}
            {/*   size={22} */}
            {/* />{" "} */}
          </h3>
          <p className="text-lg text-blue-400 ">
            {forms[selectedForm].fields.length} Fields
          </p>
        </div>
      </>
    )
}
