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
import type { FormFramework, NumberField } from "formbuilder-core";
import { useFormContext } from "react-hook-form";

export function PhoneNumber({ f }: { f: NumberField<FormFramework> }) {
	const form = useFormContext<any>();

	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<PhoneInput
							smartCaret={true}
							{...field}
							international
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
