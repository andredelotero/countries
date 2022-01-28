import { PaginatedItems } from "../components/Pagination/Pagination";
import { Spin } from "../components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import { useGetData } from "./GetData";
const GetCountries = ({ filter = "", url = "all" }) => {
  const { id } = useParams();
  let fullId = "";
  if (id !== undefined) {
    if (id.length > 1 && id !== undefined) {
      fullId = "region/" + id;
    } else {
      if (id.length < 1 || id === undefined) fullId = "";
    }
  }
  const { data, loading } = useGetData(fullId.length > 1 ? fullId : url);

  data.forEach((e) => (e.name.common = e.name.common.toUpperCase()));
  data.sort((a, b) =>
    a.name.common > b.name.common ? 1 : b.name.common > a.name.common ? -1 : 0
  );

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <>
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
