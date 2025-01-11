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
							<FormItem className="flex items-center space-x-3 space-y-0">
								<FormControl>
									<RadioGroupItem value="all" />
								</FormControl>
								<FormLabel className="font-normal">All new messages</FormLabel>
							</FormItem>
							<FormItem className="flex items-center space-x-3 space-y-0">
								<FormControl>
									<RadioGroupItem value="mentions" />
								</FormControl>
								<FormLabel className="font-normal">
									Direct messages and mentions
								</FormLabel>
							</FormItem>
							<FormItem className="flex items-center space-x-3 space-y-0">
								<FormControl>
									<RadioGroupItem value="none" />
								</FormControl>
								<FormLabel className="font-normal">Nothing</FormLabel>
							</FormItem>
						</ShadcnRadioGroup>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
