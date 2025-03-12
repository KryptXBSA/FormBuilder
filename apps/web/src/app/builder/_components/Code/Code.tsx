"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React, { useEffect, useState } from "react";
import { useAppState } from "@/state/state";
import { CodeHighlight } from "@/components/code-highlight";
import { CodeBlockCommand } from "@/components/code-block-command";
import {
	type CodegenResult,
	generateCode,
	getRequiredComponents,
} from "formbuilder-core";
import { AlertCircle } from "lucide-react";
import { IGNORED_CLI_COMPONENTS } from "@/constants";
import { COMPONENTS } from "formbuilder-core/src/components";

export function Code() {
	const state = useAppState();
	const [codeGenResult, setCodeGenResult] = useState<CodegenResult | null>(
		null,
	);
	const [installRequirements, setInstallRequirements] = useState("");
	const [ignoredComponentsCount, setIgnoredComponentsCount] = useState(0);

	useEffect(() => {
		generateCode(state.currentForm.framework, state.currentForm).then((res) => {
			setCodeGenResult(res);
		});
		let requirements = "";
		const requiredComponents = getRequiredComponents(
			state.currentForm.framework,
			state.currentForm.fields,
		);

		let ignoredCount = 0;
		for (const i of requiredComponents) {
			if (IGNORED_CLI_COMPONENTS.includes(i)) {
				ignoredCount++;
				continue;
			}
			requirements += `${i} `;
		}

		switch (state.currentForm.framework) {
			case "next":
				requirements = `shadcn@latest add ${requirements}`;
				break;
			case "vue":
				requirements = `shadcn-vue@latest add ${requirements}`;
				break;
			case "svelte":
				requirements = `shadcn-svelte@next add ${requirements}`;
				break;
		}

		setIgnoredComponentsCount(ignoredCount);
		setInstallRequirements(requirements);
	}, [state.currentForm]);

	return (
		<div className="flex flex-col">
			<div className="-space-y-1 ml-1 flex flex-col">
				<h3 className="scroll-m-20 font-semibold text-2xl tracking-tight">
					Prerequisites
				</h3>
				<p className="text-muted-foreground text-sm">
					Install these components if missing from your project.
				</p>
			</div>

			<CodeBlockCommand
				__npmCommand__={`npx ${installRequirements}`}
				__bunCommand__={`bunx --bun ${installRequirements}`}
				__pnpmCommand__={`pnpm dlx ${installRequirements}`}
				__yarnCommand__={`npx ${installRequirements}`}
			/>
			{ignoredComponentsCount > 0 && (
				<Alert className="my-4" variant="warning">
					<AlertCircle className="mt-1 h-5 w-5" />
					<AlertTitle className="text-lg">
						The following components are not official shadcn/ui components:
					</AlertTitle>
					<AlertDescription className="flex flex-col gap-2">
						{state.currentForm.fields
							.flat()
							.filter((field) =>
								IGNORED_CLI_COMPONENTS.includes(
									COMPONENTS[field.variant]?.cli[0],
								),
							)
							.map((field) => {
								const component = COMPONENTS[field.variant];
								return (
									<div key={field.id}>
										{component.label}:{" "}
										{field.variant === "next-originui-text-password" && (
											<a
												href="https://originui.com/inputs"
												target="_blank"
												rel="noopener noreferrer"
												className="underline decoration-1 hover:underline"
											>
												https://originui.com/inputs
											</a>
										)}
										{field.variant ===
											"next-shadcnexpansion-text-autoresizetextarea" && (
											<a
												href="https://shadcnui-expansions.typeart.cc/docs/autosize-textarea"
												target="_blank"
												rel="noopener noreferrer"
												className="underline decoration-1 hover:underline"
											>
												https://shadcnui-expansions.typeart.cc/docs/autosize-textarea
											</a>
										)}
										{field.variant === "next-originui-text-inputtag" && (
											<a
												href="https://originui.com/inputs"
												target="_blank"
												rel="noopener noreferrer"
												className="underline decoration-1 hover:underline"
											>
												https://originui.com/inputs
											</a>
										)}
										{field.variant === "next-shadcn-number-phone" && (
											<a
												href="https://shadcn-phone-input.vercel.app"
												target="_blank"
												rel="noopener noreferrer"
												className="underline decoration-1 hover:underline"
											>
												https://shadcn-phone-input.vercel.app
											</a>
										)}
										{field.variant ===
											"next-shadcnexpansion-number-dualslider" && (
											<a
												href="https://shadcnui-expansions.typeart.cc/docs/dual-range-slider"
												target="_blank"
												rel="noopener noreferrer"
												className="underline decoration-1 hover:underline"
											>
												https://shadcnui-expansions.typeart.cc/docs/dual-range-slider
											</a>
										)}
									</div>
								);
							})}
					</AlertDescription>
				</Alert>
			)}
			<h3 className="scroll-m-20 font-semibold text-2xl tracking-tight">
				Copy and paste the following code into your project.
			</h3>
			<CodeHighlight
				code={codeGenResult?.code}
				withExpand
				loc={codeGenResult?.loc}
				schema={codeGenResult?.schema}
				framework={state.currentForm.framework}
			/>
		</div>
	);
}
