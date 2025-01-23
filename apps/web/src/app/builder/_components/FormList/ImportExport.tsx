import { Button } from "@/components/ui/button";
import { useAppState } from "@/state/state";
import { Upload } from "lucide-react";
import { ImportFormModal } from "./ImportFormModal";

export function ImportExport() {
	const state = useAppState();

	function handleExport() {
		const jsonString = JSON.stringify(state.forms, null, 2);
		const blob = new Blob([jsonString], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `FormBuilder-forms-${new Date().toISOString().split('T')[0]}.json`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	return (
		<div className="flex w-full flex-col gap-2 pr-4">
			<Button className="w-full" onClick={handleExport}>
				<Upload size={22} />
				Export JSON
			</Button>
			<ImportFormModal />
		</div>
	);
}
