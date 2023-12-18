import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPenNib } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import './firstnav.css';

function Secondnav() {
  return (
    <Navbar expand="lg" className="secondnavbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#link" className='computer ms-5'><MdOutlineComputer /></Nav.Link>
            <Nav.Link href="#home">Python</Nav.Link>
            <Nav.Link href="#link">React</Nav.Link>
            <Nav.Link href="#link">Unity</Nav.Link>
            <Nav.Link href="#link" className='pen ms-5'> <FaPenNib /> </Nav.Link>
            <Nav.Link href="#link">UI & UX</Nav.Link>
            <Nav.Link href="#link">Vector</Nav.Link>
            <Nav.Link href="#link" className='camera ms-5'> <BsCameraReelsFill /> </Nav.Link>
            <Nav.Link href="#link">After effects</Nav.Link>
            <Nav.Link href="#link">Lightroom</Nav.Link>
            <Nav.Link href="#link">Photography</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Secondnav;