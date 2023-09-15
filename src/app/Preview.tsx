"use client"

import React from "react"
import { FormField as FF } from "@/schema"
import { useAppState } from "@/state/state"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

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
  const form = useForm<z.infer<any>>({
    // const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      myNumber: 1,
      email: "",
      key85: 1,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    let result = "Submitted Values:\n"

    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        // @ts-ignore
        result += `${key}: ${values[key]}\n`
      }
    }
    alert(result)
  }
  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-1/2"
      >
        {formFields.map((f) => (
          <>
            {f.type === "string" && StringField(f)}
            {f.type === "number" && NumberField(f)}
            {f.type === "date" && DateField(f)}
            {f.type === "boolean" && BooleanField(f)}
            {f.style === "radio" && RadioField(f)}
            {f.style === "select" && SelectField(f)}
            {f.style === "combobox" && ComboboxField(f)}
          </>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
  function ComboboxField(f: FF) {
    return (
      <FormField
        control={form.control}
        name={f.key}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>{f.label}</FormLabel>
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
                      ? f.enumValues?.find((item) => item.value === field.value)
                          ?.label
                      : "Select item"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder={`Search ${f.enumName}...`} />
                  <CommandEmpty>No {f.enumName} found.</CommandEmpty>
                  <CommandGroup>
                    {f.enumValues?.map((item) => (
                      <CommandItem
                        value={item.label}
                        key={item.value}
                        onSelect={() => {
                          form.setValue(f.key, item.value)
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
            <FormDescription>{f.desc}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }
  function SelectField(f: FF) {
    return (
      <FormField
        control={form.control}
        name={f.key}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{f.label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={f.placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {f.enumValues?.map((v) => (
                  <SelectItem value={v.value}>{v.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>{f.desc}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }
  function RadioField(f: FF) {
    return (
      <FormField
        control={form.control}
        name={f.key}
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>{f.label}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                {f.enumValues?.map((v) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={v.value} />
                    </FormControl>
                    <FormLabel className="font-normal">{v.label}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormDescription>{f.desc}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }
  function BooleanField(f: FF) {
    return (
      <FormField
        control={form.control}
        name={f.key}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">{f.label}</FormLabel>
              <FormDescription>{f.desc}</FormDescription>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    )
  }
  function DateField(f: FF) {
    return (
      <FormField
        control={form.control}
        name={f.key}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>{f.label}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>{f.placeholder}</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  // disabled={(date) =>
                  //   date > new Date() || date < new Date("1900-01-01")
                  // }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormDescription>{f.desc}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }
  function NumberField(f: FF) {
    return (
      <FormField
        control={form.control}
        name={f.key}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{f.label}</FormLabel>
            <FormControl>
              <Input type="number" placeholder={f.placeholder} {...field} />
            </FormControl>
            <FormDescription>{f.desc}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }
  function StringField(f: FF) {
    return (
      <FormField
        control={form.control}
        name={f.key}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{f.label}</FormLabel>
            <FormControl>
              {f.validation?.format === "email" ? (
                <Input type="email" placeholder={f.placeholder} {...field} />
              ) : (
                <Input placeholder={f.placeholder} {...field} />
              )}
            </FormControl>
            <FormDescription>{f.desc}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }
}
