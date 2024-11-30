import React, { useEffect, useState } from "react";
import { useAppState } from "@/state/state";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BsPencil } from "react-icons/bs";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const editNameSchema = z.object({
	name: z.string(),
});

export function FormName() {
	const { forms, selectedForm, updateFormName } = useAppState();

	const [editName, setEditName] = useState(false);

	function toggleEdit() {
		setEditName(!editName);
	}

	const form = useForm<z.infer<typeof editNameSchema>>({
		resolver: zodResolver(editNameSchema),
	});

	useEffect(() => {
		forms && form.setValue("name", forms[selectedForm].name);
	}, [selectedForm]);

	function onSubmit(values: z.infer<typeof editNameSchema>) {
		console.log("values", values);
		toggleEdit();
		updateFormName(values.name);
	}
	if (editName) {
		return (
			<>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="flex flex-col gap-4 rounded-md ">
							<div className="flex items-center gap-2 ">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button size="sm" className="h-9 w-16" type="submit">
									Save
								</Button>
							</div>
						</div>
					</form>
				</Form>
			</>
		);
	}
	return (
		<>
			<div className="flex flex-col">
				<h3 className="flex scroll-m-20 items-center gap-1 font-semibold text-2xl tracking-tight">
					{forms?.[selectedForm].name || ""}
					<BsPencil
						onClick={toggleEdit}
						className="mb-1 ml-1 cursor-pointer"
						size={22}
					/>{" "}
				</h3>
				<p className="text-blue-400 text-lg ">
					{forms?.[selectedForm].fields.length || 0} Fields
				</p>
			</div>
		</>
	);
}
