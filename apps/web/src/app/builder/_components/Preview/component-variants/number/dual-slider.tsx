import React from "react";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import type { FormFramework, NumberField } from "formbuilder-core";
import { useFormContext } from "react-hook-form";

export const DualSlider = ({ f }: { f: NumberField<FormFramework> }) => {
	const form = useFormContext<any>();

	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<DualRangeSlider
							className="pt-4"
							label={(value) => value}
							value={field.value || [0, 100]}
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
};
