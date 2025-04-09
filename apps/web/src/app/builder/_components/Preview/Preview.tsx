"use client";
import React from "react";
import type {
	FormField as FF,
	FormFramework,
	Settings,
} from "formbuilder-core";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { RenderField } from "./RenderField";
import { toast } from "sonner";

export function Preview({
	currentForm,
}: {
	currentForm: {
		id: string;
		name: string;
		framework: FormFramework;
		fields: FF<FormFramework>[][];
		settings: Settings;
	};
}) {
	const getDefaultValues = (row: FF<FormFramework>) => {
		const variant = row.variant.split("-").slice(2).join("-");
		switch (row.kind) {
			case "text":
				if (variant === "text-inputtag")
					return {
						[row.key]: [],
					};

				return row.validation?.isEmail ? { [row.key]: "" } : { [row.key]: "" };
			case "number":
				if (variant === "number-slider")
					return {
						[row.key]: [0],
					};
				if (variant === "number-slider")
					return {
						[row.key]: [0],
					};
				if (variant === "number-dualslider")
					return {
						[row.key]: [0, 0],
					};
				if (variant === "number-phone")
					return {
						[row.key]: "",
					};
				return {
					[row.key]: 0,
				};
			case "boolean":
				return { [row.key]: false };
			case "date":
				if (variant === "date-daterange") {
					return {
						[row.key]: { from: new Date(), to: addDays(new Date(), 20) },
					};
				}
				return { [row.key]: new Date() };
			// case "file":
			// 	return {
			// 		[row.key]: null,
			// 	};
			case "enum":
				return { [row.key]: "" };
			default:
				return {};
		}
	};
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

				return row.validation?.isEmail
					? { [row.key]: z.string().email().min(1).max(9999999999) }
					: { [row.key]: z.string().min(1).max(9999999999) };
			case "number":
				if (row.variant === "next-shadcnexpansion-number-dualslider")
					return {
						[row.key]: z.array(z.number()),
					};
				if (row.variant === "next-shadcn-number-slider")
					return {
						[row.key]: z.array(z.number()),
					};
				if (row.variant === "next-shadcn-number-phone")
					return {
						[row.key]: z.coerce.string(),
					};
				return {
					[row.key]: z.coerce
						.number()
						.min(row.validation?.min || 1)
						.max(row.validation?.max || 9999999999),
				};
			case "boolean":
				return { [row.key]: z.boolean() };
			case "date":
				if (row.variant === "next-shadcn-date-daterange") {
					return { [row.key]: z.object({ from: z.date(), to: z.date() }) };
				}
				return { [row.key]: z.date() };
			// case "file":
			// 	return {
			// 		[row.key]: z.instanceof(File),
			// .refine((file) => file.size < 7000000, {
			// 	message: "File must be less than 7MB.",
			// })
			// };
			case "enum":
				return { [row.key]: z.string() };
			default:
				return {};
		}
	};

	const schema = currentForm.fields.reduce((acc, col) => {
		col.forEach((row) => {
			Object.assign(acc, createFieldSchema(row));
		});
		return acc;
	}, {});

	const defaultValues = currentForm.fields.reduce((acc, col) => {
		col.forEach((row) => {
			Object.assign(acc, getDefaultValues(row));
		});
		return acc;
	}, {});

	const formSchema = z.object(schema);
	const form = useForm<z.infer<any>>({
		resolver: zodResolver(formSchema),
		defaultValues: defaultValues,
	});

	// TODO: Replace alert with toast, and make it look better
	function onSubmit() {
		const values = form.getValues();
		let result = "Submitted Values:\n";

		for (const key in values) {
			// biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
			if (values.hasOwnProperty(key)) {
				// @ts-ignore
				result += `\n${key}: ${values[key]}\n`;
			}
		}
		toast.info("Form submitted", {
			description: () => <div>{result}</div>,
		});
		// alert(result);
	}

	return (
		<Form {...form}>
			<form
				noValidate
				onSubmit={form.handleSubmit(onSubmit)}
				className="-1/2 space-y-4"
			>
				{currentForm.fields.map((row, i) => (
					<div className="flex flex-row gap-4" key={i}>
						{row.map((col) => (
							<div className="w-full" key={col.id}>
								<RenderField col={col} />
							</div>
						))}
					</div>
				))}
				<Button onClick={() => form.getValues()}>Submit</Button>

				{/* <Alert variant="warning">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Form validation doesn't work in Live preview</AlertTitle>
					<AlertDescription>
						But it does work when utilizing the generated code.
					</AlertDescription>
				</Alert> */}
			</form>
		</Form>
	);
}
