import type { DateField, FormFramework } from "formbuilder-core";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import type { DateRange } from "react-day-picker";
import React from "react";

export function DateRangePicker({ f }: { f: DateField<FormFramework> }) {
	const form = useFormContext<any>();
	// const [field.value, setDate] = React.useState<DateRange | undefined>({
	// 	from: new Date(2022, 0, 20),
	// 	to: addDays(new Date(2022, 0, 20), 20),
	// });
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>{f.label}</FormLabel>
					<div className={cn("grid gap-2", "")}>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									id="date"
									variant={"outline"}
									className={cn(
										"w-[300px] justify-start text-left font-normal",
										!field.value && "text-muted-foreground",
									)}
								>
									<CalendarIcon />
									{field.value?.from ? (
										field.value.to ? (
											<>
												{format(field.value.from, "LLL dd, y")} -{" "}
												{format(field.value.to, "LLL dd, y")}
											</>
										) : (
											format(field.value.from, "LLL dd, y")
										)
									) : (
										<span>Pick a date</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									initialFocus
									mode="range"
									defaultMonth={field.value?.from}
									selected={field.value}
									onSelect={field.onChange}
									numberOfMonths={2}
								/>
							</PopoverContent>
						</Popover>
					</div>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
