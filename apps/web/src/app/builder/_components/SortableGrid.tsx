import { useState } from "react";
import {
	DndContext,
	KeyboardSensor,
	useSensor,
	useSensors,
	DragOverlay,
	rectIntersection,
	type DragEndEvent,
	type DragStartEvent,
	type UniqueIdentifier,
} from "@dnd-kit/core";
import {
	SortableContext,
	sortableKeyboardCoordinates,
	rectSwappingStrategy,
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";
import { MouseSensor } from "./CustomSensor";
import { useAppState } from "@/state/state";
import {
	allFieldVariants,
	allFieldVariantsByKind,
	type FormFramework,
	type FrameworkFieldKinds,
	type FrameworkFieldVariants,
} from "formbuilder-core";

export const SortableGrid = () => {
	const [activeId, setActiveId] = useState<UniqueIdentifier>();
	const state = useAppState();
	const items = state.currentForm.fields;
	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	const handleDragStart = (event: DragStartEvent) => {
		setActiveId(event.active.id);
	};

	const handleDragEnd = (event: DragEndEvent) => {
		// setActiveId(null);
		const { active, over } = event;
		if (!over) return;

		if (active.id !== over.id) {
			let overRowIndex = -1;
			let overColIndex = -1;
			let activeRowIndex = -1;
			let activeColIndex = -1;

			// Find indices
			for (let i = 0; i < items.length; i++) {
				const overIdx = items[i].findIndex((field) => field.id === over.id);
				const activeIdx = items[i].findIndex((field) => field.id === active.id);

				if (overIdx !== -1) {
					overRowIndex = i;
					overColIndex = overIdx;
				}
				if (activeIdx !== -1) {
					activeRowIndex = i;
					activeColIndex = activeIdx;
				}
			}

			// If active is not in the list but we found over position
			// if (activeRowIndex === -1 && overRowIndex !== -1) {
			// 	const newItems = items.map((row) => [...row]);
			// 	// Insert active.id before over.id
			// 	// newItems[overRowIndex].splice(overColIndex, 0, active.id as string);
			// 	return newItems;
			// }

			// Normal swap if both items are in the list
			if (overRowIndex !== -1 && activeRowIndex !== -1) {
				const newItems = items.map((row) => [...row]);
				newItems[overRowIndex][overColIndex] =
					items[activeRowIndex][activeColIndex];

				newItems[activeRowIndex][activeColIndex] =
					items[overRowIndex][overColIndex];
				// console.log("should be here", newItems);
				state.updateFormFields(newItems);
				// return newItems;
			}

			// return items;
		}
		// console.log("items xxxxxxx", items);
	};

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={rectIntersection}
			onDragEnd={handleDragEnd}
			// onDragMove={handleDragEnd}
			onDragStart={handleDragStart}
		>
			<div className="flex w-full justify-center">
				<div className="flex w-fit max-w-[1100px] flex-col gap-2 overflow-x-auto rounded-lg border-2 border-slate-500 bg-secondary p-4">
					<SortableContext items={items.flat()} strategy={rectSwappingStrategy}>
						{items.map((row, idx) => (
							<div key={idx} className="flex gap-2">
								{row.map((formField) => (
									<SortableItem
										key={formField.id}
										id={formField.id}
										kind={formField.kind}
										label={findLabel<typeof state.currentForm.framework>(
											formField.variant,
											formField.kind,
										)}
									/>
								))}
							</div>
						))}
						<DragOverlay>
							{activeId ? (
								<SortableItem
									isOverlay
									// @ts-ignore
									id={items.filter((id) => id === activeId)}
									// @ts-ignore
									value={items.filter((id) => id === activeId)}
								/>
							) : null}
						</DragOverlay>
					</SortableContext>
				</div>
			</div>
		</DndContext>
	);
};

function findLabel<F extends FormFramework>(
	variant: FrameworkFieldVariants[F],
	kind: FrameworkFieldKinds[F],
): string {
	const foundVariant = allFieldVariantsByKind[kind].find(
		(field) => field.value === variant,
	);
	return foundVariant?.label!;
}
