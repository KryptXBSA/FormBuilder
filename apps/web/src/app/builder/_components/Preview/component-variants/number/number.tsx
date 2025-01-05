"use client";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FormFramework, NumberField } from "formbuilder-core";
import { type ControllerRenderProps, useFormContext } from "react-hook-form";

// TODO: add step, 3 variants for buttons
export function NumberInput({ f }: { f: NumberField<FormFramework> }) {
	const form = useFormContext<any>();

	const increment = (field: ControllerRenderProps) => {
		// const newValue = field.value || 0 + f.validation?.step!;
		const newValue = Number.isNaN(field.value) ? 1 : field.value + 1;
		// if (newValue <= f.validation?.max!) {
		field.onChange(newValue);
		// }
	};

	const decrement = (field: ControllerRenderProps) => {
		// const newValue = field.value || 0 - f.validation?.step!;
		const newValue = Number.isNaN(field.value) ? 1 : field.value - 1;
		// if (newValue >= f.validation?.min!) {
		field.onChange(newValue);
		// }
	};

	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<div className="flex flex-1 items-center">
							<Button
								type="button"
								variant="ghost"
								size="icon"
								onClick={() => decrement(field)}
								className="h-8 w-8 text-white hover:bg-white/10 hover:text-white"
							>
								<Minus className="h-4 w-4" />
								<span className="sr-only">Decrease</span>
							</Button>
							<div className="flex-1 text-center tabular-nums">
								{field.value || 0}
							</div>
							<Button
								type="button"
								variant="ghost"
								size="icon"
								onClick={() => increment(field)}
								className="h-8 w-8 text-white hover:bg-white/10 hover:text-white"
							>
								<Plus className="h-4 w-4" />
								<span className="sr-only">Increase</span>
							</Button>
						</div>
					</FormControl>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
