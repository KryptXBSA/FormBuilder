import type { BooleanField, FormFramework } from "formbuilder-core";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";

export function Checkbox({ f }: { f: BooleanField<FormFramework> }) {
	const form = useFormContext<any>();
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
					<FormControl>
						<ShadcnCheckbox
							className="mt-0.5"
							checked={field.value}
							onCheckedChange={field.onChange}
						/>
					</FormControl>
					<div className="space-y-1 leading-none">
						<FormLabel>{f.label}</FormLabel>
						<FormDescription>{f.description}</FormDescription>
						<FormMessage />
					</div>
				</FormItem>
			)}
		/>
	);
}
