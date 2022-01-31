import { NavLink } from "react-router-dom";
import { StyledRegions } from "./StyledRegion";

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
