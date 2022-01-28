import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledRegions = styled.div`
  display: flex;
  height: 45px;
  line-height: 45px;
  align-items: center;
  width: fit-content;
  justify-content: center;
  padding-inline: 1rem;
  margin: 0 auto;
  border: 1px solid black;
  .link {
    padding-inline: 1rem;
    text-decoration: none;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

export const Regions = () => {
  return (
    <StyledRegions>
      Search by region:
      <Link className="link" to={`/`}>
        All regions
      </Link>
      <Link className="link" to={`/region/Africa`}>
        Africa
      </Link>
      <Link className="link" to={`/region/America`}>
        America
      </Link>
      <Link className="link" to={`/region/Asia`}>
        Asia
      </Link>
      <Link className="link" to={`/region/Europe`}>
        Europe
      </Link>
      <Link className="link" to={`/region/Oceania`}>
        Oceania
      </Link>
    </StyledRegions>
  );
};
