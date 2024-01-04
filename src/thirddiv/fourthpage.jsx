import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


export default function Fourthpage() {
  return (
    <div className='fourthdiv'>
<Container>
        <Navbar expand="lg" className="thirddivnav mt-5">
        <Container>
        <Navbar.Brand href="#home"><b>YOUR COURSES</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button className='buttonnav' variant="light">See All</Button>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
<div className='banner d-flex'>
    <div className='bannerup ms-3'>
      <div className='bannerimgone'></div>
      <div className='bannertext'></div>
    </div>
    <div className='bannerup ms-3'></div>
</div>
<div className='banner mt-3 d-flex'>
    <div className='bannerdown ms-3'></div>
    <div className='bannerdown ms-3'></div>
</div>
</Container>
    </div>
  )
}
