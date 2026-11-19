import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './navbar.css';

class NavBar extends Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark" expand="lg" className="site-navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="site-navbar-collapse">
            <Nav className="site-nav-links">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/about-me">About Me</Nav.Link>
            </Nav>
            <div className="site-social-links">
              <Button variant="dark" href="https://www.linkedin.com/in/johnyacuta/">
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
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
