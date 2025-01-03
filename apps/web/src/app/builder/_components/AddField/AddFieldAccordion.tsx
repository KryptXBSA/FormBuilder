"use client";
import * as React from "react";
import { useAppState } from "@/state/state";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ChevronDown, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	allFieldVariants,
	type Kind,
	type FormFramework,
	type FrameworkFieldKinds,
} from "formbuilder-core";
import { colorMap } from "@/constants";

export function AddFieldAccordion({
	field,
}: {
	field: {
		label: string;
		kind: Kind;
	};
}) {
	const state = useAppState();
	const variantMap = allFieldVariants[state.currentForm.framework];
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
				<div
					className={cn(
						"flex items-center gap-2 px-2",
						colorMap[field.kind].label,
					)}
				>
					{field.label}
					<div
						className={cn(
							"flex h-4 w-4 items-center justify-center rounded-full border p-2 text-center text-sm",
							colorMap[field.kind].border,
						)}
					>
						<span>{variantMap[field.kind].length}</span>
					</div>
				</div>
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
