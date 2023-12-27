import React from 'react'
import Firstnav from '../layout/firstnav'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import html from './html.jpg'
import css from './css.jpg'
import javascript from './javascript.jpg'
import './courses.css'

export default function Frontend() {
  return (
    <div>
      <Firstnav/>
      <Container className="designimg mt-5">
      <Row>
        <Col className="design" xs={6} md={4}>
          <Image src={html} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={css} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={javascript} thumbnail />
        </Col>
      </Row>
    </Container>
      <div className='frontenddiv ms-5 mt-4'>
      <h1 className='frontendheader ms-3'>Frontend:</h1>
      <h6 className='frontendheadersix ms-5'>Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.<br></br></h6>
      <h2 className='frontendheader ms-3'>HTML :</h2>
      <h6 className='frontendheadersix ms-5'>HyperText Markup Language (HTML) is the backbone of any website development process, without which a web page does not exist. Hypertext means that text has links, termed hyperlinks, embedded in it. When a user clicks on a word or a phrase that has a hyperlink, it will bring another web-page. A markup language indicates text can be turned into images, tables, links, and other representations. It is the HTML code that provides an overall framework of how the site will look. HTML was developed by Tim Berners-Lee. The latest version of HTML is called HTML5 and was published on October 28, 2014 by the W3C recommendation. This version contains new and efficient ways of handling elements such as video and audio files.<br></br></h6>
      <h2 className='frontendheader ms-3'>CSS :</h2><h6 className='frontendheadersix ms-5'>
      Cascading Style Sheets (CSS) controls the presentation aspect of the site and allows your site to have its own unique look. It does this by maintaining style sheets that sit on top of other style rules and are triggered based on other inputs, such as device screen size and resolution. The CSS can be added externally, internally, or embedded in the HTML tags.<br></br></h6>
      <h2 className='frontendheader ms-3'>Javascript :</h2><h6 className='frontendheadersix ms-5'>
      JavaScript is an event-based imperative programming language (as opposed to HTML's declarative language model) that is used to transform a static HTML page into a dynamic interface. JavaScript code can use the Document Object Model (DOM), provided by the HTML standard, to manipulate a web page in response to events, like user input.

Using a technique called AJAX, JavaScript code can also actively retrieve content from the web (independent of the original HTML page retrieval), and also react to server-side events as well, adding a truly dynamic nature to the web page experience.</h6>
      </div>
    </div>
  )
}
