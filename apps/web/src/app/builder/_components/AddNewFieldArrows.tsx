import { Button } from "@/components/ui/button";
import { addItem } from "@/state/state";
import {
	ArrowBigUpDash,
	ArrowBigDownDash,
	ArrowBigLeftDash,
	ArrowBigRightDash,
} from "lucide-react";

export function AddNewFieldArrows({ id }: { id: string }) {
	return (
		<div className="flex h-[53px] w-[380px] items-center justify-between">
			<Button
				className="h-full w-[20%] rounded-lg rounded-r-none border-2 border-r-0"
				variant="outline"
				size="icon"
				onClick={() => addItem(id, "left")}
			>
				<ArrowBigLeftDash className="h-5 w-5" />
			</Button>
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
			<Button
				variant="outline"
				className="h-full w-[20%] rounded-lg rounded-l-none border-2 border-l-0"
				size="icon"
				onClick={() => addItem(id, "right")}
			>
				<ArrowBigRightDash className="h-5 w-5" />
				{/* TODO: This is only shown at dev  */}
				{id}
			</Button>
		</div>
	);
}
