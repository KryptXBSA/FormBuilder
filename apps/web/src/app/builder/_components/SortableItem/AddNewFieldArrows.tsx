import { Button } from "@/components/ui/button";
import { useAppState } from "@/state/state";
import type { Kind } from "formbuilder-core";
import {
	ArrowBigUpDash,
	ArrowBigDownDash,
	ArrowBigLeftDash,
	ArrowBigRightDash,
} from "lucide-react";

export function AddNewFieldArrows({ id, kind }: { id: string; kind: Kind }) {
	const { addItem, chosenField } = useAppState();
	const hideXArrows = !(kind === "heading" || chosenField?.kind === "heading");
	return (
		<div className="flex h-[53px] w-[380px] items-center justify-between">
			{hideXArrows && (
				<Button
					className="h-full w-[20%] rounded-lg rounded-r-none border-2 border-r-0"
					variant="outline"
					size="icon"
					onClick={() => addItem(id, "left")}
				>
					<ArrowBigLeftDash className="h-5 w-5" />
				</Button>
			)}
			<div className="flex h-full w-full flex-col justify-between">
				<Button
					variant="outline"
					className="h-full w-full rounded-none border-t-2 border-b-0"
					size="icon"
					onClick={() => addItem(id, "up")}
				>
					<ArrowBigUpDash className="h-5 w-5" />
				</Button>
				<Button
					variant="outline"
					className="h-full w-full rounded-none border-b-2"
					size="icon"
					onClick={() => addItem(id, "down")}
				>
					<ArrowBigDownDash className="h-5 w-5" />
				</Button>
			</div>
			{hideXArrows && (
				<Button
					variant="outline"
					className="h-full w-[20%] rounded-lg rounded-l-none border-2 border-l-0"
					size="icon"
					onClick={() => addItem(id, "right")}
				>
					<ArrowBigRightDash className="h-5 w-5" />
				</Button>
			)}
		</div>
	);
}
