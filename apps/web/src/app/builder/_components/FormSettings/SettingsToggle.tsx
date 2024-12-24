import React from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useAppState } from "@/state/state";

interface SettingsToggleProps {
	showSettings: boolean;
	setShowSettings: (value: boolean) => void;
}

export function SettingsToggle({
	showSettings,
	setShowSettings,
}: SettingsToggleProps) {
	const state = useAppState();
	return (
		<div className="flex justify-between p-2 px-24">
			<h3 className="scroll-m-20 font-semibold text-2xl tracking-tight">
				{state.currentForm.name}
			</h3>
			<Button className="gap-1" onClick={() => setShowSettings(!showSettings)}>
				<Settings />
				Settings
			</Button>
		</div>
	);
}
