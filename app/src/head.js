import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FaBars, FaTimes } from "react-icons/fa";
import "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import "./layout.css";
import eth from "./ethSymbol.jpeg";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Call useState here

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);
//style={{ backgroundImage: `url(${eth})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  return (
  <div className='style-toggle' >

      <Navbar bg="light" expand="lg" collapseOnSelect style={{backgroundImage:'linear-gradient(red,blue)'}}>
      <img src={eth} width="10%" style={{border:'2px solid black',borderRadius:'50%'}} />
      <Container >
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''} >
   
      <Nav className="ms-auto  " style={{ backgroundColor:"black"}}>
        
     <Nav.Link></Nav.Link>
        <Nav.Link ><span><Link to="/admin"   className='btn btn-info'  role="button" > AdminToRegister</Link></span></Nav.Link>
        <Nav.Link ><span><Link to="/admin"   className='btn btn-info'  role="button"> Admin</Link></span></Nav.Link>
        <Nav.Link ><span><Link to="/about"   className='btn btn-info'  role="button">About</Link></span></Nav.Link>
        <Nav.Link ><span><Link to="/voterList"   className='btn btn-info'  role="button"> VoterList</Link></span></Nav.Link>
    
      </Nav>
   
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default NavBar;
