import React from "react";
import Firstnav from "../layout/firstnav";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import designtwo from './design2img.jpg'
import designthree from './design3img.jpg'
import './courses.css'

function Designing() {
  return (
    <div>
      <Firstnav/>
      <Container className="designimg mt-5">
      <Row>
        <Col className="design" xs={6} md={4}>
          <Image src={designthree} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={designtwo} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={designthree} thumbnail />
        </Col>
      </Row>
    </Container>
    <Container className="designpara mt-5">
      <Row>
        <Col>
        <h1>About Designing</h1>
        <h6>People who produce designs are called designers. The term 'designer' generally refers to someone who works professionally in one of the various design areas. Within the professions, the word 'designer' is generally qualified by the area of practice (for example, a fashion designer, a product designer, a web designer, or an interior designer), but it can also designate others such as architects and engineers (see below: Types of designing). A designer's sequence of activities to produce a design is called a design process, using design thinking and possibly design methods. The process of creating a design can be brief (a quick sketch) or lengthy and complicated, involving considerable research, negotiation, reflection, modeling, interactive adjustment, and re-design.

Designing is also a widespread activity outside of the professions, done by more people than just those formally recognised as designers. In his influential book The Sciences of the Artificial the interdisciplinary scientist Herbert A. Simon proposed that "Everyone designs who devises courses of action aimed at changing existing situations into preferred ones".</h6>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Designing;