export const combobox = `
import { Check, ChevronsUpDown } from "lucide-vue-next";
import { cn } from "{{importAliasUtils}}";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "{{importAliasComponents}}/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "{{importAliasComponents}}/popover";
`;

export const radio = `
import { Label } from "{{importAliasComponents}}/label";
import { RadioGroup, RadioGroupItem } from "{{importAliasComponents}}/radio-group";
`;

export const select = `
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "{{importAliasComponents}}/select";
`;
