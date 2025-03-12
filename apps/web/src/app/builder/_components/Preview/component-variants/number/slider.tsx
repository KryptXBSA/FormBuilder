import React from "react";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import type { FormFramework, NumberField } from "formbuilder-core";
import { useFormContext } from "react-hook-form";
import { Slider as ShadcnSlider } from "@/components/ui/slider";

export function Slider({ f }: { f: NumberField<FormFramework> }) {
	const form = useFormContext<any>();
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<ShadcnSlider
							className="pt-4"
							value={field.value}
							onValueChange={(e: any) => field.onChange(e)}
							min={f.validation?.min}
							max={f.validation?.max}
							step={f.validation?.step}
						/>
					</FormControl>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
