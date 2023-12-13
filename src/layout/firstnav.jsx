import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoSearchSharp } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";

function Firstnav() {
  return (
    <Navbar expand="lg" className="firstnavbar">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="path/to/your/image.jpg" // Replace with the actual path to your image file
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          <b>Academy</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5">

            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Designing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Programming</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Graphics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Frontend</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Photography</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Tech</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
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
      <Nav.Link href="#link">Login <IoPersonCircleSharp  size={30}/></Nav.Link>
      <Nav.Link href="#link"> <FaBell size={20}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Firstnav;
