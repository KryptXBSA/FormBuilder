import type { FormField } from "@/schema";
import { getRequiredComponents } from "@/lib/utils";

export function generateImports(fields: FormField[]) {
	const initialImports = `
'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
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
`;
	const switchImport = `
import { Switch } from "@/components/ui/switch"
`;
	const dateImport = `
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
`;
	const selectImport = `
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
`;
	const comboboxImport = `
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
`;
	const radioImport = `
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
`;
	const textareaImport = `
import { Textarea } from "@/components/ui/textarea"
`;

	let imports = initialImports;
	for (const i of getRequiredComponents(fields)) {
		if (i === "date") imports += dateImport;
		if (i === "boolean") imports += switchImport;
		if (i === "radio-group") imports += radioImport;
		if (i === "select") imports += selectImport;
		if (i === "popover") imports += comboboxImport;
		if (i === "textarea") imports += textareaImport;
		// if (i === "command") imports += comboboxImport
	}
	return imports;
}
