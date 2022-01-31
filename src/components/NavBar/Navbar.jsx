import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Search by region: </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ border: 0, userSelect: "none", textDecoration: "none" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              maxWidth: "1440px",
            }}
            navbarScroll
          >
            <Nav.Link href="/">All Regions</Nav.Link>
            <Nav.Link href="/region/Africa">Africa</Nav.Link>
            <Nav.Link href="/region/America">America</Nav.Link>
            <Nav.Link href="/region/Asia">Asia</Nav.Link>
            <Nav.Link href="/region/Europe">Europe</Nav.Link>
            <Nav.Link href="/region/Oceania">Oceania</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
