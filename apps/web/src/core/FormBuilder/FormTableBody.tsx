import React, { useState } from "react";
import type { FormSchema } from "formbuilder-core";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FiArrowDown, FiArrowUp, FiTrash } from "react-icons/fi";
import { HiChevronUpDown } from "react-icons/hi2";

import { Checkbox } from "@/components/ui/checkbox";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

import { FieldKindComboBox } from "./FieldKindComboBox";
import { MoreInfo } from "./MoreInfo";

export function FormTableBody() {
	const form = useFormContext<FormSchema>();
	const { remove, move } = useFieldArray({
		control: form.control,
		name: "fields",
	});

	const [moreInfo, setMoreInfo] = useState<string[]>([]);

	function toggleMoreInfo(id: string) {
		if (moreInfo.find((s) => s === id))
			setMoreInfo(moreInfo.filter((s) => s !== id));
		else setMoreInfo(moreInfo.concat([id]));
	}

	return (
		<TableBody>
			{form.getValues("fields").map((field, idx) => (
				<>
					<TableRow key={field.id}>
						<TableCell>
							<FiArrowUp
								size={22}
								className="cursor-pointer"
								onClick={() => move(idx, idx - 1)}
							/>
							<FiArrowDown
								size={22}
								className="cursor-pointer"
								onClick={() => move(idx, idx + 1)}
							/>
						</TableCell>
						<TableCell>
							<FormField
								control={form.control}
								name={`fields.${idx}.label`}
								render={({ field }) => (
									<FormItem className="py-1">
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</TableCell>
						<TableCell>
							<FormField
								control={form.control}
								name={`fields.${idx}.key`}
								render={({ field }) => (
									<FormItem className="py-1">
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</TableCell>
						<TableCell>
							<FieldKindComboBox idx={idx} />
						</TableCell>
						<TableCell className="p-4 text-center">
							<FormField
								control={form.control}
								name={`fields.${idx}.required`}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</TableCell>
						<TableCell className="text-center">
							<FiTrash
								className="cursor-pointer"
								size={22}
								onClick={() => remove(idx)}
							/>
						</TableCell>
						<TableCell>
							<HiChevronUpDown
								className="cursor-pointer"
								size={25}
								onClick={() => toggleMoreInfo(field.key)}
							/>
						</TableCell>
					</TableRow>
					<MoreInfo
						moreInfo={moreInfo}
						idx={idx}
						fieldKind={field.kind}
						id={field.key}
					/>
				</>
			))}
		</TableBody>
	);
}
