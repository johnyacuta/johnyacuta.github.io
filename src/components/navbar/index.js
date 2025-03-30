import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class NavBar extends Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>John Yacuta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/cv">CV</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/about-me">About Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="dark" href="https://www.linkedin.com/in/john.yacuta/">
              <img
                src="./linkedin-brands.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="LinkedIn"/>
            </Button>
            <Button variant="dark" href="https://github.com/johnyacuta">
              <img
                src="./github-brands.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="GitHub"/>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
