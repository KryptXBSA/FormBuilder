import type { TextField, FormFramework } from "formbuilder-core";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input as ShadcnInput } from "@/components/ui/input";

export function Input({ f }: { f: TextField<FormFramework> }) {
	const form = useFormContext<any>();
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<ShadcnInput placeholder={f.placeholder} {...field} />
					</FormControl>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
