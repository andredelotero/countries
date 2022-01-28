import { useEffect, useState } from "react";
import { PaginatedItems } from "../components/Pagination/Pagination";
import { Spin } from "../components/Spinner/Spinner";

const URL = "https://restcountries.com/v3.1/all";
const GetCountries = ({ filter }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setCountries(jsonResponse);
      })
      .catch((err) => console.log(err))
      .finally(setTimeout(() => setLoading(false), 400));
  }, []);

  countries.forEach((e) => (e.name.common = e.name.common.toUpperCase()));
  countries.sort((a, b) =>
    a.name.common > b.name.common ? 1 : b.name.common > a.name.common ? -1 : 0
  );

  return (
    <>
      {loading ? <Spin /> : null}
      <PaginatedItems
        data={countries.filter((a) =>
          a.name.common.startsWith(filter.toUpperCase())
        )}
        filter={filter}
      />
    </>
  );
};
export { GetCountries };
