import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useGetData } from "../../services/GetData";
import { Spin } from "../Spinner/Spinner";

const StyledCountryDetail = styled.div`
  border: 1px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 2rem auto;
  max-width: 400px;
  background-color: #f1f1f1;
  p {
    font-weight: 600;
    line-height: 1.5;
  }
  img {
    max-width: 350px;
    height: auto;
    margin-top: 1rem;
  }
  .link {
    text-align: center;
    font-weight: 600;
    margin-block: 1rem;
    padding: 1rem 2rem;
    color: #0000ff;
    text-decoration: none;
    user-select: none;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const CountryDetail = () => {
  const { id } = useParams();
  const URL = `name/${id}`;
  const { data, loading } = useGetData(URL);

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
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
      )}
    </>
  );
};

export { CountryDetail };
