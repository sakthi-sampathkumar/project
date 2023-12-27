import React from 'react'
import Firstnav from '../layout/firstnav'
import Image from 'react-bootstrap/Image';
import programming from './programming img.jpg'
import './courses.css'

export default function Programming() {
  return (
    <div>
        <Firstnav/>
        <Image src={programming} fluid  className='programimg mt-5'/>
      <div className='programdiv ms-5 mt-3'>
      <h1>Programming:</h1>
      <h6>Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.<br></br>It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages. Programmers typically use high-level programming languages that are more easily intelligible to humans than machine code, which is directly executed by the central processing unit. Proficient programming usually requires expertise in several different subjects, including knowledge of the application domain, details of programming languages and generic code libraries, specialized algorithms, and formal logic.

Auxiliary tasks accompanying and related to programming include analyzing requirements, testing, debugging (investigating and fixing problems), implementation of build systems, and management of derived artifacts, such as programs' machine code. While these are sometimes considered programming, often the term software development is used for this larger overall process – with the terms programming, implementation, and coding reserved for the writing and editing of code per se. Sometimes software development is known as software engineering, especially when it employs formal methods or follows an engineering design process.

</h6>
      </div>

    </div>
  )
}
