import React from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { FiPlus } from "react-icons/fi";
import type { FormFramework } from "formbuilder-core";
import { randID } from "formbuilder-core";
import { FrameworkCombobox } from "@/components/shared/FrameworkCombobox";
import { MinimalTemplateCard } from "@/components/shared/TemplateCard";
import { TEMPLATES } from "@/app/templates/templates";
import { useAppState } from "@/state/state";

export function NewFormModal() {
	const { newForm, selectForm } = useAppState();
	const [open, setOpen] = React.useState(false);
	const [framework, setFramework] = React.useState<FormFramework>("next");

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					className="flex w-full items-center gap-2 transition-colors"
					size="sm"
				>
					<FiPlus size={18} />
					<span>New Form</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="gap-0 sm:max-w-[600px]">
				<DialogHeader>
					<DialogTitle>New Form</DialogTitle>
					<DialogDescription>Choose your Framework</DialogDescription>
				</DialogHeader>
				<div className="mb-4 flex items-center space-x-2">
					<FrameworkCombobox value={framework} setValue={setFramework} />
				</div>

				<div className="space-y-4">
					<h3 className="font-medium text-sm">Templates</h3>
					<div className="grid grid-cols-2 gap-3 md:grid-cols-3">
						{TEMPLATES.filter((template) =>
							template.frameworks.includes(framework),
						).map((template) => (
							<MinimalTemplateCard
								key={template.id}
								template={template}
								framework={framework}
								onSelect={(schema) => {
									newForm(schema);
									selectForm(schema.id);
									setOpen(false);
								}}
							/>
						))}
					</div>
				</div>

				<div className="mt-4">
					<h3 className="mb-2 font-medium text-sm">Or start from scratch</h3>
					<DialogClose asChild>
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
												variant: `${framework}-shadcn-text-input`,
												placeholder: "Enter first text",
												validation: { min: 1, max: 10 },
											},
											{
												id: "textField2",
												kind: "text",
												label: "First Text Field",
												key: "firstTextField",
												required: true,
												variant: `${framework}-shadcn-text-input`,
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
							className="w-full"
						>
							New Empty Form
						</Button>
					</DialogClose>
				</div>
			</DialogContent>
		</Dialog>
	);
}
