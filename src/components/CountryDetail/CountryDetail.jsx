import { useParams, Link } from "react-router-dom";
import { useGetData } from "../../services/GetData";
import { Spin } from "../Spinner/Spinner";

import { StyledCountryDetail } from "./StyledCountryDetail";

const CountryDetail = () => {
  const { id } = useParams();
  const URL = `name/${id}`;
  const { data } = useGetData(URL);

  return (
    <>
      {data.length < 1 ? (
        <Spin />
      ) : data.length !== undefined ? (
        <>
          <StyledCountryDetail>
            <p>Name: {data[0]?.name.common}</p>
            <p>Capital: {data[0]?.capital}</p>
            <p>
              Area:{" "}
              {data[0]?.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              kms2
            </p>
            <p>
              Population:{" "}
              {data[0]?.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              people
            </p>
            <p>Official flag:</p>
            <img src={data[0]?.flags.png} alt={data[0]?.name.common} />
            <Link className="link" to={`/`}>
              Go back to index
            </Link>
          </StyledCountryDetail>
        </>
      ) : (
        <p>country not found</p>
      )}
    </>
  );
};

export { CountryDetail };
