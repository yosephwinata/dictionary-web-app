import { create } from "zustand";
import { createSearchSlice } from "./features/dictionary/searchSlice";
import { SearchState } from "./features/dictionary/searchSlice";

// An example if you have more than one slices
// export type MyState = aSlice & bSlice;
// Source: https://codesandbox.io/p/sandbox/react-query--zustand-folder-structure-161yj?file=%2Fsrc%2Fstore%2Fclient%2FuseStore.ts%3A4%2C1-4%2C51

export const useBoundStore = create<SearchState>((...a) => ({
  ...createSearchSlice(...a),
}));

export default useBoundStore;
