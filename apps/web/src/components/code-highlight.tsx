"use client";
import React, { useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeHighlightProps {
	code?: string;
	inTab?: boolean;
	withExpand?: boolean;
	lang?: "tsx" | "shell";
}

export function CodeHighlight({
	code,
	inTab = false,
	withExpand = false,
	lang = "tsx",
}: CodeHighlightProps) {
	const [copied, setCopied] = useState(false);
	const [expand, setExpanded] = useState(!withExpand);
	return (
		<div className="relative rounded-md">
			<Button
				className={cn(
					"absolute top-4 right-4 h-8 w-8 bg-secondary",
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
			<div
				className={cn(
					"max-h-[130px] overflow-hidden rounded-md",
					expand && "max-h-[400px] overflow-auto",
				)}
			>
				<Highlight className={cn("h-full", lang)}>{code}</Highlight>
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
