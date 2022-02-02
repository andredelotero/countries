import styled from "styled-components";

export const StyledCountryDetail = styled.div`
  border: 1px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 2rem auto;
  max-width: 400px;
  background-color: #f1f1f1;
  p {
    font-weight: 600;
    line-height: 1.5;
  }
  img {
    max-width: 350px;
    height: auto;
    margin-top: 1rem;
  }
  .link {
    text-align: center;
    font-weight: 600;
    margin-block: 1rem;
    padding: 1rem 2rem;
    color: #0000ff;
    text-decoration: none;
    user-select: none;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export const StyledError = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #ff0000;
`;
