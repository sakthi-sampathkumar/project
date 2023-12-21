import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFilter } from "react-icons/fa6";
import './home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBookBookmark } from "react-icons/fa6";

function Course() {
  return (
    <Container>
 <Navbar expand="lg" className="thirddivnav mt-5">
      <Container>
        <Navbar.Brand href="#home"><b>NEW COURSES</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='allcourses'><b>All courses</b></Nav.Link>
            <Nav.Link href="#link" className='navcontent ms-3'><b>Design</b></Nav.Link>
            <Nav.Link href="#link" className='navcontent ms-3'><b>Development</b></Nav.Link>
            <Nav.Link href="#link" className='navcontent ms-3'><b>Photography</b></Nav.Link>
            <Nav.Link href="#link" className='navcontent ms-3'><b>Music</b></Nav.Link>
            <Nav.Link href="#link" className='navcontent ms-3'><FaFilter size={20}/></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Row md={4}>
        <Col><Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src="1course/100px180" />
      <Card.Body>
        <Card.Title className='cardtitle'>Learn Figma-UI/UX design Essential Training</Card.Title>
        <Card.Text>
        <FaBookBookmark />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</Col>

        <Col xs={6}><Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='cardtitle'>Python for Beginners-Learn Programming....</Card.Title>
        <Card.Text>
        <FaBookBookmark />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>

        <Col><Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='cardtitle'>Acoustic Guitar and Electric Guitar Started</Card.Title>
        <Card.Text>
        <FaBookBookmark />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>

        <Col><Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='cardtitle'>Mobile App Development with flutter & Dart...</Card.Title>
        <Card.Text>
          <FaBookBookmark />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>

      </Row>
    </Container>
  );
}

export default Course;