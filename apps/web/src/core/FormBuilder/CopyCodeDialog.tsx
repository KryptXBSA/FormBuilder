import { useState } from "react";
import { generateCode } from "formbuilder-core";
import type { FormSchema } from "formbuilder-core";
import { useAppState } from "@/state/state";
import { checkDuplicates } from "formbuilder-core";
import type { UseFormReturn } from "react-hook-form";

import { getRequiredComponents } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { CopyTextBtn } from "@/components/shared/CopyTextBtn";
import Link from "next/link";

export function GenerateCodeDialog({
	form,
}: {
	form: UseFormReturn<FormSchema>;
}) {
	const { toast } = useToast();

	const [generatedCode, setGeneratedCode] = useState("");
	const [dialogOpen, setDialogOpen] = useState(false);

	const state = useAppState();
	const selectedForm = state.forms[state.selectedForm];

	let requiredComponents = "npx shadcn-ui@latest add ";
	for (const i of getRequiredComponents(selectedForm.fields)) {
		requiredComponents += `${i} `;
	}

	function showCodeDialog() {
		// validating that the form has more than one field
		if (form.getValues("fields").length === 0) {
			toast({
				variant: "destructive",
				title: "Form has 0 Fields",
			});
			return;
		}
		const result = checkDuplicates(form.getValues("fields"));
		// validating that the form doesn't have any duplicate field keys or enum keys
		if (result.hasDuplicates) {
			if (result.duplicates.key.length > 0)
				toast({
					variant: "destructive",
					title: "Duplicate Keys found",
					description: result.duplicates.key.toString(),
				});
			if (result.duplicates.enum.length > 0)
				toast({
					variant: "destructive",
					title: "Duplicate Enum Names found",
					description: result.duplicates.enum.toString(),
				});
		} else {
			setDialogOpen(true);
			const code = generateCode(form.getValues());
			setGeneratedCode(code);
		}
	}

	return (
		<Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
			<DialogTrigger>
				<Button variant="secondary" onClick={showCodeDialog}>
					Generate Code
				</Button>
			</DialogTrigger>
			<DialogContent className="fixed w-full max-w-2xl">
				<div className="relative flex flex-col">
					<div className="mt-2 flex flex-col">
						<div className="flex items-center justify-between">
							<div className="my-3 flex flex-col items-start justify-between">
								<p className="font-semibold text-lg">Required Components</p>
								<p className="text-xs">
									These
									<Link
										href="https://ui.shadcn.com/docs/components"
										target="_blank"
										className=" mx-0.5 cursor-pointer rounded-lg border-1 bg-slate-500/50 px-1 py-0.5 text-xs transition-colors hover:bg-slate-500/80"
									>
										shadcn/ui
									</Link>
									components must be installed in your project in order for the
									form to work as expected.
								</p>
							</div>
							<CopyTextBtn text={generatedCode} />
						</div>
						<div className="flex items-center justify-start rounded-lg border-2 p-1">
							<p className="">{requiredComponents}</p>
						</div>
					</div>
					<div className="mt-2 flex flex-col rounded-lg p-1">
						<div className="flex items-center justify-between">
							<div className="my-3 flex flex-col items-start justify-between">
								<p className="font-semibold text-lg">Generated code</p>
								<p className="text-xs">
									Remember to format the code once you&apos;ve pasted it.
								</p>
							</div>
							<CopyTextBtn text={generatedCode} />
						</div>
						<div className="h-[500px] max-w-full overflow-auto rounded-lg border-2 p-1">
							<pre className="max-w-xs">{generatedCode}</pre>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
