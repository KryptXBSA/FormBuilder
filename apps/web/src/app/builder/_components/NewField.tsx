import { Button } from "@/components/ui/button";
import { useAppState } from "@/state/state";
import type { FieldKind } from "formbuilder-core";

export function NewField({ kind }: { kind: FieldKind }) {
	const state = useAppState();
	return (
		<>
			<Button
				onClick={() =>
					state.setAppState({
						renderContent: !state.renderContent,
						chosenField: kind,
					})
				}
			>
				{kind}
			</Button>
		</>
	);
}
