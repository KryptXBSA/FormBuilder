import type { EnumField, FormFramework } from "formbuilder-core";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import {
	Select as ShadcnSelect,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function Select({ f }: { f: EnumField<FormFramework> }) {
	const form = useFormContext<any>();
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{f.label}</FormLabel>
					<ShadcnSelect onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder="Select a verified email to display" />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							<SelectItem value="m@example.com">m@example.com</SelectItem>
							<SelectItem value="m@google.com">m@google.com</SelectItem>
							<SelectItem value="m@support.com">m@support.com</SelectItem>
						</SelectContent>
					</ShadcnSelect>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
