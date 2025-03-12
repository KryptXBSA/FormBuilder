"use client";
import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import type { FormFramework, FrameworkFieldKinds } from "formbuilder-core";
import { AddFieldAccordion } from "./AddFieldAccordion";

export function AddField<F extends FormFramework>({
	fields,
}: {
	fields: {
		label: string;
		kind: FrameworkFieldKinds[F];
	}[];
}) {
	return (
		<div className="flex flex-col px-4">
			<h3 className="w-[212px] scroll-m-20 font-semibold text-2xl tracking-tight">
				Add Field
			</h3>
			<Accordion type="multiple" className="w-full">
				<div className="flex flex-col gap-4">
					{fields.map((f) => (
						<AddFieldAccordion key={f.kind} field={f} />
					))}
				</div>
			</Accordion>
		</div>
	);
}
