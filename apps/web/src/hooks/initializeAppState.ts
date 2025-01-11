import { useEffect } from "react";
import { useAppState } from "@/state/state";

export default function initializeAppState(
	loaded: boolean,
	setLoaded: (loaded: boolean) => void,
) {
	const appState = useAppState();

	useEffect(() => {
		const state = JSON.parse(localStorage.getItem("state") || "{}");
		if (!loaded) {
			appState.setAppState(state);
			setLoaded(true);
		}
	}, [setLoaded, appState]);
}
