import { Button } from "@/components/ui/button";
import { useAppState } from "@/state/state";
import { Upload, Download } from "lucide-react";
import { ImportFormModal } from "./ImportFormModal";

export function ImportExport() {
	const state = useAppState();

	function handleExport() {
		const jsonString = JSON.stringify(state.forms, null, 2);
		const blob = new Blob([jsonString], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `FormBuilder-forms-${new Date().toISOString().split("T")[0]}.json`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	return (
		<div className="flex w-full gap-2">
			<Button
				className="flex flex-1 items-center justify-center gap-2 transition-colors"
				size="sm"
				onClick={handleExport}
			>
				<Download size={16} />
				<span>Export</span>
			</Button>
			<ImportFormModal />
		</div>
	);
}
