import { StateCreator } from "zustand";

export interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const createDarkModeSlice: StateCreator<
  DarkModeState,
  [],
  [],
  DarkModeState
> = (set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
});
