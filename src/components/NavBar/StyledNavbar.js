import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 95%;
  height: 70px;
  border: 1px solid #cecece;
  max-width: 1360px;
  margin: 1rem auto;
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  max-width: 300px;
  width: 80%;
  height: 100%;
  p {
    margin-left: 1rem;
    overflow-x: hidden;
    font-size: 1rem;
    font-weight: 400;
    max-width: fit-content;
    width: 70%;
  }
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
    height: 4rem;
  }
`;

export const StyledBurguer = styled.div`
  display: none;
  transition: 250ms linear all;

  @media screen and (max-width: 960px) {
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;
    font-size: 1.6rem;
    height: 100%;
    width: auto;
    transform: rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0")});
    display: flex;
  }
`;
