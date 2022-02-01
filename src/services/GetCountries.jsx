import { useState } from "react";
import { useLocation } from "wouter";
import { PaginatedItems } from "../components/Pagination/Pagination";
import { Spin } from "../components/Spinner/Spinner";
import { useGetData } from "./GetData";
import { StyledSearch } from "../components/Search/StyledSearch";
import { StyledContainer } from "./ContainerDetails";

const GetCountries = ({ filter = "", url = "all" }) => {
  const [location] = useLocation();
  const [searchValue, setSearchValue] = useState("");
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
          <StyledContainer>
            <p className="results">
              You are in: {location === undefined ? "All regions" : location}
            </p>
            <StyledSearch
              htmlFor="search-form"
              placeholder="Search for..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </StyledContainer>

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
