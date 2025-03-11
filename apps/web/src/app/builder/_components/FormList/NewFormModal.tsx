import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FrameworkCombobox } from "./FrameworkCombobox";
import { FiPlus } from "react-icons/fi";
import { useAppState } from "@/state/state";
import { randID, type FormFramework } from "formbuilder-core";
import * as React from "react";

export function NewFormModal() {
	const { newForm } = useAppState();

	const [framework, setFramework] = React.useState<FormFramework>("next");

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-32">
					<FiPlus size={22} />
					New Form
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>New Form</DialogTitle>
					<DialogDescription>Choose your Framework</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<FrameworkCombobox value={framework} setValue={setFramework} />
				</div>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						{/* TODO: new form per framework*/}
						<Button
							onClick={() =>
								newForm({
									id: randID(),
									settings: {
										importAliasComponents:
											framework === "next"
												? "@/components/ui"
												: framework === "svelte"
													? "$lib/components/ui"
													: "@/components/ui",
										importAliasUtils:
											framework === "next"
												? "@/lib/utils"
												: framework === "svelte"
													? "$lib/utils.js"
													: "@/lib/utils",
										noDescription: false,
										noPlaceholder: false,
									},
									name: "My Form",
									fields: [
										[
											{
												id: "textField1",
												kind: "text",
												label: "First Text Field",
												key: "firstTextFieldz",
												required: true,
												variant: "next-shadcn-text-input",
												placeholder: "Enter first text",
												validation: { min: 1, max: 10 },
											},
											{
												id: "textField2",
												kind: "text",
												label: "First Text Field",
												key: "firstTextField",
												required: true,
												variant: "next-shadcn-text-input",
												validation: { min: 1, max: 10 },
												placeholder: "Enter first text",
											},
										],
									],
									framework: framework,
								})
							}
							type="button"
							variant="secondary"
						>
							New Form
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
