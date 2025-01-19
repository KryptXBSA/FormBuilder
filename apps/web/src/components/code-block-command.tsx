"use client";

import * as React from "react";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useAppState } from "@/state/state";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";

export interface NpmCommands {
	__npmCommand__?: string;
	__yarnCommand__?: string;
	__pnpmCommand__?: string;
	__bunCommand__?: string;
}

export function CodeBlockCommand({
	__npmCommand__,
	__yarnCommand__,
	__pnpmCommand__,
	__bunCommand__,
}: React.ComponentProps<"pre"> & NpmCommands) {
	const state = useAppState();
	const [hasCopied, setHasCopied] = React.useState(false);

	React.useEffect(() => {
		if (hasCopied) {
			const timer = setTimeout(() => setHasCopied(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [hasCopied]);

	const packageManager = state.packageManager;
	const tabs = React.useMemo(() => {
		return {
			pnpm: __pnpmCommand__,
			npm: __npmCommand__,
			yarn: __yarnCommand__,
			bun: __bunCommand__,
		};
	}, [__npmCommand__, __pnpmCommand__, __yarnCommand__, __bunCommand__]);

	const copyCommand = React.useCallback(() => {
		const command = tabs[packageManager];

		if (!command) {
			return;
		}

		copyToClipboardWithMeta(command);
		setHasCopied(true);
	}, [packageManager, tabs]);

	return (
		<div className="bgzinc-950 relative max-h-[650px] overflow-x-auto rounded-xl ark:bg-zinc-900 bg-[#282C34]">
			<Tabs
				defaultValue={packageManager}
				onValueChange={(value) => {
					state.setAppState({
						packageManager: value as "pnpm" | "npm" | "yarn" | "bun",
					});
				}}
			>
				<div className="g-zinc-900 flex items-center justify-between border-zinc-600 border-b bg-[#282C34] px-3 pt-2.5">
					<TabsList className="h-7 translate-y-[2px] gap-3 bg-transparent p-0 pl-1">
						{Object.entries(tabs).map(([key, value]) => {
							return (
								<TabsTrigger
									key={key}
									value={key}
									className="rounded-none border-transparent border-b bg-transparent p-0 pb-1.5 font-mono text-zinc-400 data-[state=active]:border-b-zinc-50 data-[state=active]:bg-transparent data-[state=active]:text-zinc-50"
								>
									{key}
								</TabsTrigger>
							);
						})}
					</TabsList>
				</div>
				{Object.entries(tabs).map(([key, value]) => {
					return (
						<TabsContent key={key} value={key} className="mt-0">
							<pre className="px-4 py-5">
								<code
									className="relative font-mono text-sm text-white leading-none"
									data-language="bash"
								>
									{value}
								</code>
							</pre>
						</TabsContent>
					);
				})}
			</Tabs>
			<Button
				size="icon"
				variant="ghost"
				className="absolute top-2 right-2.5 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3"
				onClick={copyCommand}
			>
				<span className="sr-only">Copy</span>
				{hasCopied ? <CheckIcon /> : <ClipboardIcon />}
			</Button>
		</div>
	);
}
async function copyToClipboardWithMeta(value: string) {
	navigator.clipboard.writeText(value);
}
