import React from 'react'
import './home.css';
import { IoHandLeftSharp } from "react-icons/io5";
import { IoHandRightSharp } from "react-icons/io5";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
// import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className='background d-flex p-absolute'>
      {/* <motion.a
  animate={{ rotate: 180 }}
  transition={{ type: 'spring', damping: 300 }}
/> */}

      <div className='textone'><h2><span style={{color:'gold'}}><IoHandLeftSharp size={20} /><IoHandRightSharp size={20}/></span>  Hello friends<br/>I Am Sofia And We Want To Start A <span  style={{color: 'violet'}}>Web Design</span> Course Together.<br/>Do You Like To Join It <span style={{color:'gold'}}><BsEmojiHeartEyesFill size={25}/></span> ?</h2>
      <div className='but&img d-flex'><Button variant="dark mt-4">Start course now > </Button><div className='discount ms-5 mt-2'></div></div>
      </div>
      <div className='leftbackground ms-5 mt-4'></div>
    </div>
  )
}