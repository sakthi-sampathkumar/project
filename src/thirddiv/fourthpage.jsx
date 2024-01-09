import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import up1 from './up1.png'
import up2 from './up2.png'



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

      <Container>
      <Row>
      <Col>
        <Card  className='cardupone'>
        <div className='cardup d-flex'>
          
        <Card.Img className='cardimgup' variant="top" src={up1} />

        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        
        </div>
        </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={up2} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
      </Row>
    </Container>

{/* <div className='banner d-flex'>
    <div className='bannerup ms-3'>
      <div className='bannerimgone'></div>
      <div className='bannertext'></div>
    </div>
    <div className='bannerup ms-3'></div>
</div>
<div className='banner mt-3 d-flex'>
    <div className='bannerdown ms-3'></div>
    <div className='bannerdown ms-3'></div>
</div> */}
</Container>
    </div>
  )
}
