import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from  '../images/logo-trans.png'
import '../Components/Header.css'
import 'react-scroll'




const Header = () => {
  const [activeLink, setActiveLink] = useState('#hero');

  const handleNavLinkClick = (href) => {
    setActiveLink(href);
  };
  
  return (
    <>
        <Navbar expand="lg"bg="dark" data-bs-theme="dark"  sticky="top" >
      <Container>
        <Navbar.Brand href="#hero"><img src={Logo} alt="logo" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={`nav-links ${activeLink === '#hero' ? 'active-nav' : ''}`} href="#hero"  spy={true} smooth={true} offset={-100} duration={500}  onClick={() => handleNavLinkClick('#hero')}>Home</Nav.Link>

            <Nav.Link className={`nav-links ${activeLink === '#services' ? 'active-nav' : ''}`} href="#services" spy={true} smooth={true} offset={-100} duration={500}  onClick={() => handleNavLinkClick('#services')}>Services</Nav.Link>

            <Nav.Link className={`nav-links ${activeLink === '#testimonial' ? 'active-nav' : ''}`} href="#testimonial" spy={true} smooth={true} offset={-100} duration={500}  onClick={() => handleNavLinkClick('#testimonial')}>Testimonial</Nav.Link>

            <Nav.Link className={`nav-links ${activeLink === '#contact' ? 'active-nav' : ''}`} href="#contact" spy={true} smooth={true} offset={-150} duration={500}  onClick={() => handleNavLinkClick('#contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header