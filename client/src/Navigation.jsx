import React from 'react'
import { useNavigate } from 'react-router-dom';
import useLogout from './hooks/useLogout';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import textLogo from "./assets/text-logo.png";

const Navigation = ({isAuthenticated, user, setUser, setAuthenticated}) => {

  const navigate = useNavigate()
  function handleDisplayMode(e){
    e.stopPropagation();
  }

  const handleLogout = () => {
    useLogout().then(data=> {
      if(data.ok){
        setUser(null)
        setAuthenticated(false)
        navigate("/")
      }
    })
  }

  const userDropdown =    <NavDropdown title={`${user?.username}`} id="collasible-nav-dropdown" menuVariant='dark' rootCloseEvent='click' align="end">
                            <NavDropdown.Item href={`/account/${user?.username}`}>My Profile</NavDropdown.Item>
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
                            <NavDropdown.Item onClick={handleLogout}>
                              Logout
                            </NavDropdown.Item>
                          </NavDropdown>
  const loginButton = <Button onClick={() => navigate('/login')}  variant='secondary'>Login</Button>

  const renderButton = isAuthenticated ? userDropdown : loginButton;

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='px-4 py-1 header-bg fs-5' sticky="top">
          <Navbar.Brand href="/">
            <img src={textLogo} alt="Spend Better Text Logo" className='nav-text-logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/transactions">Transactions</Nav.Link>
              <Nav.Link href="/budget">Budget</Nav.Link>
            </Nav>
            <Nav>
            {renderButton}
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
  )
}

export default Navigation