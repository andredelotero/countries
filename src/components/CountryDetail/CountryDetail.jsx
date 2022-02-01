import { useLocation } from "wouter";
import { Link } from "wouter";
import { useGetData } from "../../services/GetData";
import { Spin } from "../Spinner/Spinner";

import { StyledCountryDetail } from "./StyledCountryDetail";

const CountryDetail = () => {
  const [location] = useLocation();
  const URL = `name/${location.split("/")[2]}`;
  const { data, error } = useGetData(URL);
  return (
    <>
      {data.length < 1 && error == null ? (
        <Spin />
      ) : data.length !== undefined && error == null ? (
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
            <Link className="link" href={`/`}>
              Go back to index
            </Link>
          </StyledCountryDetail>
        </>
      ) : error !== 404 ? (
        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "2rem",
            color: "red",
          }}
        >
          Network error
        </p>
      ) : (
        <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "2rem" }}>
          country not found
        </p>
      )}
    </>
  );
};

export { CountryDetail };
