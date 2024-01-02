import React from 'react'
import './thirdfourthdiv.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Instructor() {
  return (
    <div className='instructor d-flex'> 
      <div className='instructorleft'>
        <div>
            <h1><span style={{color: 'violet'}}>Best</span>   Instructors</h1>
            <h6 className='instructorheadersix mt-4'>At The Academy, We Strive To Bring Together The Best<br/> Professors For The Best Courses</h6>
            <Button className='instructorbutton' variant="dark">All Instructors</Button>
            {/* <div className='instructorimg'></div> */}
        </div>
        </div>
      <div className='instructorright'>
      <div className='instructorright d-block'>
            <div className='insrighttop'>
            <Container>
            <Row>
        <Col>
            <Card  >
            <Card.Img variant="top" src="holder.js/100px180" />
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
        <Col>
            <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
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
        <Col>
            <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
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
            </Container>
            </div>


            <div className='insrightbottom'>
            <Container>
            <Row>
        <Col>
            <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
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
        <Col>
            <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
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
        <Col>
            <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
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
            </Container>
            </div>
      </div>
    </div></div>
  )
}
