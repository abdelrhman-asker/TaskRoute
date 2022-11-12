import React, { useState } from "react"
import "./MainNav.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { HashLink } from 'react-router-hash-link';
// import Home from "./Home"
import { useInView } from "react-intersection-observer";


function MainNav({section1InView, section2InView }) {
 
   

      return (
        
    <Navbar
    style={{
      padding: section1InView
      ? "3vh"
      : section2InView
      ? "1vh"
      : "1vh"
     }}
    className="MainNavbarsec " expand="lg"
    >
      <Container className="ContainerMainCont">
        <Navbar.Brand  className='HashLinkMainLogo ms-md-5' >
        <HashLink className="ms-md-5 HashLinkMain" to="/#"> START REACT</HashLink>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ml-0">

            <HashLink      

            className='HashLink'  to="/#Portfolio">
                PORTfOLIO</HashLink>

            <HashLink className='HashLink' to="/#">ABOUT</HashLink>
            <HashLink className='HashLink' to="/#">CONTACT</HashLink>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default MainNav;