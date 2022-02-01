import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

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

export const BtCard = ({ title, flag, link }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "1rem",
        height: "300px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Card.Img
        variant="top"
        src={flag}
        alt={title}
        style={{
          backgroundColor: "#f1f1f1",
          width: "100%",
          height: "auto",
          maxHeight: "150px",
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button style={{ color: "#fff", marginTop: "1rem" }}>
          <Link className="white" to={link}>
            See more information
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};
