import React from "react";
import { useAppState } from "@/state/state";
import { FiPlus, FiTrash } from "react-icons/fi";

import { Button } from "@/components/ui/button";

export function FormList() {
	const { forms, newForm, selectForm, deleteForm } = useAppState();

	return (
		<ul className="mt-20 flex flex-col gap-2">
			{forms?.map((f, idx) => (
				<li className="flex gap-2" key={idx}>
					<Button
						className="flex w-32 flex-col"
						onClick={() => selectForm(idx)}
					>
						<p>{f.name}</p>
						{f.framework}
					</Button>
					<Button
						onClick={() => deleteForm(idx)}
						variant="ghost"
						className="hover:bg-red-500"
					>
						<FiTrash size={24} />
					</Button>
				</li>
			))}
			<Button
				className="w-32"
				// TODO: add framework
				onClick={() =>
					newForm({
						id: 1,
						settings: { importAliasComponents: "a", importAliasUtils: "a" },
						name: "My Form",
						fields: [
							[
								{
									id: "textField1",
									kind: "text",
									label: "First Text Field",
									key: "firstTextFieldz",
									required: true,
									variant: "next-shadcn-text-input",
									placeholder: "Enter first text",
									validation: { min: 1, max: 10 },
								},
								{
									id: "textField2",
									kind: "text",
									label: "First Text Field",
									key: "firstTextField",
									required: true,
									variant: "next-shadcn-text-input",
									validation: { min: 1, max: 10 },
									placeholder: "Enter first text",
								},
							],
						],
						framework: "next",
					})
				}
			>
				<FiPlus size={22} />
				New Form
			</Button>
		</ul>
	);
}
