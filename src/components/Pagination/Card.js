import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  .white {
    color: #fff;
    text-decoration: none;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  max-width: 18rem;
  height: 300px;
  background-color: #f0f0f0;
  margin: 1rem;
  border: 1px solid #000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    background-color: #f1f1f1;
    width: 100%;
    height: auto;
    max-height: 150px;
    object-fit: cover;
  }
  .title {
    font-size: 1.2rem;
    text-align: center;
    margin: 1rem auto;
    font-weight: 600;
  }
  .button {
    padding: 1rem 2rem;
    color: #fff;
    background-color: #0b5ed7;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 400;
    &:hover {
      background-color: #0b5ea7;
    }
  }
`;

export const BtCard = ({ title, flag, link }) => {
  return (
    <StyledCard>
      <img src={flag} alt={title} />
      <p className="title">{title}</p>

      <Link className="button" to={link}>
        See more information
      </Link>
    </StyledCard>
  );
};
