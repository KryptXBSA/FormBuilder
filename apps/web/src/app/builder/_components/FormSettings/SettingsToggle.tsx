import React from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useAppState } from "@/state/state";

interface SettingsToggleProps {
	onClick: any;
}

export function SettingsToggle({ onClick }: SettingsToggleProps) {
	const state = useAppState();
	return (
		<div className="flex justify-between px-24 pb-4">
			<div className="-space-y-1.5">
				<h3 className="scroll-m-20 font-semibold text-2xl tracking-tight">
					{state.currentForm.name}
				</h3>
				<p className="font-semibold text-muted-foreground text-sm">
					{state.currentForm.fields.reduce(
						(acc, row) =>
							acc + row.filter((field) => field.kind !== "heading").length,
						0,
					)}
					&nbsp;Fields
				</p>
			</div>
			<Button
				variant={
					state.builderContent === "formSettings" ? "default" : "outline"
				}
				className="gap-1"
				onClick={onClick}
			>
				<Settings />
				Settings
			</Button>
		</div>
	);
}
