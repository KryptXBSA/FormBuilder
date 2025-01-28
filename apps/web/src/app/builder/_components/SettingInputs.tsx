import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useAppState } from "@/state/state";
import { type EnumValue, randID } from "formbuilder-core";
import { Check, ChevronsUpDown, PlusIcon, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
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
import React from "react";
import { FormLabel } from "@/components/ui/form";

const HeadingLevels = [
	{
		value: "H1",
		label: "H1",
	},
	{
		value: "H2",
		label: "H2",
	},
	{
		value: "H3",
		label: "H3",
	},
	{
		value: "H4",
		label: "H4",
	},
	{
		value: "H5",
		label: "H5",
	},
	{
		value: "H6",
		label: "H6",
	},
];

type HeadingLevelInput = {
	headingLevel: string;
	onChange: (value: "H1" | "H2" | "H3" | "H4" | "H5" | "H6") => void;
};

export function HeadingLevelComboBox({
	headingLevel,
	onChange,
}: HeadingLevelInput) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(headingLevel);

	return (
		<>
			<p className="font-semibold text-lg">Heading Level</p>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-[200px] justify-between"
					>
						{value
							? HeadingLevels.find((level) => level.value === value)?.label
							: "Select heading level..."}
						<ChevronsUpDown className="opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0">
					<Command>
						<CommandInput placeholder="Search framework..." />
						<CommandList>
							<CommandEmpty>No framework found.</CommandEmpty>
							<CommandGroup>
								{HeadingLevels.map((level) => (
									<CommandItem
										key={level.value}
										value={level.value}
										onSelect={(currentValue) => {
											setValue(currentValue === value ? "" : currentValue);
											setOpen(false);
											onChange(currentValue as any);
										}}
									>
										{level.label}
										<Check
											className={cn(
												"ml-auto",
												value === level.value ? "opacity-100" : "opacity-0",
											)}
										/>
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</>
	);
}

type FormInput = {
	label: string;
	value: string | number;
	onChange: (value: string) => void;
	type?: "number" | "text";
};

export function FormInput({ label, value, onChange, type }: FormInput) {
	return (
		<div className="">
			<h4 className="scroll-m-20 font-semibold tracking-tight">{label}</h4>
			<Input
				className="max-w-sm"
				type={type || "text"}
				placeholder={label}
				value={value}
				onChange={(e) => {
					const newValue = e.currentTarget.value;
					onChange(newValue);
				}}
			/>
		</div>
	);
}
type FormEnumInput = {
	label: string;
	value: EnumValue[];
	onChange: (value: EnumValue[]) => void;
};

export function FormEnumInput({ label, value, onChange }: FormEnumInput) {
	const state = useAppState();
	return (
		<div className="flex flex-col gap-2">
			<h4 className="scroll-m-20 font-semibold tracking-tight">{label}</h4>
			{value.map((item) => (
				<div key={item.id} className="flex flex-row gap-2">
					<FormInput
						label="Label"
						value={item.label}
						onChange={(newValue) => {
							const updatedValue = value.map((val) =>
								val.id === item.id ? { ...val, label: newValue } : val,
							);
							state.updateField({ enumValues: updatedValue });
						}}
					/>
					<FormInput
						label="Value"
						value={item.value}
						onChange={(newValue) => {
							const updatedValue = value.map((val) =>
								val.id === item.id ? { ...val, value: newValue } : val,
							);
							state.updateField({ enumValues: updatedValue });
						}}
					/>
					<Button
						onClick={() =>
							state.updateField({
								enumValues: value.filter((values) => values.id !== item.id),
							})
						}
						className="self-end"
						variant="destructive"
					>
						<Trash className="h-5 w-5" />
						Remove
					</Button>
				</div>
			))}
			<Button
				className="max-w-24 justify-start"
				onClick={() =>
					state.updateField({
						enumValues: [
							...value,
							{ label: "label", value: "value", id: randID() },
						],
					})
				}
			>
				<PlusIcon /> Add
			</Button>
		</div>
	);
}

type FormSwitch = {
	title: string;
	subtitle: string;
	checked: boolean;
	onCheckedChange: () => void;
};

export function FormSwitch({
	title,
	subtitle,
	checked,
	onCheckedChange,
}: FormSwitch) {
	return (
		<div className="flex max-w-sm flex-row items-center justify-between rounded-lg border p-4">
			<div className="-space-y-0.5 flex flex-col">
				<span className="text-base">{title}</span>
				<span className="text-muted-foreground text-sm">{subtitle}</span>
			</div>
			<div>
				<Switch checked={checked} onCheckedChange={onCheckedChange} />
			</div>
		</div>
	);
}
