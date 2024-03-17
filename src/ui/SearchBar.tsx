import IconSearch from "../svg/IconSearch";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        placeholder="Search for any word…"
        className="bg-gray-3 h-12 w-full rounded-[16px] px-6"
      />
      <div className="absolute right-0 top-1/2 -translate-x-5 -translate-y-1/2">
        <IconSearch />
      </div>
    </div>
  );
};

export default SearchBar;
