import type { EnumStyleValues, FormSchema } from "@/schema";
import { Check } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { HiChevronUpDown } from "react-icons/hi2";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { TableCell, TableRow } from "@/components/ui/table";

import { EnumValues } from "./EnumValues";
import type { FieldKindProps } from "../FieldKindProps";

type EnumStyle = {
	value: EnumStyleValues;
	label: string;
};

const enumStyle: EnumStyle[] = [
	{
		value: "combobox",
		label: "ComboBox",
	},
	{
		value: "select",
		label: "Select",
	},
	{
		value: "radio",
		label: "Radio",
	},
];
export function EnumFieldKind({ idx }: FieldKindProps) {
	const form = useFormContext<FormSchema>();
	return (
		<TableRow className="border-b">
			<TableCell style={{ display: "table-cell" }} colSpan={9} className="">
				<div className="flex gap-5">
					<div>
						<FormField
							control={form.control}
							name={`fields.${idx}.desc`}
							render={({ field }) => (
								<FormItem className="py-1">
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Input className="w-full" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name={`fields.${idx}.placeholder`}
							render={({ field }) => (
								<FormItem className="py-1">
									<FormLabel>Placeholder</FormLabel>
									<FormControl>
										<Input className="w-full" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name={`fields.${idx}.style`}
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Style</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant="outline"
													role="combobox"
													className={cn(
														"w-[200px] justify-between",
														!field.value && "text-muted-foreground",
													)}
												>
													{field.value
														? enumStyle.find(
																(item) => item.value === field.value,
															)?.label
														: "Select item"}
													<HiChevronUpDown
														size={22}
														className="ml-2 h-4 w-4 shrink-0 opacity-50"
													/>
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-[200px] p-0">
											<Command>
												<CommandInput placeholder="Search types..." />
												<CommandEmpty>No type found.</CommandEmpty>
												<CommandGroup>
													{enumStyle.map((item) => (
														<CommandItem
															key={item.value}
															value={item.label}
															onSelect={() => {
																form.setValue(
																	`fields.${idx}.style`,
																	item.value,
																);
															}}
														>
															<Check
																className={cn(
																	"mr-2 h-4 w-4",
																	item.value === field.value
																		? "opacity-100"
																		: "opacity-0",
																)}
															/>
															{item.label}
														</CommandItem>
													))}
												</CommandGroup>
											</Command>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div>
						<FormField
							control={form.control}
							name={`fields.${idx}.enumName`}
							render={({ field }) => (
								<FormItem className="py-1">
									<FormLabel>Enum Name</FormLabel>
									<FormControl>
										<Input className="w-40" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<p className="text-lg">Enum Values</p>
						<EnumValues idx={idx} />
					</div>
				</div>
			</TableCell>
		</TableRow>
	);
}
