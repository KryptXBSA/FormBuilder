"use client"

import { FieldKind, FormSchema } from "@/schema"
import { CommandList } from "cmdk"
import { useFormContext } from "react-hook-form"
import { AiOutlineCheck } from "react-icons/ai"
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
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export const fieldKinds: { value: FieldKind; label: string }[] = [
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
  {
    value: "textarea",
    label: "Text Area",
  },
]
export function FieldKindComboBox({ idx }: { idx: number }) {
  const form = useFormContext<FormSchema>()
  return (
    <FormField
      control={form.control}
      name={`fields.${idx}.kind`}
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
                    ? fieldKinds.find((item) => item.value === field.value)
                        ?.label
                    : "Select item"}
                  <HiChevronUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search types..." />
                <CommandList>
                  <CommandEmpty>No type found.</CommandEmpty>
                  <CommandGroup>
                    {fieldKinds.map((item) => {
                      return (
                        <CommandItem
                          value={item.label}
                          key={item.value}
                          onSelect={() => {
                            form.setValue(`fields.${idx}.kind`, item.value)
                          }}
                        >
                          <AiOutlineCheck
                            className={cn(
                              "mr-2 h-4 w-4",
                              item.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {item.label}
                        </CommandItem>
                      )
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
