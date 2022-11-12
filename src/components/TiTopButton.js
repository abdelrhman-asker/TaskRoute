import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';

const TiTopButton = () => {
  return (
    <div  className='TiTopButton'>
        <HashLink to="/#">
            <BsFillArrowUpCircleFill/>
        </HashLink>
    </div>
  )
}

export default TiTopButton