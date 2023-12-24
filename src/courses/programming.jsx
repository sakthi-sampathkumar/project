import React from 'react'
import Firstnav from '../layout/firstnav'
import Image from 'react-bootstrap/Image';
import programming from './programming img.jpg'

export default function Programming() {
  return (
    <div>
        <Firstnav/>
        <Image src={programming} fluid />
      <h1>Programming</h1>

    </div>
  )
}
