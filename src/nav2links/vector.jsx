import React from 'react'
import Firstnav from '../layout/firstnav'
import Secondnav from '../layout/secondnav'

export default function Vector() {
  return (
    <div>
      <Firstnav/>
      <Secondnav/>
      <div className='vectordiv ms-5 mt-5'>
       
       <h1 className='vectorheader ms-3'>About Vector:</h1>
       <h5 className='vectorheaderfive ms-5'>A vector, in programming, is a type of array that is one dimensional. A vector is often represented as a 1-dimensional array of numbers, referred to as components and is displayed either in column form or row form. Vectors are a logical element in programming languages that are used for storing data.</h5>
       <h6 className='vectorheadersix ms-5'>A vector is a quantity or phenomenon that has two independent properties: magnitude and direction. The term also denotes the mathematical or geometrical representation of such a quantity.

Examples of vectors in nature are velocity, momentum, force, electromagnetic fields and weight. A quantity or phenomenon that exhibits magnitude only, with no specific direction, is called a scalar. Examples of scalars include speed, mass, electrical resistance and hard drive storage capacity.Flexibility and scalability. A designer can size an image in virtually any orientation and locate it anywhere on the screen.
Application and website development. Application and website developers like vector graphics because of scalability and the ability to create images on a variety of devices.
Animation. Vector graphics facilitates movement of images via animation.
Engineering design systems. Computer-aided design applications use vector graphics because of scalability and the ability to easily work with complex mathematical, scientific and engineering formulas.</h6>
       <div className='vectorimg mt-4'></div>
       </div>
    </div>
  )
}
