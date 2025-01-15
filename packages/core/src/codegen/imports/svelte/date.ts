export const date = `
 import CalendarIcon from "lucide-svelte/icons/calendar";
  import {
    DateFormatter,
    type DateValue,
    getLocalTimeZone
  } from "@internationalized/date";
  import { cn } from "{{importAliasUtils}}";
  import { buttonVariants } from "{{importAliasComponents}}/button/index.js";
  import { Calendar } from "{{importAliasComponents}}/calendar/index.js";
  import * as Popover from "{{importAliasComponents}}/popover/index.js";
`;
export const daterange = `
import CalendarIcon from "lucide-svelte/icons/calendar";
import type { DateRange } from "bits-ui";
import {
  CalendarDate,
  DateFormatter,
  type DateValue,
  getLocalTimeZone
} from "@internationalized/date";
import { cn } from "{{importAliasUtils}}";
import { buttonVariants } from "{{importAliasComponents}}/button/index.js";
import { RangeCalendar } from "{{importAliasComponents}}/range-calendar/index.js";
import * as Popover from "{{importAliasComponents}}/popover/index.js";
`;
