import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import "../../App.css"

const Header = () => {
  return (
    <Navbar className='navBar' expand="md" >
      <Container>
        <Navbar.Brand href="#home">The Best ToDO App Ever!!!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">SignIn</Nav.Link>
            <Nav.Link href="#link">SignUp</Nav.Link>
            <Nav.Link href="#link">SignOut</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
