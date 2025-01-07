// import { Input } from "@/components/ui/input";
// import type { FormFramework } from "formbuilder-core";
// import { useFormContext } from "react-hook-form";
// import {
// 	FormControl,
// 	FormDescription,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from "@/components/ui/form";

// export function FileInput({ f }: { f: FileField<FormFramework> }) {
// 	const form = useFormContext<any>();
// 	return (
// 		<FormField
// 			control={form.control}
// 			name={f.key}
// 			render={({ field }) => (
// 				<FormItem>
// 					<FormLabel>{f.label}</FormLabel>
// 					<FormControl>
// 						<div className="grid w-full max-w-sm items-center gap-1.5">
// 							<Input
// 								value={field.value}
// 								onChange={field.onChange}
// 								id={f.key}
// 								type="file"
// 							/>
// 						</div>
// 					</FormControl>
// 					<FormDescription>{f.description}</FormDescription>
// 					<FormMessage />
// 				</FormItem>
// 			)}
// 		/>
// 	);
// }
