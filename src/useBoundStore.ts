import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createSearchSlice } from "./features/dictionary/searchSlice";
import { createDarkModeSlice } from "./features/darkMode/darkModeSlice";
import { SearchState } from "./features/dictionary/searchSlice";
import { DarkModeState } from "./features/darkMode/darkModeSlice";

export const useBoundStore = create<SearchState & DarkModeState>(
  // "devtools" middleware: Enables Redux devtools for debugging Zustand
  devtools(
    // "persist" middleware: Store and sync to browser's local storage
    // https://docs.pmnd.rs/zustand/integrations/persisting-store-data
    persist(
      (...a) => ({
        ...createSearchSlice(...a),
        ...createDarkModeSlice(...a),
      }),
      {
        name: "boundStore",
        partialize: (state) => ({ isDarkMode: state.isDarkMode }),
      },
    ),
  ),
);

export default useBoundStore;
