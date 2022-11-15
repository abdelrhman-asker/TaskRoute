import {Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
import React from 'react'
import { GrFormClose } from 'react-icons/gr';

const PopUps = ({id, cards, section1InViewPlus, section2InViewPlus}) => {
  return (
    <div className='popUpMainDiv' id={id} >
        <div style={{cursor:"pointer"}} onClick={() => 
                {
                  document.getElementById(cards.HashId).style.display = "none"
                  document.body.style.overflowY = "auto"

                }
              }  className='GrFormCloseIco'>
        <GrFormClose />
        
        
        </div>
        <div className='CardsTitlePopup'>
        {cards.title}
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
       
        
             <div >
                <img className='CardsPhotoMainPop' src={cards.photo} />


             </div>


<div className='LoremTextPopUp'>
    <h4>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.


    </h4>
    
</div>

        
<div>
<Button className="ButtCloseWind" onClick={() => 
                {
                  document.getElementById(cards.HashId).style.display = "none"
                  document.body.style.overflowY = "auto"

                }
              }
                  >
                    Close Window
                  </Button>
                  <div className='ToCloseOnly'>

</div>
</div>


        </div>
  )
}

export default PopUps