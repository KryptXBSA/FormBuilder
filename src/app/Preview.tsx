"use client"

import React from "react"
import { useAppState } from "@/state/state"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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

export function Preview() {
  const { forms, selectedForm } = useAppState()
  let formFields = forms[selectedForm].fields

  const formSchema = z.object({
    username: z.string().min(1).max(255),
    myNumber: z.coerce.number().gte(1).lte(9999),
    email: z.string().email().min(1).max(255),
    securityEmails: z.boolean(),
    dateOfBirth: z.date(),
    notify: z.string(),
    language: z.string(),
    languageSelect: z.string(),
    key85: z.number().gte(1).lte(9999999999),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      myNumber: 1,
      email: "",
      key85: 1,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {formFields.map((f) => (
          <>
            <div key={f.id}>
              {f.type === "string" && (
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{f.label}</FormLabel>
                      <FormControl>
                        {f.validation?.format === "email" ? (
                          <Input
                            type="email"
                            placeholder="{{label}}"
                            {...field}
                          />
                        ) : (
                          <Input placeholder="{{placeholder}}" {...field} />
                        )}
                      </FormControl>
                      <FormDescription>{f.desc}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              a
            </div>
          </>
        ))}
      </form>
    </Form>
  )
}
