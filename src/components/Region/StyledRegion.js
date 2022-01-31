import styled from "styled-components";

export const StyledRegions = styled.div`
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
