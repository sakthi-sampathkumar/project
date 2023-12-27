import React from 'react'
import Firstnav from '../layout/firstnav'
import './nav1files.css'

export default function Tech() {
  return (
    <div>
      <Firstnav/>
    
      <div className='tech ms-5 mt-5'>
      <h1 className='techheader ms-3 mt-5'>Tech</h1>
      <p className='techpara ms-5 mt-3'>Technology is the application of conceptual knowledge for achieving practical goals, especially in a reproducible way.<br></br>
      The word technology can also mean the products resulting from such efforts, including both tangible tools such as utensils or machines, and intangible ones such as software. Technology plays a critical role in science, engineering, and everyday life.

Technological advancements have led to significant changes in society. The earliest known technology is the stone tool, used during prehistoric times, followed by the control of fire, which contributed to the growth of the human brain and the development of language during the Ice Age. The invention of the wheel in the Bronze Age allowed greater travel and the creation of more complex machines. More recent technological inventions, including the printing press, telephone, and the Internet, have lowered barriers to communication and ushered in the knowledge economy.</p>
<div className='techimg'></div>
      </div>
    </div>
  )
}
