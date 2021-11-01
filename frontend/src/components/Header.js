import React from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Container, Nav } from "react-bootstrap"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">ABC Market</Navbar.Brand>
          </LinkContainer>
          
          <Nav className="ml-auto">
            <LinkContainer to="/login">
              <Nav.Link>
                Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
          </Container>
        </Navbar>
    )
}

export default Header
