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
import { Switch as ShadcnSwitch } from "@/components/ui/switch";

export function Switch({ f }: { f: BooleanField<FormFramework> }) {
	const form = useFormContext<any>();
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
					<div className="">
						<FormLabel className="text-base">{f.label}</FormLabel>
						<FormDescription>{f.description}</FormDescription>
					</div>
					<FormControl>
						<ShadcnSwitch {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
