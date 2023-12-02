import React from 'react'
import './secondpage.css'

export default function Secondpage() {
  return (
    <div className='secondpage1'>
      <div className='spleft'>

        <div className='splword'>
          <p className='holiday'>Holiday Deals</p>

        <div className='upto' >
          <h1 className='up'>Up to 30% off</h1>
        </div>

        <div className='selected'>
          <p className='smart'>Selected Smartphone Brands </p>
          <button className='sho'>Shop</button>
          </div>
          </div> 

      </div>
      <div className='spright'>
        <div className='sprwords '>
        <p className='just fs-4'>Just In</p>

        <div>
        <h1 className='your'>Take Your Sound Anywhere</h1>
        </div>

        <div>
          <p className='top mt-8 fs-5'>Top Headphone Brands</p>
          <button className='sho'>Shop</button>
        </div>
        <div></div>
        </div>
      </div>
    </div>
  )
}
