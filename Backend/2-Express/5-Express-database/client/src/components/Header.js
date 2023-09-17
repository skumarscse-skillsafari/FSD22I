import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  const styleProp = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">User App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/user/create" style={styleProp}>
                Create User
              </Link>
            </Nav.Link>
            <Nav.Link href="/" style={styleProp}>
              List Users
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
