import React, { useState } from "react"
import "./MainNav.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { HashLink } from 'react-router-hash-link';
// import Home from "./Home"
import { useInView } from "react-intersection-observer";
import { AiOutlineMenu } from 'react-icons/ai';


function MainNav({section1InView, section2InView ,section1InViewPlus, section2InViewPlus }) {
 
   

      return (
        
    <Navbar
    style={{
      padding: section1InView
      ? "5vh"
      : section2InView
      ? "1.5vh"
      : "1.5vh"
     }}
    className="MainNavbarsec " expand="lg"
    >
      <Container className="ContainerMainCont">
        <Navbar.Brand  className='HashLinkMainLogo ms-md-5' >
        <HashLink className="ms-md-5 HashLinkMain" to="/#"> START REACT</HashLink>
        </Navbar.Brand>
        <HashLink>
        <Navbar.Toggle className="ToggleOnfocus"  aria-controls="basic-navbar-nav" >
          MENU<AiOutlineMenu />
        </Navbar.Toggle>
        </HashLink>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ml-0">

            <HashLink className='HashLink'  to="/#Portfolio"
             style={{
              color: section1InViewPlus
              ? ""
              : section2InViewPlus
              ? "white"
              : "white",
                backgroundColor: section1InViewPlus
                ? "transparent"
                : section2InViewPlus
                ? "#1abc9c"
                : "#1abc9c",
             }
             }
           >
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