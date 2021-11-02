import React from 'react'
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin  = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">ABC Market</Navbar.Brand>
        </LinkContainer>
        
        <Nav className="ml-auto">
        {userInfo ? (
          <>
            <LinkContainer to='/create'>
                  <Nav.Link className="sign-in">
                    <p className="sign-in-nav-link">Create</p>
                  </Nav.Link>
            </LinkContainer>


            <NavDropdown title={userInfo.name}>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item><i class="fas fa-user"></i> Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  <i class="fas fa-sign-out-alt"></i> Sign Out
                </NavDropdown.Item>
            </NavDropdown>          
          </>
          
            
        ) : (
          <LinkContainer to='/login'>
                  <Nav.Link className="sign-in">
                    <p className="sign-in-nav-link">Log In</p>
                  </Nav.Link>
            </LinkContainer>
        )}
        </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
