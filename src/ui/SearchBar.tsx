import { ChangeEvent, KeyboardEvent } from "react";
import IconSearch from "../svg/IconSearch";

interface SearchBarProps {
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  searchInput: string;
  onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({
  onKeyDown,
  searchInput,
  onSearchInputChange,
}: SearchBarProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for any word…"
        value={searchInput}
        onChange={onSearchInputChange}
        onKeyDown={onKeyDown}
        className="bg-gray-3 focus:outline-purple caret-purple h-12 w-full rounded-[16px] px-6"
      />
      <div className="absolute right-0 top-1/2 -translate-x-5 -translate-y-1/2">
        <IconSearch />
      </div>
    </div>
  );
};

export default SearchBar;
