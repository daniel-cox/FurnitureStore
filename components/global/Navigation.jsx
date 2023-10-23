import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import About from '../AboutUs';
import { Link, useNavigate } from 'react-router-dom'

function NavScrollExample() {

  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/')
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary"> 
      <Container fluid>
        <Navbar.Brand href="#">Furniture Store</Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link onClick={handleClick}>Home</Nav.Link>
            <Nav.Link href="<AboutUs />">About Us</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Living Room</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Bed Room
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                On Sale
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
