import { useState } from "react";
import { StyledSearch } from "./StyledSearch";

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const SearchForm = () => {
    return (
      <label htmlFor="search-form">
        <StyledSearch
          placeholder="Search for..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
    );
  };
  return { SearchForm, searchValue };
};
