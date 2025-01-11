"use client";
import type React from "react";
import { H4 } from "@/components/ui/heading-with-anchor";
import { CodeHighlight } from "@/components/code-highlight";
import { CodeBlockCommand } from "@/components/code-block-command";
import { useAppState } from "@/state/state";
import { generateCode, getRequiredComponents } from "formbuilder-core";

interface StepperProps {
	children?: React.ReactNode;
	title?: string;
	step?: number;
}
const Stepper = ({ title, children, step }: StepperProps) => {
	return (
		<div>
			<div className="flex items-center gap-3">
				<span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 p-3 text-primary dark:text-primary-foreground">
					{step}
				</span>
				<H4>{title}</H4>
			</div>
			<div className="my-3 ml-5 border-l-2 border-l-gray-200 pl-8">
				{children}
			</div>
		</div>
	);
};

export function CodeSteppers() {
	const state = useAppState();

	let requiredComponents = "shadcn-ui@latest add ";
	for (const i of getRequiredComponents(
		state.currentForm.framework,
		state.currentForm.fields,
	)) {
		requiredComponents += `${i} `;
	}

	return (
		<>
			<div>
				<Stepper
					title="Add the following components to your project if you don't have it."
					step={1}
				>
					<CodeBlockCommand
						__npmCommand__={`npx ${requiredComponents}`}
						__bunCommand__={`bunx ${requiredComponents}`}
						__pnpmCommand__={`pnpm dlx ${requiredComponents}`}
						__yarnCommand__={`npx ${requiredComponents}`}
					/>
				</Stepper>
				<Stepper
					title="Copy and paste the following code into your project."
					step={2}
				>
					<CodeHighlight
						code={generateCode(
							state.currentForm.framework,
							state.currentForm.fields,
						)}
						withExpand
					/>
				</Stepper>
				<Stepper
					title="Update the import paths to match your project setup."
					step={3}
				/>
			</div>
		</>
	);
}
