"use client";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useAppState } from "@/state/state";
import type { FormSchema } from "formbuilder-core";
import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function ImportFormModal() {
	const state = useAppState();

	const [fileData, setFileData] = React.useState("");

	function handleImport() {
		if (fileData) {
			const forms: FormSchema[] = JSON.parse(fileData);
			toast(`Successfully imported ${forms.length} forms`);
			state.setAppState({
				...state,
				forms: [...state.forms, ...forms],
			});
		}
	}

	function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files![0];
		if (file) {
			const reader = new FileReader();
			// @ts-ignore
			reader.onload = (e) => setFileData(e.target.result);
			reader.readAsText(file);
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full">
					<Download size={22} />
					Import JSON
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Import JSON</DialogTitle>
				</DialogHeader>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="form">JSON File</Label>
					<Input
						id="jsonFile"
						type="file"
						accept=".json"
						onChange={handleFileChange}
					/>
				</div>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button onClick={handleImport} type="button" variant="secondary">
							Import
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
