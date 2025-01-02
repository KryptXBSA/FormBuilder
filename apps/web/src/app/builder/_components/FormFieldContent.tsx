import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { removeItem } from "@/state/state";
import type { FormFramework, Kind } from "formbuilder-core";
import { colorMap } from "@/lib/colorMap";

export function FormFieldContent({
	id,
	label,
	kind,
}: { id: string; label: string; kind: Kind }) {
	return (
		<div>
			<div className={cn("flex justify-between gap-2 p-2")}>
				<Badge
					variant={"outline"}
					className={cn(
						"font-semibold",
						colorMap[kind]?.label,
						colorMap[kind]?.border,
					)}
				>
					{label}
				</Badge>
				<div className="flex justify-between gap-2">
					<Button
						onClick={() => removeItem(id)}
						data-no-dnd={true}
						variant={"ghost"}
						className="-ml-2 h-auto p-1 text-secondary-foreground/50 hover:bg-red-500"
					>
						<Trash />
					</Button>
					<Button
						data-no-dnd={true}
						variant={"ghost"}
						className="-ml-2 h-auto p-1 text-secondary-foreground/50"
					>
						<Settings />
					</Button>
				</div>
			</div>
		</div>
	);
}
