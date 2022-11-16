import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = ({section1InViewPlus, section2InViewPlus , section3InViewPlus ,  section4InViewPlus}) => {
    const form = useRef();
    const sendEmail = (e) => {
      alert("message sent successfully")
      e.preventDefault();
      emailjs.sendForm('service_gwc59qw', 'template_ozxe2cc', form.current, 'Q0wp2MaYHAs1Wo5H1')
      e.target.reset()
    };
  
    const [email , setEmail] = useState("")
    const [name , setName] = useState("")
    const [number , setNumber] = useState("")
    const [mass , setMass] = useState("")
  
  
    return (
    <div id="Contact">
        <div className='MainContactChild'>
            <div> <h3 className='MainContactText'>
                CONTACT ME
                </h3>
            </div>
            <div>
            <div className='MainStarAndLinesDiv mb-4'>
            <div className='LineBeforeAAfterSstaerPort me-4'
            style={{
                width: section1InViewPlus
                ? "70px"
                : section2InViewPlus
                ? "70px"
                :section3InViewPlus
                ? "70px"
                : section4InViewPlus
                ? "120px"
                : "70px"
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
                ? "70px"
                :section3InViewPlus
                ? "70px"
                : section4InViewPlus
                ? "120px"
                : "70px"
               }}
            ></div>
        </div>


            </div>







            <div className='MainFormDiv'>
            <form ref={form} onSubmit={sendEmail}>

            <div >
            {name.length > 0 ? <div className='smallPop'> Name </div> : ""}

                    <input required
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                      type="text" name="name" placeholder="Name" />
                                        <hr />

                  </div>
                 

            <div >
            {email.length > 0 ? <div className='smallPop'> Email </div> : ""}

                    <input required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} type="text" name="email" placeholder="Email Address" />
                                   <hr />

                  </div>

            <div >
            {number.length > 0 ? <div className='smallPop'> Number </div> : ""}

                    <input required
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    type="tel" name="number" placeholder="Phone Number" />
                                      <hr />

                  </div>

            <div >
            {mass.length > 0 ? <div className='smallPop'> Massage </div> : ""}

            <textarea required
            onChange={(e) => setMass(e.target.value)}
            value={mass}
            name="message" placeholder="Message"></textarea>
                              <hr />

                  </div>

                  <button type="submit">Send</button>

            </form>
            </div>





        </div>



    </div>
  )
}

export default Contact