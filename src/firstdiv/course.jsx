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
import imgone from './1course.png';
import imgtwo from './2course.png';
import imgthree from './3course.png';
import imgfour from './4course.png';
import { IoMdPerson } from "react-icons/io";
import { IoMdTrophy } from "react-icons/io";
import imgfive from './5course.png';
import imgsix from './6course.png';
import imgseven from './7course.png';
import imgeight from './8course.png'


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

      {/* first row four cards start here */}
      
      <Row md={4}>
        <Col className='card mt-5' style={{borderStyle:'none'}}><Card >
      <Card.Img className='cardimg' variant="top" src={imgone} />
      <Card.Body id='cardbody'>
        <Card.Title id='cardtitle'>Learn Figma-UI/UX design Essential Training</Card.Title>
        <Card.Text id='cardtextone'>
        <FaBookBookmark  size={15}/> Lesson-6 <IoMdPerson  size={15}/> Student-198 <IoMdTrophy size={15}/> Beginner
        </Card.Text>
       <div className='buttonimg d-flex'> <Button variant="dark">Start Course</Button><div className='starfour'></div></div>
      </Card.Body>
    </Card>
</Col>

        <Col  className='card mt-5'style={{borderStyle:'none'}}><Card>
      <Card.Img className='cardimg' variant="top" src={imgtwo} />
      <Card.Body>
        <Card.Title id='cardtitle'>Python for Beginners-Learn Programming....</Card.Title>
        <Card.Text id='cardtexttwo'>
        <FaBookBookmark  size={15}/> Lesson-21 <IoMdPerson  size={15}/> Student-99 <IoMdTrophy size={15}/> Advanced
        </Card.Text>
        <div className='buttonimg d-flex'> <Button variant="dark">Start Course</Button><div className='starthree'></div></div>
      </Card.Body>
    </Card></Col>

        <Col className='card mt-5'style={{borderStyle:'none'}}><Card >
      <Card.Img className='cardimg' variant="top" src={imgthree} />
      <Card.Body>
        <Card.Title id='cardtitle'>Acoustic Guitar and Electric Guitar Started</Card.Title>
        <Card.Text id='cardtexttwo'>
        <FaBookBookmark  size={15}/> Lesson-8 <IoMdPerson  size={15}/> Student-301 <IoMdTrophy size={15}/> Advanced
        </Card.Text>
        <div className='buttonimg d-flex'><Button variant="dark">Start Course</Button> <div className='starfive'></div></div>
      </Card.Body>
    </Card></Col>

        <Col className='card mt-5'style={{borderStyle:'none'}}><Card >
      <Card.Img className='cardimg' variant="top" src={imgfour} />
      <Card.Body>
        <Card.Title id='cardtitlefour'>Mobile App Development with flutter & Dart...</Card.Title>
        <Card.Text id='cardtexttwo'>
        <FaBookBookmark  size={15}/> Lesson-15 <IoMdPerson  size={15}/> Student-215 <IoMdTrophy size={15}/> Beginner
        </Card.Text>
        <div className='buttonimg d-flex'> <Button variant="dark">Start Course</Button><div className='startwo'></div></div>
      </Card.Body>
    </Card></Col>

      </Row>
      {/* first row four cards ends here */}

      {/* second row four cards starts here */}

      
      <Row md={4}>
        <Col className='card mt-5'style={{borderStyle:'none'}}><Card>
      <Card.Img className='cardimg' variant="top" src={imgfive} />
      <Card.Body id='cardbody'>
        <Card.Title id='cardtitle'>Ionic React: Mobile Development with React</Card.Title>
        <Card.Text id='cardtextone'>
        <FaBookBookmark  size={15}/> Lesson-15 <IoMdPerson  size={15}/> Student-67 <IoMdTrophy size={15}/> Advanced
        </Card.Text>
       <div className='buttonimg d-flex'> <Button variant="dark">Start Course</Button><div className='starfive'></div></div>
      </Card.Body>
    </Card>
</Col>

        <Col  className='card mt-5'style={{borderStyle:'none'}}><Card>
      <Card.Img className='cardimg' variant="top" src={imgsix} />
      <Card.Body>
        <Card.Title id='cardtitle'>Sports Mangement: Essential Course</Card.Title>
        <Card.Text id='cardtexttwo'>
        <FaBookBookmark  size={15}/> Lesson-26 <IoMdPerson  size={15}/> Student-156 <IoMdTrophy size={15}/> Average
        </Card.Text>
        <div className='buttonimg d-flex'> <Button variant="dark">Start Course</Button><div className='starthree'></div></div>
      </Card.Body>
    </Card></Col>

        <Col className='card mt-5'style={{borderStyle:'none'}}><Card>
      <Card.Img className='cardimg' variant="top" src={imgseven} />
      <Card.Body>
        <Card.Title id='cardtitle'>How to Market Yourself As A Consultant</Card.Title>
        <Card.Text id='cardtexttwo'>
        <FaBookBookmark  size={15}/> Lesson-33 <IoMdPerson  size={15}/> Student-64 <IoMdTrophy size={15}/> Beginner
        </Card.Text>
        <div className='buttonimg d-flex'> <Button variant="dark">Start Course</Button><div className='starone'></div></div>
      </Card.Body>
    </Card></Col>

        <Col className='card mt-5'style={{borderStyle:'none'}}><Card>
      <Card.Img className='cardimg' variant="top" src={imgeight} />
      <Card.Body>
        <Card.Title id='cardtitlefour'>Become A Project Manager I Learn the Skill...</Card.Title>
        <Card.Text id='cardtexttwo'>
        <FaBookBookmark  size={15}/> Lesson-5 <IoMdPerson  size={15}/> Student-134 <IoMdTrophy size={15}/> Advanced
        </Card.Text>
        <div className='buttonimg d-flex'> <Button variant="dark">Start Course</Button><div className='starfour'></div></div>
      </Card.Body>
    </Card></Col>

      </Row>
    </Container>
  );
}

export default Course;