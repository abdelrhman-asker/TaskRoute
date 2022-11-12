import React from 'react'
import MainNav from './MainNav/MainNav'
import Portfolio from './Portfolio'
import { useInView } from "react-intersection-observer";
import HomeMain from './HomeMain';

const Home = () => {
    const [section1Ref, section1InView] = useInView({ threshold: 0.9 });
  const [section2Ref, section2InView] = useInView({ threshold: 0 });
  const padding = {
    padding: section1InView
      ? "3vh"
      : section2InView
      ? "2vh"
      : "1vh"
  }
  return (
    <div id='Home' className="App">
         {/* <nav
        className="NavBar"
        style={{
          backgroundColor: section1InView
            ? "red"
            : section2InView
            ? "blue"
            : "green"
        }}
      /> */}
      
       
        <MainNav section1InView={section1InView} section2InView={section2InView}   />
         
       
          <div className="Container">
      <section  className="Section" ref={section1Ref} >
      <HomeMain />
      </section>
<section className="Section" ref={section2Ref}>
        <Portfolio ref={section2Ref} /></section>
        <section className="Section">
        section3</section></div>

    </div>
  )
}

export default Home

  

