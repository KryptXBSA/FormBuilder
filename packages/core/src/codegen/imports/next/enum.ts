export const combobox = `import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "{{importAliasComponents}}/button";
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
import {
	RadioGroup,
	RadioGroupItem,
} from "{{importAliasComponents}}/radio-group"
`;

export const select = `
import {
	Select as ShadcnSelect,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "{{importAliasComponents}}/select";
`;
