import React, { useCallback } from 'react'
import MainNav from './MainNav/MainNav'
import Portfolio from './Portfolio'
import { useInView } from "react-intersection-observer";
import HomeMain from './HomeMain';
import PopUps from './PopUps';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    const [section1Ref, section1InView] = useInView({ threshold: 0.9 });
    const [section1RefPlus, section1InViewPlus] = useInView({ threshold: 0.2 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.9 });
  const [section2RefPlus, section2InViewPlus] = useInView({ threshold: 0.2 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.9 });
  const [section3RefPlus, section3InViewPlus] = useInView({ threshold: 0.2 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.9 });
  const [section4RefPlus, section4InViewPlus] = useInView({ threshold: 0.2 });
  
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
  const setRefsthird = useCallback(
    (node) => {
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      section3Ref(node)
      section3RefPlus(node)
    },
    [section3Ref, section3RefPlus],
  )
  const setRefsfourth = useCallback(
    (node) => {
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      section4Ref(node)
      section4RefPlus(node)
    },
    [section3Ref, section3RefPlus],
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
      
       
        <MainNav className="MainNAvIntoMainHome"
         section1InViewPlus={section1InViewPlus}
         section2InViewPlus={section2InViewPlus}
          section1InView={section1InView}
          section2InView={section2InView}
          section3InViewPlus={section3InViewPlus}
          section3InView={section3InView}
          section4InViewPlus={section4InViewPlus}
          section4InView={section4InView}

          />
         
       
          <div className="Container">
      <section  className="Section" ref={setRefsfirst} >
      <HomeMain section1InView={section1InView} section2InView={section2InView} />
      </section>
<section className="Section" ref={setRefssecond}>
        <Portfolio  ref={section2Ref}
        section1InViewPlus={section1InViewPlus}
         section2InViewPlus={section2InViewPlus}  />
         </section>
        <section className="Section" ref={setRefsthird}>
        <About ref={section3Ref}
        section1InViewPlus={section1InViewPlus}
        section2InViewPlus={section2InViewPlus}
        section3InViewPlus={section3InViewPlus} />
        </section></div>

      <section className="Section" ref={setRefsfourth}>
        <Contact ref={section4Ref}
        section1InViewPlus={section1InViewPlus}
        section2InViewPlus={section2InViewPlus}
        section3InViewPlus={section3InViewPlus}
        section4InViewPlus={section4InViewPlus} />
        </section>

        <section className="Section">
          <Footer />
        </section>
    </div>
  )
}

export default Home

  

