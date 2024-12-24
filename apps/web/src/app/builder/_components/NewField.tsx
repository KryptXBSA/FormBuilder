import { Button } from "@/components/ui/button";
import { useAppState } from "@/state/state";

export function NewField({ text }: { text: string }) {
	const state = useAppState();
	return (
		<>
			<Button
				onClick={() =>
					state.setAppState({ renderContent: !state.renderContent })
				}
			>
				{text}
			</Button>
		</>
	);
}
