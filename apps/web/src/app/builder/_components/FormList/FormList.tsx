"use client";
import React from "react";
import { useAppState } from "@/state/state";
import { FiPlus, FiTrash } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { NewFormModal } from "./NewFormModal";
import { Icons } from "@/components/icons";
import { ImportExport } from "./ImportExport";

export function FormList() {
	const { forms, selectForm, deleteForm } = useAppState();

	return (
		<ul className="bg[#1D1E2B] flex flex-col gap-2 pt-2 pl-5">
			{forms?.map((f, idx) => (
				<li className="flex gap-2" key={idx}>
					<Button
						className="flex w-32 justify-start"
						onClick={() => selectForm(idx)}
					>
						{f.framework === "vue" ? (
							<>
								<Icons.vue />
							</>
						) : f.framework === "next" ? (
							<>
								<Icons.next />
							</>
						) : f.framework === "svelte" ? (
							<>
								<Icons.Svelte />
							</>
						) : null}
						<p className="truncate">{f.name}</p>
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
			<NewFormModal />
			<ImportExport />
		</ul>
	);
}
