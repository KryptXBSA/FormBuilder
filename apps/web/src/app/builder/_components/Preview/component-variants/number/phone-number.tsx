"use client";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-input";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FormFramework, NumberField } from "formbuilder-core";
import { type ControllerRenderProps, useFormContext } from "react-hook-form";

// TODO: add step, 3 variants for buttons
export function PhoneNumber({ f }: { f: NumberField<FormFramework> }) {
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
						<PhoneInput
							{...field}
							// value={phoneNumber}
							// onChange={setPhoneNumber}
							placeholder={f.placeholder}
						/>
					</FormControl>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
