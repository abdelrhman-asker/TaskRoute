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


function MainNav({section1InView, section2InView ,section1InViewPlus, section2InViewPlus, section3InViewPlus,  section4InViewPlus}) {
 
   

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
              : section3InViewPlus
              ? ""
              : "",
              backgroundColor
              : section1InViewPlus
              ? "transparent"
              : section2InViewPlus
              ? "#1abc9c"
              : section3InViewPlus
              ? "transparent"
              :"transparent"
             }
             }
           >
                PORTfOLIO</HashLink>

            <HashLink className='HashLink' to="/#About"
            style={{
              color: section1InViewPlus
              ? ""
              : section2InViewPlus
              ? ""
              : section3InViewPlus
              ? "white"
              : "",
                backgroundColor
                : section1InViewPlus
                ? "transparent"
                : section2InViewPlus
                ? "transparent"
                : section3InViewPlus
                ? "#1abc9c"
                :"transparent"
             }
             }>ABOUT</HashLink>




            <HashLink className='HashLink' to="/#Contact"
            style={{
              color: section1InViewPlus
              ? ""
              : section2InViewPlus
              ? ""
              : section3InViewPlus
              ? ""
              : section4InViewPlus
              ? "white"
              : "",
                backgroundColor
                : section1InViewPlus
                ? "transparent"
                : section2InViewPlus
                ? "transparent"
                : section3InViewPlus
                ? "transparent"
                : section4InViewPlus
                ? "#1abc9c"
                :"transparent"
             }
             }
            
            >CONTACT</HashLink>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default MainNav;