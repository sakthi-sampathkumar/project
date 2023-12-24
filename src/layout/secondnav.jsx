import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPenNib } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import './firstnav.css';
import { Link } from 'react-router-dom';

function Secondnav() {
  return (
    <Navbar expand="lg" className="secondnavbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#link" className='computer ms-5'><MdOutlineComputer /></Nav.Link>
            <Nav.Link> <Link to='/python' id='link' className='py ms-2'>Python</Link> </Nav.Link>
            <Nav.Link> <Link to='/react' className='py ms-4'id='link'>React</Link></Nav.Link>
            <Nav.Link> <Link to='/unity' className='py ms-4'id='link'>Unity</Link> </Nav.Link>
            <Nav.Link href="#link" className='pen ms-5'> <FaPenNib /> </Nav.Link>
            <Nav.Link> <Link to='/uiux' className='py ms-2'id='link'>UI & UX</Link> </Nav.Link>
            <Nav.Link> <Link to='/vector' className='py ms-4'id='link'>Vector</Link> </Nav.Link>
            <Nav.Link href="#link" className='camera ms-5'> <BsCameraReelsFill /> </Nav.Link>
            <Nav.Link> <Link to='/aftereffects' className='py ms-2'id='link'>After effects</Link> </Nav.Link>
            <Nav.Link> <Link to='/lightroom' className='py ms-4'id='link'>Lightroom</Link> </Nav.Link>
            <Nav.Link> <Link to='/photography' className='py ms-4'id='link'>Photography</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Secondnav;