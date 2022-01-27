import { useState } from "react";
import { GetCountries } from "../../services/GetCountries";
import { StyledSearch } from "./StyledSearch";

export const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <label htmlFor="search-form">
      <StyledSearch
        placeholder="Search for..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <GetCountries filter={search} />
    </label>
  );
};
