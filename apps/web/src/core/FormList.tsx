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
					<Button className="flex w-32 flex-col" onClick={() => selectForm(idx)}>
						<p>{f.name}</p>
						{f.framework}
					</Button>
					<Button variant="ghost" className="hover:bg-red-500">
						<FiTrash size={24} onClick={() => deleteForm(idx)} />
					</Button>
				</li>
			))}
			<Button
				className="w-32"
				// TODO: add framework
				onClick={() =>
					newForm({
						id: 1,
						settings: { importAlias: "a", mode: "a" },
						name: "My Form",
						fields: [],
						framework: "react",
					})
				}
			>
				<FiPlus size={22} />
				New Form
			</Button>
		</ul>
	);
}
