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
  max-width: 300px;
  width: 90%;
  height: 250px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #c0c0c0;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem;
  img {
    width: 100%;
    object-fit: contain;
    height: auto;
    max-height: 120px;
  }
`;
