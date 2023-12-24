import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoSearchSharp } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import './firstnav.css';
import { Link } from 'react-router-dom';

function Firstnav() {
  return (
    <Navbar expand="lg" className="firstnavbar sticky-top shadow">
      <Container>
        <Navbar.Brand> <Link to='/home'id='link' className='book ms-5'> <FaBookOpen size={30}/> <b>Academy</b></Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-3">

            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to='/design'id='link'>Designing </Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link to='/programming' id='link'>Programming</Link> </NavDropdown.Item>
              <NavDropdown.Item><Link to='/graphics'id='link'>Graphics</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/frontend'id='link'>Frontend</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/photography' id='link'>Photography</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link> <Link to='/tech' id='link'>Tech</Link> </Nav.Link>
            <Nav.Link><Link to='/contactus' id='link'>Contact Us</Link></Nav.Link>
            <Nav.Link><Link to='/aboutus' id='link'>About Us</Link></Nav.Link>
            <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 ms-5"
            />
          </Col>
          <Col xs="auto">
            <Button className='button bg-black' type="submit"><IoSearchSharp /></Button>
          </Col>
        </Row>
      </Form>
      <Nav.Link> <Link to='/login' id='link'>Login <IoPersonCircleSharp  size={30}/></Link> </Nav.Link>
      <Nav.Link href="#link"> <FaBell size={20}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Firstnav;
