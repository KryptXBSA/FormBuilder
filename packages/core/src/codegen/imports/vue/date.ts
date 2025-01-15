export const date = `
import { Calendar } from "{{importAliasComponents}}/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "{{importAliasComponents}}/popover";
import { cn } from "{{importAliasUtils}}";
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from "@internationalized/date";
import { Calendar as CalendarIcon } from "lucide-vue-next";
`;
export const daterange = `
import type { DateRange } from "radix-vue";

import { Button } from "{{importAliasComponents}}/button";
import { Popover, PopoverContent, PopoverTrigger } from "{{importAliasComponents}}/popover";
import { RangeCalendar } from "{{importAliasComponents}}/range-calendar";

import { cn } from "{{importAliasUtils}}";
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";
import { Calendar as CalendarIcon } from "lucide-vue-next";
`;
