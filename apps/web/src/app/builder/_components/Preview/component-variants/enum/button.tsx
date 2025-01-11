import type { EnumField, FormFramework } from "formbuilder-core";
import {
	RadioGroup as ShadcnRadioGroup,
	RadioGroupItem,
} from "@/components/ui/radio-group";

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

const btns = [
	{ label: "English", value: "en" },
	{ label: "French", value: "fr" },
	{ label: "German", value: "de" },
] as const;

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
							{btns.map((btn) => (
								<Button
									variant={field.value === btn.value ? "outline" : "default"}
									type="button"
									key={btn.label}
									onClick={() => {
										field.value === btn.value
											? field.onChange(null)
											: field.onChange(btn.value);
									}}
								>
									{btn.label}
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
