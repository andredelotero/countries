import { Link } from "wouter";
import { useState } from "react";
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
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo>Search by region:</StyledLogo>
        <StyledBurguer
          onClick={() => setIsMEnuOpen(!isMenuOpen)}
          isOpen={isMenuOpen}
        >
          <FaBars />
        </StyledBurguer>
        <StyledMenu isOpen={isMenuOpen}>
          <StyledMenuItem>
            <Link
              className="Link"
              href="/"
              onClick={() => setIsMEnuOpen(!isMenuOpen)}
            >
              All regions
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link
              className="Link"
              href="/region/Africa"
              onClick={() => setIsMEnuOpen(!isMenuOpen)}
            >
              Africa
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link
              className="Link"
              href="/region/America"
              onClick={() => setIsMEnuOpen(!isMenuOpen)}
            >
              America
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link
              className="Link"
              href="/region/Asia"
              onClick={() => setIsMEnuOpen(!isMenuOpen)}
            >
              Asia
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link
              className="Link"
              href="/region/Europe"
              onClick={() => setIsMEnuOpen(!isMenuOpen)}
            >
              Europe
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link
              className="Link"
              href="/region/Oceania"
              onClick={() => setIsMEnuOpen(!isMenuOpen)}
            >
              Oceania
            </Link>
          </StyledMenuItem>
        </StyledMenu>
      </StyledWrapper>
    </StyledContainer>
  );
};
