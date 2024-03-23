import { StateCreator } from "zustand";
import { FontFamily } from "./types";

export interface FontFamilyState {
  fontFamily: FontFamily;
  updateFontFamily: (newFontFamily: FontFamily) => void;
}

export const createFontFamilySlice: StateCreator<
  FontFamilyState,
  [],
  [],
  FontFamilyState
> = (set) => ({
  fontFamily: "SANS_SERIF",
  updateFontFamily: (newFontFamily: FontFamily) =>
    set(() => ({ fontFamily: newFontFamily })),
});
