import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useAppState } from "@/state/state";
import { FormFieldContent } from "./FormFieldContent";
import { AddNewFieldArrows } from "./AddNewFieldArrows";
import type { Kind } from "formbuilder-core";

interface FormFieldProps {
	id: string;
	label: string;
	isOverlay?: boolean;
	kind: Kind;
}

export function SortableItem({ id, label, isOverlay, kind }: FormFieldProps) {
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
	const variants = cva("h-[53px] h-fit min-w-[380px] rounded-lg border-2", {
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
					<FormFieldContent kind={kind} id={id} label={label} />
				</div>
			) : (
				<div className="">
					<AddNewFieldArrows kind={kind} id={id} />
				</div>
			)}
		</>
	);
}
