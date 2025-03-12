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
import { Button } from "@/components/ui/button";

export function ButtonGroup({ f }: { f: EnumField<FormFramework> }) {
	const form = useFormContext<any>();
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem className="space-y-3">
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<div className="flex gap-2">
							{f.enumValues?.map((item) => (
								<Button
									variant={field.value === item.value ? "outline" : "default"}
									type="button"
									key={item.label}
									onClick={() => {
										field.value === item.value
											? field.onChange(null)
											: field.onChange(item.value);
									}}
								>
									{item.label}
								</Button>
							))}
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
