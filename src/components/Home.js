import React, { useCallback } from 'react'
import MainNav from './MainNav/MainNav'
import Portfolio from './Portfolio'
import { useInView } from "react-intersection-observer";
import HomeMain from './HomeMain';

const Home = () => {
    const [section1Ref, section1InView] = useInView({ threshold: 0.9 });
    const [section1RefPlus, section1InViewPlus] = useInView({ threshold: 0.2 });
  const [section2Ref, section2InView] = useInView({ threshold: 0 });
  const [section2RefPlus, section2InViewPlus] = useInView({ threshold: 0 });
  
  const setRefsfirst = useCallback(
    (node) => {
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      section1Ref(node)
      section1RefPlus(node)
    },
    [section1Ref, section1RefPlus],
  )
  const setRefssecond = useCallback(
    (node) => {
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      section2Ref(node)
      section2RefPlus(node)
    },
    [section2Ref, section2RefPlus],
  )
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
      
       
        <MainNav className="MainNAvIntoMainHome" section1InViewPlus={section1InViewPlus} section1InView={section1InView} section2InView={section2InView}   />
         
       
          <div className="Container">
      <section  className="Section" ref={setRefsfirst} >
      <HomeMain section1InView={section1InView} section2InView={section2InView} />
      </section>
<section className="Section" ref={setRefssecond}>
        <Portfolio ref={section2Ref} /></section>
        <section className="Section">
        section3</section></div>

    </div>
  )
}

export default Home

  

