import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledRegions = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 65px;
  line-height: 45px;
  align-items: center;
  width: fit-content;
  justify-content: center;
  padding-inline: 1rem;
  margin: 0 auto;
  border: 1px solid black;
  overflow-x: auto;
  .active {
    background-color: green;
    color: #fff;
  }
  .link {
    padding-inline: 1rem;
    text-decoration: none;
    user-select: none;
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
      <NavLink className="link" active="active" to={`/`}>
        All regions
      </NavLink>
      <NavLink className="link" active="active" to={`/region/Africa`}>
        Africa
      </NavLink>
      <NavLink className="link" active="active" to={`/region/America`}>
        America
      </NavLink>
      <NavLink className="link" active="active" to={`/region/Asia`}>
        Asia
      </NavLink>
      <NavLink className="link" active="active" to={`/region/Europe`}>
        Europe
      </NavLink>
      <NavLink className="link" active="active" to={`/region/Oceania`}>
        Oceania
      </NavLink>
    </StyledRegions>
  );
};
