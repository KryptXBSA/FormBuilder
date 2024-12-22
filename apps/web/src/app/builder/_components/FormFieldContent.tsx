import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Trash } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function FormFieldContent({ id }: { id: string }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Accordion id={id} className="z-50 h-full" type="single" collapsible>
			<AccordionItem value="item-1">
				<div className={cn("flex justify-between gap-2 px-3 py-3", { "border-b-2": isOpen })}>
					<Badge variant={"outline"} className="font-semibold">
						Task
					</Badge>
					<div className="flex justify-between gap-2">
						<Button
							data-no-dnd={true}
							variant={"ghost"}
							className="-ml-2 h-auto p-1 text-secondary-foreground/50 hover:bg-red-500"
						>
							<Trash />
						</Button>
						<AccordionTrigger asChild className="flex justify-between">
							<Button
								data-no-dnd={true}
								variant={"ghost"}
								className="-ml-2 h-auto p-1 text-secondary-foreground/50"
								onClick={() => {
									setIsOpen(!isOpen);
									console.log(id);
								}}
							>
								<Settings />
							</Button>
						</AccordionTrigger>
					</div>
				</div>
				<AccordionContent className="px-3 py-4">
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
