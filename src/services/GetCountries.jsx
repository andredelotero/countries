import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { PaginatedItems } from "../components/Pagination/Pagination";
import { Spin } from "../components/Spinner/Spinner";
import { useGetData } from "./GetData";
import { StyledSearch } from "../components/Search/StyledSearch";

const GetCountries = ({ filter = "", url = "all" }) => {
  const [location] = useLocation();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue("");
  }, [location]);

  let fullId = "";
  location !== undefined && location.length > 1 && (fullId = location);
  const { data, loading } = useGetData(fullId.length > 1 ? fullId : url);
  filter = searchValue;

  data?.forEach((e) => (e.name.common = e.name.common.toUpperCase()));
  data?.sort((a, b) =>
    a.name.common > b.name.common ? 1 : b.name.common > a.name.common ? -1 : 0
  );

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <>
          <StyledSearch
            htmlFor="search-form"
            placeholder="Search by country name..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />

          <PaginatedItems
            data={data.filter((a) =>
              a.name.common.startsWith(filter.toUpperCase())
            )}
            filter={filter}
          />
        </>
      )}
    </>
  );
};

export { GetCountries };
