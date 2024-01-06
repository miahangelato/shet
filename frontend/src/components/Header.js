import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" bg="primary" variant ="dark">
    <Container>
      <Link to ='/'>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/cart"> <i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"><i className= 'fas fa-user'></i>User</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login">
              Login
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
