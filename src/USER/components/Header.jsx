import React, { useEffect, useState, } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { AuthStatus } from '../Context/AuthContext';
import { useContext } from 'react';



function BasicExample() {
  const navigate=useNavigate()
  const{logedUser,setLogedUser}=useContext(AuthStatus)
  const [logged, setLogged] = useState(false);
  const [username, setUserName] = useState('');
  useEffect(() => {
   
    const existingUser = JSON.parse(sessionStorage.getItem('existingUser'));

    if (existingUser) {
      setUserName(existingUser.username);
      setLogged(true);
    }
  },[logedUser]);

  // Function to handle login


  // Function to handle logout
  const handleLogout = () => {
    // Clear user data from sessionStorage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('existingUser');
    setLogged(false);
    setUserName('');
    navigate('/')
  };

  return (
    <Navbar expand="lg" style={{ border: 'none' }}>
      <Container fluid className="ps-5 pe-5">
        <Navbar.Brand href="/" className="ms-1">
          <img width={'230px'} className="img-fluid" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="/events" className="fs-6 ms-3">
              <i class="fa-solid fa-guitar"></i> Events
            </Nav.Link>
            <Nav.Link href="/sports" className="fs-6 ms-3">
              <i class="fa-solid fa-basketball"></i> Sports
            </Nav.Link>
            {logged && (
              <NavDropdown title={username} id="basic-nav-dropdown">
                <NavDropdown.Item href="/order">Orders</NavDropdown.Item>
                <NavDropdown.Item href="/wishlist">Wishlist</NavDropdown.Item>
              </NavDropdown>
            )}
            {!logged ? (

                <Nav.Link href='/login' className="fs-6 ms-3">Login</Nav.Link>
             
            ) : (
              <Nav.Link onClick={handleLogout} className="fs-6 ms-3">
                Logout <i class="fa-solid fa-arrow-right-to-bracket"></i>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample ;
