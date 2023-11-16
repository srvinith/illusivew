import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from  '../images/logo-trans.png'
import '../Components/Header.css'


const Header = () => {
  return (
    <>
        <Navbar expand="lg"bg="dark" data-bs-theme="dark"  sticky="top" >
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="logo" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-links active-nav' href="/">Home</Nav.Link>
            <Nav.Link className='nav-links' href="/">Services</Nav.Link>
            <Nav.Link className='nav-links' href="/">About</Nav.Link>
            <Nav.Link className='nav-links' href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header