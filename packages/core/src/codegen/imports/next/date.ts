export const date = `
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "{{importAliasComponents}}/popover";
import { Button } from "{{importAliasComponents}}/button";
import { cn } from "{{importAliasUtils}}";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "{{importAliasComponents}}/calendar";
`;
export const daterange = `
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "{{importAliasComponents}}/popover";
import { Button } from "{{importAliasComponents}}/button";
import { cn } from "{{importAliasUtils}}";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "{{importAliasComponents}}/calendar";
`;
