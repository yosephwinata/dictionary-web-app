import { StateCreator } from "zustand";

export interface SearchState {
  searchInput: string;
  fetchKeyword: string;
  setSearchInput: (input: string) => void;
  setFetchKeyword: (keyword: string) => void;
}

export const createSearchSlice: StateCreator<
  SearchState,
  [],
  [],
  SearchState
> = (set) => ({
  searchInput: "",
  setSearchInput: (input: string) => set(() => ({ searchInput: input })),
  fetchKeyword: "",
  setFetchKeyword: (keyword: string) => set(() => ({ fetchKeyword: keyword })),
});
