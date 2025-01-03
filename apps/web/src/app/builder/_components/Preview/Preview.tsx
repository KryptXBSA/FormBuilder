"use client";

import React, { useEffect } from "react";
import type {
	FormField as FF,
	FormFramework,
	TextField,
} from "formbuilder-core";
import { useAppState } from "@/state/state";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { AlertCircle, CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input as ShadcnInput } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
	InputOTP,
	AutoResizeTextarea,
	Input,
	Textarea,
	InputTag,
	PasswordStrengthIndicator,
} from "./component-variants/text";

export function Preview() {
	const { currentForm } = useAppState();
	const formFields = currentForm.fields;

	const createFieldSchema = (row: FF<FormFramework>) => {
		switch (row.kind) {
			case "text":
				if (row.variant === "next-originui-text-inputtag")
					return {
						[row.key]: z.array(
							z.object({
								id: z.string(),
								text: z.string(),
							}),
						),
					};

				return row.validation?.email
					? { [row.key]: z.string().email().min(1).max(9999999999) }
					: { [row.key]: z.string().min(1).max(9999999999) };
			case "number":
				return {
					[row.key]: z.coerce
						.number()
						.min(row.validation?.min || 1)
						.max(row.validation?.max || 9999999999),
				};
			case "boolean":
				return { [row.key]: z.boolean() };
			case "date":
				return { [row.key]: z.date() };
			case "file":
				return {
					[row.key]: z.instanceof(File).refine((file) => file.size < 7000000, {
						message: "File must be less than 7MB.",
					}),
				};
			case "enum":
				return { [row.key]: z.string() };
			default:
				return {};
		}
	};

	const ff = currentForm.fields.reduce((acc, col) => {
		col.forEach((row) => {
			Object.assign(acc, createFieldSchema(row));
		});
		return acc;
	}, {});
	const formSchema = z.object(ff);

	const form = useForm<z.infer<any>>({
		resolver: zodResolver(formSchema),
	});

	// TODO: Replace alert with toast
	function onSubmit() {
		const values = form.getValues();
		let result = "Submitted Values:\n";
		console.log("valls", values);

		for (const key in values) {
			// biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
			if (values.hasOwnProperty(key)) {
				// @ts-ignore
				result += `${key}: ${values[key]}\n`;
			}
		}
		alert(result);
	}
	return (
		<Form {...form}>
			<form
				noValidate
				onSubmit={form.handleSubmit(onSubmit)}
				className="-1/2 space-y-4"
			>
				{formFields.map((row, i) => (
					<div className="flex flex-row gap-4" key={i}>
						{row.map((col) => (
							<div key={col.id}>
								{col.kind === "text" &&
									col.variant === "next-shadcn-text-input" && <Input f={col} />}
								{col.kind === "text" &&
									col.variant === "next-shadcn-text-textarea" && (
										<Textarea f={col} />
									)}
								{col.kind === "text" &&
									col.variant ===
										"next-shadcnexpansion-text-autoresizetextarea" && (
										<AutoResizeTextarea f={col} />
									)}
								{col.kind === "text" &&
									col.variant === "next-shadcn-text-inputotp" && (
										<InputOTP f={col} />
									)}
								{col.kind === "text" &&
									col.variant === "next-originui-text-inputtag" && (
										<InputTag f={col} />
									)}
								{col.kind === "text" &&
									col.variant === "next-originui-text-password" && (
										<PasswordStrengthIndicator f={col} />
									)}
								{/* {col.kind === "text" && TextField(col)}
								{col.kind === "number" && NumberField(col)}
								{col.kind === "date" && DateField(col)}
								{col.kind === "boolean" && BooleanField(col)}
								{col.style === "radio" && RadioField(col)}
								{col.style === "select" && SelectField(col)}
								{col.style === "combobox" && ComboboxField(col)}
								{col.kind === "textarea" && TextareaField(col)} */}
							</div>
						))}
					</div>
				))}
				<Button onClick={() => form.getValues()}>Submit</Button>

				<Alert variant="warning">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Form validation doesn't work in Live preview</AlertTitle>
					<AlertDescription>
						But it does work when utilizing the generated code.
					</AlertDescription>
				</Alert>
			</form>
		</Form>
	);
	function ComboboxField(f: FF) {
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
											? f.enumValues?.find((item) => item.value === field.value)
													?.label
											: "Select item"}
										<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
									</Button>
								</FormControl>
							</PopoverTrigger>
							<PopoverContent className="w-[200px] p-0">
								<Command>
									<CommandInput placeholder={`Search ${f.enumName}...`} />
									<CommandEmpty>No {f.enumName} found.</CommandEmpty>
									<CommandGroup>
										{f.enumValues?.map((item) => (
											<CommandItem
												value={item.label}
												key={item.value}
												onSelect={() => {
													form.setValue(f.key, item.value);
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
						<FormDescription>{f.desc}</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}
	function SelectField(f: FF) {
		return (
			<FormField
				control={form.control}
				name={f.key}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{f.label}</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder={f.placeholder} />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								{f.enumValues?.map((v, i) => (
									<SelectItem key={v.id} value={v.value}>
										{v.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormDescription>{f.desc}</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}
	function RadioField(f: FF) {
		return (
			<FormField
				control={form.control}
				name={f.key}
				render={({ field }) => (
					<FormItem className="space-y-3">
						<FormLabel>{f.label}</FormLabel>
						<FormControl>
							<RadioGroup
								onValueChange={field.onChange}
								defaultValue={field.value}
								className="flex flex-col space-y-1"
							>
								{f.enumValues?.map((v, i) => (
									<FormItem
										key={v.id}
										className="flex items-center space-x-3 space-y-0"
									>
										<FormControl>
											<RadioGroupItem value={v.value} />
										</FormControl>
										<FormLabel className="font-normal">{v.label}</FormLabel>
									</FormItem>
								))}
							</RadioGroup>
						</FormControl>
						<FormDescription>{f.desc}</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}
	function BooleanField(f: FF) {
		return (
			<FormField
				control={form.control}
				name={f.key}
				render={({ field }) => (
					<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
						<div className="space-y-0.5">
							<FormLabel className="text-base">{f.label}</FormLabel>
							<FormDescription>{f.desc}</FormDescription>
						</div>
						<FormControl>
							<Switch checked={field.value} onCheckedChange={field.onChange} />
						</FormControl>
					</FormItem>
				)}
			/>
		);
	}
	function DateField(f: FF) {
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
										variant={"outline"}
										className={cn(
											"w-[240px] pl-3 text-left font-normal",
											!field.value && "text-muted-foreground",
										)}
									>
										{field.value ? (
											format(field.value, "PPP")
										) : (
											<span>{f.placeholder}</span>
										)}
										<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
									</Button>
								</FormControl>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									mode="single"
									selected={field.value}
									onSelect={field.onChange}
									// disabled={(date) =>
									//   date > new Date() || date < new Date("1900-01-01")
									// }
									initialFocus
								/>
							</PopoverContent>
						</Popover>
						<FormDescription>{f.desc}</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}
	function NumberField(f: FF) {
		return (
			<FormField
				control={form.control}
				name={f.key}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{f.label}</FormLabel>
						<FormControl>
							<ShadcnInput
								type="number"
								placeholder={f.placeholder}
								{...field}
							/>
						</FormControl>
						<FormDescription>{f.desc}</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}
	function TextField(f: TextField<FormFramework>) {
		return (
			<FormField
				control={form.control}
				name={f.key}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{f.label}</FormLabel>
						<FormControl>
							{f.validation!.email === "email" ? (
								<ShadcnInput
									type="email"
									placeholder={f.placeholder}
									{...field}
								/>
							) : f.validation?.format === "password" ? (
								<ShadcnInput
									type="password"
									placeholder={f.placeholder}
									{...field}
								/>
							) : (
								<ShadcnInput placeholder={f.placeholder} {...field} />
							)}
						</FormControl>
						<FormDescription>{f.description}</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}
	function TextareaField(f: FF) {
		return (
			<FormField
				control={form.control}
				name={f.key}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{f.label}</FormLabel>
						<FormControl>
							{/* <Textarea
								placeholder={f.placeholder}
								className="resize-none"
								{...field}
							/> */}
						</FormControl>
						<FormDescription>{f.desc}</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}
}
