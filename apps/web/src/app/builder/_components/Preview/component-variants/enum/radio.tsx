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

export function RadioGroup({ f }: { f: EnumField<FormFramework> }) {
	const form = useFormContext<any>();
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem className="space-y-3">
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<ShadcnRadioGroup
							onValueChange={field.onChange}
							defaultValue={field.value}
							className="flex flex-col space-y-1"
						>
							{f.enumValues?.map((item) => (
								<FormItem
									key={item.value}
									className="flex items-center space-x-3 space-y-0"
								>
									<FormControl>
										<RadioGroupItem value={item.value} />
									</FormControl>
									<FormLabel className="font-normal">{item.label}</FormLabel>
								</FormItem>
							))}
						</ShadcnRadioGroup>
					</FormControl>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
