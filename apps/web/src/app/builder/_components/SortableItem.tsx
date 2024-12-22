import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useAppState } from "@/state/state";
import { FormFieldContent } from "./FormFieldContent";
import { AddNewFieldArrows } from "./AddNewFieldArrows";

interface TaskCardProps {
	id: string;
	value: string;
	isOverlay?: boolean;
}

export type TaskType = "Task";

// export interface TaskDragData {
//   type: TaskType;
//   task: Task;
// }

export function SortableItem({ id, value, isOverlay }: TaskCardProps) {
	const {
		setNodeRef,
		attributes,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({
		id: id,
		animateLayoutChanges: () => false,
	});

	const style = {
		transition,
		transform: CSS.Translate.toString(transform),
	};

	const state = useAppState();
	const variants = cva("h-fit w-full rounded-lg border-2", {
		variants: {
			drop: { default: "" },
			dragging: {
				over: "opacity-30 ring-2",
				overlay: "ring-2 ring-primary",
			},
		},
	});

	return (
		<>
			{state.renderContent ? (
				<div
					ref={setNodeRef}
					{...attributes}
					{...listeners}
					style={style}
					className={cn(
						variants({
							drop: "default",
							dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
						}),
					)}
				>
					<FormFieldContent id={id} />
				</div>
			) : (
				<div className="w-full">
					<AddNewFieldArrows />
				</div>
			)}
		</>
	);
}
