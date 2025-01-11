import type { EnumField, FormFramework } from "formbuilder-core";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
	{ label: "English", value: "en" },
	{ label: "French", value: "fr" },
	{ label: "German", value: "de" },
	{ label: "Spanish", value: "es" },
	{ label: "Portuguese", value: "pt" },
	{ label: "Russian", value: "ru" },
	{ label: "Japanese", value: "ja" },
	{ label: "Korean", value: "ko" },
	{ label: "Chinese", value: "zh" },
] as const;

export function Combobox({ f }: { f: EnumField<FormFramework> }) {
	const form = useFormContext<any>();
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
										!field.value && "text-muted-foreground",
									)}
								>
									{field.value
										? languages.find(
												(language) => language.value === field.value,
											)?.label
										: "Select language"}
									<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandInput placeholder="Search language..." />
								<CommandList>
									<CommandEmpty>No language found.</CommandEmpty>
									<CommandGroup>
										{languages.map((language) => (
											<CommandItem
												value={language.label}
												key={language.value}
												onSelect={() => {
													form.setValue(f.key, language.value);
												}}
											>
												{language.label}
												<Check
													className={cn(
														"ml-auto",
														language.value === field.value
															? "opacity-100"
															: "opacity-0",
													)}
												/>
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
