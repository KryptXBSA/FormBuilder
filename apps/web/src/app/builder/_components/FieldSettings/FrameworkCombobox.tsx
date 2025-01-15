"use client";

import * as React from "react";
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
import type { FormFramework } from "formbuilder-core";
import { useAppState } from "@/state/state";

const frameworks: { value: FormFramework; label: string }[] = [
	{
		value: "next",
		label: "Next.js",
	},
	{
		value: "svelte",
		label: "Svelte",
	},
	{
		value: "vue",
		label: "Vue",
	},
];

export function FrameworkCombobox() {
	const { currentForm, updateFormFramework } = useAppState();
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(currentForm.framework);

	//   React.useEffect(() => {
	//     setValue(currentForm.framework);
	//   }, [currentForm]);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{value
						? frameworks.find((framework) => framework.value === value)?.label
						: "Select framework..."}
					<ChevronsUpDown className="opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search framework..." className="h-9" />
					<CommandList>
						<CommandEmpty>No framework found.</CommandEmpty>
						<CommandGroup>
							{frameworks.map((framework) => (
								<CommandItem
									key={framework.value}
									value={framework.value}
									onSelect={(currentValue) => {
										// @ts-ignore
										setValue(currentValue === value ? "" : currentValue);
										// @ts-ignore
										updateFormFramework(currentValue);
										setOpen(false);
									}}
								>
									{framework.label}
									<Check
										className={cn(
											"ml-auto",
											value === framework.value ? "opacity-100" : "opacity-0",
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
