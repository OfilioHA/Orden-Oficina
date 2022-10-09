import { NavLink } from "react-router";
import { Navbar, Container, Nav } from "react-bootstrap";
import { logout } from "../../libs/auth";

export function Header() {

  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home" >Home</Nav.Link>
            <Nav.Link as={NavLink} to="/agua">Features</Nav.Link>
            <Nav.Link onClick={logout}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
