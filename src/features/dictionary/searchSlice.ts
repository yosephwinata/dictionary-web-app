import { StateCreator } from "zustand";

export interface SearchState {
  searchInput: string;
  fetchKeyword: string;
  updateSearchInput: (input: string) => void;
  updateFetchKeyword: (keyword: string) => void;
}

export const createSearchSlice: StateCreator<
  SearchState,
  [],
  [],
  SearchState
> = (set) => ({
  searchInput: "",
  updateSearchInput: (input: string) => set(() => ({ searchInput: input })),
  fetchKeyword: "",
  updateFetchKeyword: (keyword: string) =>
    set(() => ({ fetchKeyword: keyword })),
});
