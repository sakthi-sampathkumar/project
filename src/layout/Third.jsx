import React from 'react'
import { Link } from 'react-router-dom'
import '../layout/Thirdnav.css'

const Thirdnav = () => {
  return (
    <div className='thirdnav'>
     <div className='onenav'>
     <ul>
        <li> <Link to="shopall" className='third'>Shop All</Link> </li>
        <li> <Link to="computers" className='third'>Computers</Link> </li>
        <li> <Link to="tablets" className='third'>Tablets</Link> </li>
        <li> <Link to="drones" className='third'>Drones & Cameras</Link> </li> 
      </ul>
     </div> 

      <div className='twonav'>
        <ul>
          <li> <Link to="audio" className='third'>Audio</Link> 
            <div className='dropdown-content'>
                <ul>
                  <li><Link  to="headpones">Headphones</Link></li>
                  <li><Link  to="speakers">Speakers</Link></li>
                </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='threenav'>
        <ul>
        <li> <Link to="mobile" className='third'>Mobile</Link> </li>
        <li> <Link to="tv" className='third'>T.V & Home Cinima</Link> </li>
        <li> <Link to="wearabletech" className='third'>Wearable Tech</Link> </li>
        <li> <Link to="sale" className='third'>Sale</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Thirdnav;