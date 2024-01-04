import React from 'react'
import './thirdfourthdiv.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import instructor1 from './instructor1.png'
import instructor2 from './instructor2.png'
import instructor3 from './instructor3.png'
import instructor4 from './instructor4.png'
import instructor5 from './instructor5.png'
import instructor6 from './instructor6.png'

export default function Instructor() {
  return (
    <div className='instructor d-flex'> 
      <div className='instructorleft'>
        <div>
            <h1><span style={{color: 'violet'}}>Best</span>   Instructors</h1>
            <h6 className='instructorheadersix mt-4'>At The Academy, We Strive To Bring Together The Best<br/> Professors For The Best Courses</h6>
            <Button className='instructorbutton' variant="dark">All Instructors</Button>
            
        </div>
        </div>
      <div className='instructorright d-block'>
            <div className='insrighttop'>
            <Container>
            <Row>
        <Col>
            <Card style={{ width: '15rem' }} className='cardcard mt-5 ms-5'>
            <Card.Img variant="top" src={instructor1} />
            <Card.Body className='cardbody d-flex'>
            <Card.Title  style={{fontSize:15}}>Jon Kantner</Card.Title>
            <Card.Text  style={{fontSize:15}} className='cardtext ms-5'> Designer </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '15rem' }} className='cardcard mt-5 ms-2'>
            <Card.Img variant="top" src={instructor2} />
            <Card.Body className='cardbody d-flex'>
            <Card.Title  style={{fontSize:15}}>Debbie LaChusa</Card.Title>
            <Card.Text  style={{fontSize:15}} className='cardtext ms-5'> SEO </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '15rem' }} className='cardcard mt-5 ms-2'>
            <Card.Img variant="top" src={instructor3} />
            <Card.Body className='cardbody d-flex'>
            <Card.Title  style={{fontSize:15}}>Edwin Diaz</Card.Title>
            <Card.Text  style={{fontSize:15}} className='cardtext ms-5'> Composer  </Card.Text>
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
            <Card style={{ width: '15rem' }} className='cardcard mt-5 ms-5'>
            <Card.Img variant="top" src={instructor4} />
            <Card.Body className='cardbody d-flex'>
            <Card.Title  style={{fontSize:15}}>Cassie Evans</Card.Title>
            <Card.Text  style={{fontSize:15}} className='cardtext ms-4'> Photographer </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '15rem' }} className='cardcard mt-5 ms-2'>
            <Card.Img variant="top" src={instructor5} />
            <Card.Body className='cardbody d-flex'>
            <Card.Title  style={{fontSize:15}}>Erich Andreas</Card.Title>
            <Card.Text  style={{fontSize:15}} className='cardtext ms-4'>Programmer</Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '15rem' }} className='cardcard mt-5 ms-2'>
            <Card.Img variant="top" src={instructor6} />
            <Card.Body className='cardbody d-flex'>
            <Card.Title  style={{fontSize:15}}>Jason Alle</Card.Title>
            <Card.Text  style={{fontSize:15}} className='cardtext ms-5'> Accounting </Card.Text>
            </Card.Body>
            </Card>
        </Col>
            </Row>
            </Container>
            </div>

      </div>
      </div>
  )
}
