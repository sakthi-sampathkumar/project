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
      <iframe
      title="Google Map"
      className="position-relative rounded w-100 h-100"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
      frameBorder="0"
      style={{ minHeight: '400px', border: '0' }}
      allowFullScreen
      aria-hidden="false"
      tabIndex="0" />
      
      </div>

      </div>
    </div>
  )
}
