import React from 'react'
import Firstnav from '../layout/firstnav'
import Secondnav from '../layout/secondnav'
import './nav2links.css'

export default function Python() {
  return (
    <div>
      <Firstnav/>
      <Secondnav/>
      <div className='pythondiv ms-5 mt-5'>
       
      <h1 className='pythonheader ms-3'>About Python:</h1>
      <h4 className='pythonheaderfour ms-5'>An educational institution is a place where people of different ages gain an education, including preschools, childcare, primary-elementary schools, secondary-high schools, and universities. They provide a large variety of learning environments and learning spaces.</h4>
      <h6 className='pythonheadersix ms-5'>Educational architecture, school architecture or school building design is a discipline which practices architect and others for the design of educational institutions, such as schools and universities, as well as other choices in the educational design of learning experiences. The design of building can significantly influence the learning experience of students.Additionally, because schools are important sources of traffic, employment and community activities, school buildings often act as anchor institutions in neighborhoods or communities.The decline of a school can have significant impact on local communities.Educational buildings are often purpose built: designed with architectural choices unique to schools, such as classrooms and centralized restrooms, and other purpose built features. When the schools are closed, its often hard to repurpose the buildings. For example, in the 2013 Chicago closed 50 school buildings, and even in 2023, the government is having trouble identifying new tenants and use.</h6>
      <div className='pythonimg'></div>
      </div>
    </div>
  )
}
