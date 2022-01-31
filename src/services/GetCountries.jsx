import { useState } from "react";
import { useParams } from "react-router-dom";
import { PaginatedItems } from "../components/Pagination/Pagination";
import { Spin } from "../components/Spinner/Spinner";
import { useGetData } from "./GetData";
import { StyledSearch } from "../components/Search/StyledSearch";

const GetCountries = ({ filter = "", url = "all" }) => {
  const { id } = useParams();
  const [searchValue, setSearchValue] = useState("");
  let fullId = "";
  id !== undefined && id.length > 1 && (fullId = "region/" + id);
  const { data } = useGetData(fullId.length > 1 ? fullId : url);
  filter = searchValue;

  data.forEach((e) => (e.name.common = e.name.common.toUpperCase()));
  data.sort((a, b) =>
    a.name.common > b.name.common ? 1 : b.name.common > a.name.common ? -1 : 0
  );

  return (
    <>
      {data.length === 0 ? (
        <Spin />
      ) : (
        <>
          <p className="results">
            You are in: {id === undefined ? "All regions" : id}
          </p>
          <StyledSearch
            htmlFor="search-form"
            placeholder="Search for..."
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
