import { ChangeEvent, KeyboardEvent } from "react";
import IconSearch from "../svg/IconSearch";

interface SearchBarProps {
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  searchInput: string;
  onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMsg: string;
}

const SearchBar = ({
  onKeyDown,
  searchInput,
  onSearchInputChange,
  errorMsg,
}: SearchBarProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for any word…"
        value={searchInput}
        onChange={onSearchInputChange}
        onKeyDown={onKeyDown}
        className={`bg-gray-3 dark:bg-black-3 focus:outline-purple caret-purple h-12 w-full rounded-[16px] px-6 md:h-16 dark:text-white ${errorMsg && "border-orange border-2"}`}
      />
      <div className="absolute right-0 top-1/2 -translate-x-5 -translate-y-1/2 md:-translate-x-6">
        <IconSearch />
      </div>
      <p className="text-orange absolute -bottom-[0.2rem] translate-y-full text-[1rem] md:-bottom-[0.3rem] md:text-[1.25rem]">
        {errorMsg}
      </p>
    </div>
  );
};

export default SearchBar;
