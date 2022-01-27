import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #c0c0c0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    max-height: 200px;
  }
`;
