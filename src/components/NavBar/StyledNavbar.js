import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid #cecece;
`;
export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
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
  @media screen and (max-width: 900px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    margin-bottom: 2rem;
  }
`;
export const StyledMenuItem = styled.li`
  height: 100%;
  background-color: white;
  @media screen and (max-width: 900px) {
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
  @media screen and (max-width: 900px) {
    transform: rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0")});
    display: flex;
  }
`;
