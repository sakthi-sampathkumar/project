import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoSearchSharp } from "react-icons/io5";
import './home.css';

// ... (previous imports)

export default function Second() {
  return (
    <div className='seconddiv'>
      <div className='texttwo'><h2>Search Among<span  style={{color: 'violet'}}> 58340 </span> Courses And    </h2></div>
      <div className='textthree'>
        <h2>Find Your Favourite Course</h2>
      </div>
      <div className='twobutton d-flex mt-3'>
        <Button className='categoriesbutton' variant="dark">Categories</Button>
        <Row>
          <Col xs="auto mt-1">
            <Form.Control
              type="text"
              placeholder="Search"
              id="search"
              className='search ms-2'
              style={{ width: '480px' }} // Set the width as needed
            />
          </Col>
          <Col className='searchbutton' xs="auto">
            <Button variant='white' type="submit"><IoSearchSharp size={25}/></Button>
          </Col>
        </Row>
        <h6 className='sidetext mt-2'>Or view the following courses......</h6>
      </div>
    </div>
  );
}
