"use client";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import type React from "react";
import { useState, useEffect } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FormFramework } from "formbuilder-core";
import { useAppState } from "@/state/state";
import { Icons } from "./icons";
interface CodeHighlightProps {
	framework?: FormFramework;
	code?: string;
	schema?: string;
	loc?: number;
	inTab?: boolean;
	withExpand?: boolean;
	lang?: "tsx" | "shell";
}

// TODO: this component is a mess, need to refactor it
export function CodeHighlight({
	code,
	loc,
	schema,
	framework,
	inTab = false,
	withExpand = false,
	lang = "tsx",
}: CodeHighlightProps) {
	const [copied, setCopied] = useState(false);
	const [expand, setExpanded] = useState(!withExpand);
	const [activeTab, setActiveTab] = useState(
		framework === "svelte" ? "my-form.svelte" : null,
	);
	const [activeCode, setActiveCode] = useState<string | null>(null);

	const svelteSchemaCode = `import { z } from "zod";

export ${schema}

export type FormSchema = typeof formSchema;
`;

	useEffect(() => {
		const getActiveCode = () => {
			if (framework === "next") {
				return code;
			}
			if (framework === "vue") {
				return code;
			}

			if (framework === "svelte") {
				switch (activeTab) {
					case "my-form.svelte":
						return code;
					case "+page.svelte":
						return sveltePageCode;
					case "schema.ts":
						return svelteSchemaCode;
					default:
						return svelteServerCode;
				}
			}

			return null;
		};

		setActiveCode(getActiveCode()!);
	}, [
		framework,
		activeTab,
		code,
		sveltePageCode,
		svelteSchemaCode,
		svelteServerCode,
	]);

	return (
		<div className="relative rounded-md">
			<Button
				className={cn(
					"absolute top-10 right-4 h-8 w-8 bg-secondary",
					(inTab || lang === "shell") && "top-1 right-1",
				)}
				variant="ghost"
				size="icon"
				onClick={() => {
					navigator.clipboard.writeText(activeCode || "");
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, 3000);
				}}
			>
				{copied ? (
					<Check className="h-4 w-4 text-green-600 dark:text-green-500" />
				) : (
					<Copy className="h-4 w-4" />
				)}
			</Button>

			<div className="flex items-end justify-between">
				<div className="flex items-center gap-1">
					{framework === "vue" && (
						<Tab
							icon={Icons.vue}
							label="MyForm.vue"
							isActive={false}
							onSelect={() => {}}
							disableHighlight
						/>
					)}
					{framework === "next" && (
						<Tab
							icon={Icons.react}
							label="MyForm.tsx"
							isActive={false}
							onSelect={() => {}}
							disableHighlight
						/>
					)}
					{framework === "svelte" && (
						<>
							<Tab
								icon={Icons.Svelte}
								label="my-form.svelte"
								isActive={activeTab === "my-form.svelte"}
								onSelect={setActiveTab}
							/>
							<Tab
								icon={Icons.Svelte}
								label="+page.svelte"
								isActive={activeTab === "+page.svelte"}
								onSelect={setActiveTab}
							/>
							<Tab
								icon={Icons.typescript}
								label="schema.ts"
								isActive={activeTab === "schema.ts"}
								onSelect={setActiveTab}
							/>
							<Tab
								icon={Icons.typescript}
								label="+page.server.ts"
								isActive={activeTab === "+page.server.ts"}
								onSelect={setActiveTab}
							/>
						</>
					)}
				</div>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<p className="mr-2 font-bold text-black text-sm dark:text-muted-foreground">
								{activeCode?.split("\n").length} LOC
							</p>
						</TooltipTrigger>
						<TooltipContent>
							<p>{activeCode?.split("\n").length} lines of code</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<div
				className={cn(
					"max-h-[130px] overflow-hidden rounded-md rounded-tl-none",
					expand && "max-h-[400px] overflow-auto",
				)}
			>
				<Highlight className={cn("h-full max-w-[1000px]", lang)}>
					{activeCode}
				</Highlight>
			</div>

			<div
				className={cn(
					"absolute bottom-2 flex w-full items-center justify-center opacity-30 transition-opacity duration-300 hover:opacity-100",
					inTab && "bottom-0",
					!withExpand && "hidden",
				)}
			>
				<Button
					className={cn("bg-secondary")}
					variant="ghost"
					onClick={() => {
						setExpanded((prev) => !prev);
					}}
				>
					{expand ? "Collapse" : "Expand"}
				</Button>
			</div>
		</div>
	);
}

function Tab({
	icon: Icon,
	label,
	isActive,
	onSelect,
	disableHighlight,
}: {
	icon: React.ElementType;
	label: string;
	isActive: boolean;
	onSelect: (label: string) => void;
	disableHighlight?: boolean;
}) {
	return (
		<div
			onClick={() => onSelect(label)}
			className={cn(
				"flex w-fit items-center gap-2 rounded-lg rounded-b-none border-2 border-[#282C34] bg-[#282C34] px-2 py-1.5 transition-all duration-300",
				!disableHighlight && isActive && "brightness-125",
				!disableHighlight && !isActive && "cursor-pointer hover:brightness-125",
			)}
		>
			<Icon />
			<p className="font-semibold text-muted-foreground text-sm">{label}</p>
		</div>
	);
}

const svelteServerCode = `import type { PageServerLoad, Actions } from "./$types.js";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}
		return {
			form,
		};
	},
};

`;
const sveltePageCode = `<script lang="ts">
import type { PageData } from "./$types.js";
import MyForm from "./my-form.svelte";
const { data }: { data: PageData } = $props();
</script>
    
<MyForm {data} />
`;
