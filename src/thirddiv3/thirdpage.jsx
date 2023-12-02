import React from 'react'
import './thirdpage.css'
import { BsBoxSeam } from "react-icons/bs";

export default function Thirdpage() {
  return (
    <div className='thirdpagediv'>
      <div className='innerdiv mt-5 ms-5 d-flex'>
        <div className='pickup d-flex'>
          <div className='imgone mt-4 ms-5'></div>
          <div className='pick mt-5 ms-3'> <h4>Curb-side pickup</h4> </div>
        </div>
        <div className='shipping d-flex'>
          <div className='imgtwo mt-5 ms-4 '><BsBoxSeam size={70} /></div>
          <div className='ship mt-5'> <h4>Free shipping on orders over $50</h4> </div>
        </div>
        <div className='lowprice d-flex'>
          <div className='imgthree'></div>
          <div className='lowp mt-5 ms-5'><h4>Low prices guaranteed</h4></div>
        </div>
        <div className='available d-flex'>
          <div className='imgfour'></div>
          <div className='avai mt-5 ms-5'><h4>Available to you 24/7 </h4></div>
        </div>
      </div>
    </div>
  )
}
