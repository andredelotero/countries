import { useState } from "react";
import { StyledSearch } from "./StyledSearch";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <label htmlFor="search-form">
      <StyledSearch
        placeholder="Search for..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </label>
  );
};
