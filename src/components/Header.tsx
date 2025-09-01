import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router";

export default function Header() {
	let location = useLocation();
  return (
    <Navbar variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="fw-bold">
					<Link to="/">AARVIS</Link>
				</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>Home</Nav.Link>
            <Nav.Link as={Link} to="/projects" className={location.pathname === "/projects" ? "active" : ""}>My Projects</Nav.Link>
				  </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
