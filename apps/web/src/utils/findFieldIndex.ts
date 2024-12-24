export function findFieldIndex(temp_items: string[][], id: string) {
	for (let i = 0; i < temp_items.length; i++) {
		const index = temp_items[i].indexOf(id);
		if (index !== -1) return { row: i, col: index };
	}
	return null;
}
