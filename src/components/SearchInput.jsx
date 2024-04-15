/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
import SearchIcon from "../assets/icon-search.svg";
import { useSearchContext } from "../provider/useSearchProvider.js";

export default function SearchInput() {
  const { handleInputChange, error, search, handleSearch } = useSearchContext();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch(search);
      }}
      className="searchContainer"
    >
      <img
        src={SearchIcon}
        alt="Search Icon"
        className="w-5 h-5 md:h-6 md:w-6"
      />
      <input
        type="text"
        value={search}
        onChange={(event) => handleInputChange(event)}
        placeholder="Search GitHub username…"
      />
      <span className="text-tart-orange md:block hidden font-bold md:text-[13px] lg:text-[15px] text-[11px]">
        {error ? "No results" : ""}
      </span>
      <button
        onClick={(event) => {
          event.preventDefault();
          handleSearch(search);
        }}
      >
        Search
      </button>
    </form>
  );
}
