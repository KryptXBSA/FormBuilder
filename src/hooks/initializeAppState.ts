import { useEffect } from "react";
import { useAppState } from "@/state/state";

export default function initializeAppState(setLoaded: (loaded: boolean) => void, setDialogOpen: (open: boolean) => void) {
  const appState = useAppState();

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("state") || '{}');

    if (state.version === 0) {
      appState.setAppState(state.state);
    }
    setLoaded(true);

    const storedValue = localStorage.getItem("dialogClosed");
    const dialogClosed = storedValue !== null ? JSON.parse(storedValue) : false;
    if (!dialogClosed) setDialogOpen(true);
  }, [setLoaded, setDialogOpen, appState]);
}
