import React from 'react'
import Firstnav from '../layout/firstnav'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contactus() {
  return (
    <div>
      <Firstnav/>
      <div className='contactdiv ms-5 mt-5'>
      <h1 className='contactheader ms-2'>Contact By:</h1>

      <div className='contactadd ms-5'>
      <h4 className='contactheaderthree ms-4'> Address: 
      <h6>27,Near Fun Mall, Peelamedu,Coimbatore.</h6> 
      </h4>
      </div>

      <div className='contactmail ms-5'>
      <h4 className='contactheaderthree ms-4'><IoMdMail />  Email: 
      <h6>academy@gmail.com</h6>
      </h4> 
      </div>

      <div className='contactphone ms-5'>
      <h4 className='contactheaderthree ms-4'><FaPhoneAlt />  Contact:
      <h6>+91 9876543217</h6></h4>
      </div>

      <div className='contactmap'>
      <iframe src="https://www.google.com/maps/place/Link+Rd,+Kalluri+Nagar,+Peelamedu,+Coimbatore,+Tamil+Nadu/@11.0185294,77.00872,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba8578085315801:0xdaa27cf3a2a22912!8m2!3d11.0185241!4d77.0112949!16s%2Fg%2F1235p0035?authuser=0&entry=ttu" ></iframe>
      
      </div>

      </div>
    </div>
  )
}
