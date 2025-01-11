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
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";

export function Textarea({ f }: { f: TextField<FormFramework> }) {
	const form = useFormContext<any>();
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<ShadcnTextarea
							placeholder={f.placeholder}
							className="resize-none"
							{...field}
						/>
					</FormControl>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
