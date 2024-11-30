import type { FormSchema } from "@/schema";
import { useFormContext } from "react-hook-form";

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";

import type { FieldKindProps } from "./FieldKindProps";

export function DateFieldKind({ idx }: FieldKindProps) {
	const form = useFormContext<FormSchema>();
	return (
		<TableRow className="border-b">
			<td />
			<TableCell
				style={{ display: "table-cell" }}
				colSpan={9}
				className="flex flex-col gap-2"
			>
				<FormField
					control={form.control}
					name={`fields.${idx}.desc`}
					render={({ field }) => (
						<FormItem className="py-1">
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Input className="w-1/2" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name={`fields.${idx}.placeholder`}
					render={({ field }) => (
						<FormItem className="py-1">
							<FormLabel>Placeholder</FormLabel>
							<FormControl>
								<Input className="w-1/2" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</TableCell>
		</TableRow>
	);
}
