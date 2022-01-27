import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const StyledCountryDetail = styled.div`
  border: 1px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  p {
    font-weight: 600;
    line-height: 1.5;
  }
  img {
    max-width: 350px;
    height: auto;
    margin-top: 1rem;
  }
`;

const CountryDetail = () => {
  const { id } = useParams();
  const URL = `https://restcountries.com/v3.1/name/${id}`;

  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setCountry(jsonResponse[0]);
      })
      .catch((err) => console.log(err));
  }, [URL]);

  const { name, area, population, capital, flags } = country;

  return (
    <>
      <StyledCountryDetail>
        <p>Name: {name?.common}</p>
        <p>Capital: {capital}</p>
        <p>
          Area: {area?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} kms2
        </p>
        <p>
          Population:{" "}
          {population?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} people
        </p>
        <p>Official flag:</p>
        <img src={flags?.png} alt={name?.common} />
      </StyledCountryDetail>
      <Link className="" to={`/`}>
        Go back to index
      </Link>
    </>
  );
};

export { CountryDetail };
