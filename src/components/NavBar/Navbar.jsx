import { Link } from "wouter";
import { useState } from "react";
import { useLocation } from "wouter";

import "./Links.css";
import {
  StyledContainer,
  StyledWrapper,
  StyledLogo,
  StyledMenu,
  StyledMenuItem,
  StyledBurguer,
} from "./StyledNavbar";
import { FaBars } from "react-icons/fa";
export const NavBar = () => {
  const [isMenuOpen, setIsMEnuOpen] = useState(false);
  const [location] = useLocation();
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo>
          You are in:{" "}
          {location.split("/")[2] === undefined
            ? " All regions "
            : location.split("/")[2]}
        </StyledLogo>
        <StyledBurguer isOpen={isMenuOpen}>
          <FaBars onClick={() => setIsMEnuOpen(!isMenuOpen)} />
        </StyledBurguer>
        <StyledMenu isOpen={isMenuOpen}>
          <StyledMenuItem>
            <Link
              className={
                location.split("/")[2] === undefined ? "Link isActive" : "Link"
              }
              href="/"
              onClick={() => setIsMEnuOpen(false)}
            >
              All regions
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link
              className={
                location.split("/")[2] === "Africa" ? "Link isActive" : "Link"
              }
              href="/region/Africa"
              onClick={() => setIsMEnuOpen(false)}
            >
              Africa
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link
              className={
                location.split("/")[2] === "America" ? "Link isActive" : "Link"
              }
              href="/region/America"
              onClick={() => setIsMEnuOpen(false)}
            >
              America
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link
              className={
                location.split("/")[2] === "Asia" ? "Link isActive" : "Link"
              }
              href="/region/Asia"
              onClick={() => setIsMEnuOpen(false)}
            >
              Asia
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link
              className={
                location.split("/")[2] === "Europe" ? "Link isActive" : "Link"
              }
              href="/region/Europe"
              onClick={() => setIsMEnuOpen(false)}
            >
              Europe
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link
              className={
                location.split("/")[2] === "Oceania" ? "Link isActive" : "Link"
              }
              href="/region/Oceania"
              onClick={() => setIsMEnuOpen(false)}
            >
              Oceania
            </Link>
          </StyledMenuItem>
        </StyledMenu>
      </StyledWrapper>
    </StyledContainer>
  );
};
