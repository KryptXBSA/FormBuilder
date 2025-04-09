"use client";
import React from "react";
import { useAppState } from "@/state/state";
import { FiPlus, FiTrash, FiFile } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { NewFormModal } from "./NewFormModal";
import { Icons } from "@/components/icons";
import { ImportExport } from "./ImportExport";

export function FormList() {
	const { forms, selectForm, deleteForm, selectedForm } = useAppState();

	return (
		<div className="flex h-full flex-col p-4">
			<div className="mb-4 border-gray-800 border-b pb-2">
				<h2 className="scroll-m-20 font-semibold text-2xl tracking-tight">
					My Forms
				</h2>
				<p className="-mt-1 font-semibold text-gray-400 text-sm">
					{forms?.length || 0} forms
				</p>
			</div>

			<ul className="flex flex-grow flex-col gap-2 overflow-y-auto">
				{forms?.map((f, idx) => {
					const isSelected = idx === selectedForm;
					return (
						<li className="group flex items-center" key={idx}>
							<Button
								className={`flex flex-1 items-center justify-start rounded-l-md px-3 py-2 transition-colors ${
									isSelected
										? "bg-gray-800 text-white"
										: "bg-transparent hover:bg-gray-800/50"
								}`}
								variant="ghost"
								onClick={() => selectForm(f.id)}
							>
								<span className="mr-2">
									{f.framework === "vue" ? (
										<Icons.vue className="h-4 w-4" />
									) : f.framework === "next" ? (
										<Icons.next className="h-4 w-4" />
									) : f.framework === "svelte" ? (
										<Icons.Svelte className="h-4 w-4" />
									) : (
										<FiFile className="h-4 w-4" />
									)}
								</span>
								<p className="truncate">{f.name}</p>
							</Button>
							<Button
								onClick={() => deleteForm(idx)}
								variant="ghost"
								className={`rounded-r-md p-2 text-gray-400 transition-colors hover:bg-red-500/20 hover:text-white ${
									isSelected ? "" : ""
								}`}
								aria-label={`Delete ${f.name}`}
							>
								<FiTrash size={16} />
							</Button>
						</li>
					);
				})}
			</ul>

			<div className="mt-4 space-y-2 border-gray-800 border-t pt-4">
				<NewFormModal />
				<ImportExport />
			</div>
		</div>
	);
}
