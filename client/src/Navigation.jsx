import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import textLogo from "./assets/text-logo.png";

const Navigation = () => {

  function handleDisplayMode(e){
    e.stopPropagation();
  }

  return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='px-4'>
        
          <Navbar.Brand href="/">
            <img src={textLogo} alt="Spend Better Text Logo" className='nav-text-logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/upload">Upload</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Username" id="collasible-nav-dropdown" menuVariant='dark' rootCloseEvent='click' align="end">
                  <NavDropdown.Item href="#action/3.1">Account Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" >
                  <Form>
                    <Form.Check 
                      type="switch"
                      id="display-mode"
                      label="Dark Mode"
                      onClick={handleDisplayMode}
                    />
                  </Form>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
  )
}

export default Navigation