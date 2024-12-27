"use client";
import * as React from "react";
import { useAppState } from "@/state/state";
import {
	textFieldVariants,
	numberFieldVariants,
	booleanFieldVariants,
	dateFieldVariants,
	fileFieldVariants,
	selectionFieldVariants,
	type FieldKind,
} from "formbuilder-core";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddFieldAccordion } from "./AddFieldAccordion";

export function AddField({
	fields,
}: {
	fields: {
		label: string;
		kind: FieldKind;
	}[];
}) {
	return (
		<div className="mt-10 flex flex-col">
			<h3 className="w-[250px] scroll-m-20 font-semibold text-2xl tracking-tight">
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
