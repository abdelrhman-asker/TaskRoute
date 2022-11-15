import React, { useEffect, useState } from 'react'
import axios from "axios";
import { HashLink } from 'react-router-hash-link';
import {Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
import PopUps from './PopUps';

const Portfolio = ({section1InViewPlus, section2InViewPlus }) => {
  const [cards, setCard] = useState([])

  useEffect(() => {
    axios.get("Card.json")
    .then((res) => {
      setCard(res.data.cards)
    })
  }, [])


  
  const [isActive, setIsActive] = useState(false);

  // const handleClick = (event, key) => {
  //   setIsActive(current => !current);
  //   console.log(event.target.id)
  //   const evetar = 1
  //   document.getElementById("doc1").style.display = 'block';
    
  // };
  
 const handleClick = () => {
  document.getElementById(cards.HashId).style.display = "flex";
 }

  
  return (
    <div className='MainDivPortfolio' id='Portfolio'>
      <div>
      <h2 className='MainPortText'>
      Portfolio
      </h2>
      </div>
      <div className='MainStarAndLinesDiv mt-4'>
            <div className='LineBeforeAAfterSstaerPort me-4'
            style={{
              width: section1InViewPlus
              ? "70px"
              : section2InViewPlus
              ? "150px"
              : "150px"
             }}
            ></div>
            <div >
            <svg className="svg-inline--fa fa-star  fa-w-18 StarSVgPort" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            </div>
            <div className='LineBeforeAAfterSstaerPort ms-4'
             style={{
              width: section1InViewPlus
              ? "70px"
              : section2InViewPlus
              ? "150px"
              : "150px"
             }}
            ></div>
        </div>
             <div className='ImgsPortMapMainDiv'>
             {cards.slice(0, 6).map((cards,evetar, key)=> 
              <div style={{position:"relative"}}>
                <div >
              <img className='ImgsPortMap' src={cards.photo} />
              </div>
              
              <div  onClick={() => 
                {
                  document.getElementById(cards.HashId).style.display = "flex"
                  document.body.style.overflowY = "hidden"
                }
              } key={key} className='PlusSVgPortMinDiv'>
                <HashLink id={cards.id} className='PlusSVgPortMinHash'  >
                  <svg  class="svg-inline--fa fa-plus fa-w-14 fa-3x PlusSVgPort" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                
                  </HashLink>



                  
               



              </div>
              <div id={cards.HashId} className="PopUps" style={{display:"none"}}>
                  <PopUps cards={cards} />
                  <div onClick={() => 
                {
                  document.getElementById(cards.HashId).style.display = "none"
                  document.body.style.overflowY = "auto"

                }
              } className="PopUps1"></div>
                  <div onClick={() => 
                {
                  document.getElementById(cards.HashId).style.display = "none"
                  document.body.style.overflowY = "auto"

                }
              } className="PopUps2"> </div>
                 </div>
             </div>,
          

             )
             }
             <br />
             <br />
             <br />

             


             </div>

           
            
    </div>
  )
}

export default Portfolio