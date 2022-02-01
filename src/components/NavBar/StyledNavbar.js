import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 95%;
  height: 70px;
  border: 1px solid #cecece;
  max-width: 1360px;
  margin: 0 auto;
`;
export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1360px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
`;

export const StyledLogo = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  height: 100%;
`;

export const StyledMenu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  z-index: 999;
  transition: all 200ms linear;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: 0;
    position: absolute;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-120%")};
    width: 100%;
  }
`;
export const StyledMenuItem = styled.li`
  height: 100%;
  background-color: white;
  &:hover {
    background-color: #0b5ed7;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 3rem;
  }
`;

export const StyledBurguer = styled.div`
  display: none;
  align-items: center;
  height: 100%;
  font-size: 1.6rem;
  margin-right: 2rem;
  cursor: pointer;
  transition: 250ms linear all;
  @media screen and (max-width: 960px) {
    transform: rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0")});
    display: flex;
  }
`;
