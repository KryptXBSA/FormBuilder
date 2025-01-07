import type { BooleanField, FormFramework } from "formbuilder-core";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
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
				<FormItem>
					<FormControl>
						<div className="flex items-center space-x-2">
							<ShadcnCheckbox value={field.value}id={f.key} onClick={(e)=>console.log("elick",field.value)} onChange={(e)=>console.log("eeeez",e)} />
							<label
								htmlFor={f.key}
								className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{f.label}
							</label>
						</div>
					</FormControl>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
