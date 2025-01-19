"use client";
import React, { useEffect, useState } from "react";
import { useAppState } from "@/state/state";
import { CodeHighlight } from "@/components/code-highlight";
import { CodeBlockCommand } from "@/components/code-block-command";
import { type CodegenResult, getRequiredComponents } from "formbuilder-core";

export function Code() {
	const state = useAppState();
	const [codeGenResult, setCodeGenResult] = useState<CodegenResult | null>(
		null,
	);

	useEffect(() => {
		setCodeGenResult({
			code: `import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`,
			loc: 10,
		});
		// generateCode(state.currentForm.framework, state.currentForm).then((res) => {
		// 	setCodeGenResult(res);
		// });
	}, [state.currentForm]);

	let requiredComponents = "";
	switch (state.currentForm.framework) {
		case "next":
			requiredComponents = "shadcn@latest add ";
			break;
		case "vue":
			requiredComponents = "shadcn-vue@latest add ";
			break;
		case "svelte":
			requiredComponents = "shadcn-svelte@next add ";
			break;
	}
	for (const i of getRequiredComponents(
		state.currentForm.framework,
		state.currentForm.fields,
	)) {
		requiredComponents += `${i} `;
	}
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
				__npmCommand__={`npx ${requiredComponents}`}
				__bunCommand__={`bunx --bun ${requiredComponents}`}
				__pnpmCommand__={`pnpm dlx ${requiredComponents}`}
				__yarnCommand__={`npx ${requiredComponents}`}
			/>

			<h3 className="scroll-m-20 font-semibold text-2xl tracking-tight">
				Copy and paste the following code into your project.
			</h3>
			<CodeHighlight
				code={codeGenResult?.code}
				withExpand
				loc={codeGenResult?.loc}
				framework={state.currentForm.framework}
			/>
		</div>
	);
}
