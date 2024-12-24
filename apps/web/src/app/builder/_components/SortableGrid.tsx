import { useState } from "react";
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	DragOverlay,
	closestCorners,
	rectIntersection,
	type DragEndEvent,
	type DragStartEvent,
	type UniqueIdentifier,
} from "@dnd-kit/core";
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	rectSwappingStrategy,
	rectSortingStrategy,
	arraySwap,
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";
import { NewField } from "./NewField";
import { MouseSensor } from "./CustomSensor";
import { useAppState } from "@/state/state";

export const SortableGrid = () => {
	const [activeId, setActiveId] = useState<UniqueIdentifier>();
	const state = useAppState();
	const items = state.temp_items;
	function setItems(items: string[][]) {
		state.setAppState({ temp_items: items });
	}
	// const [items, setItems] = useState(state.temp_items);
	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	const handleDragStart = (event: DragStartEvent) => {
		console.log("active", event.active.id);
		setActiveId(event.active.id);
	};

	const handleDragEnd = (event: DragEndEvent) => {
		// setActiveId(null);
		const { active, over } = event;
		if (!over) return;

		if (active.id !== over.id) {
			setItems((items) => {
				let overRowIndex = -1;
				let overColIndex = -1;
				let activeRowIndex = -1;
				let activeColIndex = -1;

				// Find indices
				for (let i = 0; i < items.length; i++) {
					const overIdx = items[i].indexOf(over.id as string);
					const activeIdx = items[i].indexOf(active.id as string);

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
				if (activeRowIndex === -1 && overRowIndex !== -1) {
					const newItems = items.map((row) => [...row]);
					// Insert active.id before over.id
					newItems[overRowIndex].splice(overColIndex, 0, active.id as string);
					return newItems;
				}

				// Normal swap if both items are in the list
				if (overRowIndex !== -1 && activeRowIndex !== -1) {
					const newItems = items.map((row) => [...row]);
					// @ts-ignore
					newItems[overRowIndex][overColIndex] = active.id;
					// @ts-ignore
					newItems[activeRowIndex][activeColIndex] = over.id;
					return newItems;
				}

				return items;
			});
		}
		console.log("items", items);
	};

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={rectIntersection}
			onDragEnd={handleDragEnd}
			onDragMove={handleDragEnd}
			onDragStart={handleDragStart}
		>
			<div className="flex w-full justify-center">
				<div className="flex w-fit max-w-[1100px] flex-col gap-2 overflow-x-auto rounded-lg border-2 border-slate-500 bg-secondary p-4">
					<SortableContext items={items.flat()} strategy={rectSwappingStrategy}>
						{items.map((row, idx) => (
							<div key={idx} className="flex gap-2">
								{row.map((id) => (
									<SortableItem key={id} id={id} value={id} />
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
