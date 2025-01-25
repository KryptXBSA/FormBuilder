"use client";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useState } from "react";
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
	loc?: number;
	inTab?: boolean;
	withExpand?: boolean;
	lang?: "tsx" | "shell";
}

export function CodeHighlight({
	code,
	loc,
	framework,
	inTab = false,
	withExpand = false,
	lang = "tsx",
}: CodeHighlightProps) {
	const { currentForm } = useAppState();
	const [copied, setCopied] = useState(false);
	const [expand, setExpanded] = useState(!withExpand);
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
					navigator.clipboard.writeText(code || "");
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
				<div className="flex w-fit items-center gap-2 rounded-lg rounded-b-none border-2 border-[#282C34] bg-[#282C34] px-2 py-1.5">
					{framework === "vue" ? (
						<>
							<Icons.vue />
							<p className="font-semibold text-muted-foreground text-sm">
								MyForm.vue
							</p>
						</>
					) : framework === "next" ? (
						<>
							<Icons.next />
							<p className="font-semibold text-muted-foreground text-sm">
								MyForm.tsx
							</p>
						</>
					) : framework === "svelte" ? (
						<>
							<Icons.Svelte />
							<p className="font-semibold text-muted-foreground text-sm">
								MyForm.svelte
							</p>
						</>
					) : null}
				</div>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<p className="mr-2 font-bold text-black text-sm dark:text-muted-foreground">
								{loc} LOC
							</p>
						</TooltipTrigger>
						<TooltipContent>
							<p>{loc} lines of code</p>
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
				<Highlight className={cn("h-full max-w-[1000px]", lang)}>{code}</Highlight>
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
