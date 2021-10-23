import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export function Header() {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Navbar
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/agua">
              Features
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tienda">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
