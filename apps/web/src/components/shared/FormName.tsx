import React from "react";
import { useAppState } from "@/state/state";

export function FormName() {
	const { currentForm } = useAppState();

	return (
		<>
			<div className="flex flex-col">
				<h3 className="flex scroll-m-20 items-center gap-1 font-semibold text-2xl tracking-tight">
					{currentForm.name || "Form Name"}
				</h3>
				<p className="text-blue-400 text-lg ">
					{currentForm.fields.length || 0} Fields
				</p>
			</div>
		</>
	);
}
