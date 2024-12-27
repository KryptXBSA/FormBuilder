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
import { ChevronDown, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const variantMap = {
	text: textFieldVariants,
	number: numberFieldVariants,
	boolean: booleanFieldVariants,
	date: dateFieldVariants,
	file: fileFieldVariants,
	enum: selectionFieldVariants,
} as const;

export function AddFieldAccordion({
	field,
}: {
	field: {
		label: string;
		kind: FieldKind;
	};
}) {
	const state = useAppState();
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<AccordionItem
			className="rounded-md border-2"
			key={field.label}
			value={field.kind}
		>
			<AccordionTrigger
				onClick={() => {
					setIsOpen(!isOpen);
					if (state.chosenField) {
						state.setAppState({
							renderContent: !state.renderContent,
							chosenField: undefined,
						});
					}
				}}
				className={cn("p-1 hover:no-underline", {
					"border-b-2": isOpen,
				})}
			>
				{field.label}
				<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
			</AccordionTrigger>
			<AccordionContent className="p-1">
				<div className="flex flex-col gap-2">
					{variantMap[field.kind]?.map((variant) => (
						<React.Fragment key={variant.value}>
							{!state.renderContent &&
							state.chosenField?.variant === variant.value ? (
								<Button
									variant="destructive"
									// className="hover:bg-red-500 bg-red-500 transition-colors duration-300"
									onClick={() => {
										state.setAppState({
											renderContent: !state.renderContent,
											chosenField: undefined,
										});
									}}
								>
									<XIcon />
								</Button>
							) : (
								<Button
									variant="outline"
									onClick={() => {
										if (state.chosenField) {
											state.setAppState({
												chosenField: {
													kind: field.kind,
													variant: variant.value,
												},
											});
										} else {
											state.setAppState({
												renderContent: !state.renderContent,
												chosenField: {
													kind: field.kind,
													variant: variant.value,
												},
											});
										}
									}}
								>
									{variant.label}
								</Button>
							)}
						</React.Fragment>
					))}
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}
