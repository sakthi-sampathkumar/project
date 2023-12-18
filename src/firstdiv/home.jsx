import React from 'react'
import './home.css';
import { IoHandLeftSharp } from "react-icons/io5";
import { IoHandRightSharp } from "react-icons/io5";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div className='background'>
      <div className='textone'><h2><span style={{color:'gold'}}><IoHandLeftSharp size={20} /><IoHandRightSharp size={20}/></span>  Hello friends<br/>I Am Sofia And We Want To Start A <span  style={{color: 'violet'}}>Web Design</span> Course Together.<br/>Do You Like To Join It <span style={{color:'gold'}}><BsEmojiHeartEyesFill size={25}/></span> ?</h2>
      <Button variant="dark mt-4">Start course now > </Button>
      </div>
      
    </div>
  )
}