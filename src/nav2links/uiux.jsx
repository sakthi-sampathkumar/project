import React from 'react'
import Firstnav from '../layout/firstnav'
import Secondnav from '../layout/secondnav'

export default function Uiux() {
  return (
    <div>
      <Firstnav/>
      <Secondnav/>
      <div className='uiuxdiv ms-5 mt-5'>
       
       <h1 className='uiheader ms-3'>About UI:</h1>
       <h5 className='uiheaderfive ms-5'>User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable.</h5>
       <h6 className='uiheadersix ms-5'>User interface (UI) design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience. In computer or software design, user interface (UI) design primarily focuses on information architecture. It is the process of building interfaces that clearly communicate to the user what's important. UI design refers to graphical user interfaces and other forms of interface design. The goal of user interface design is to make the user's interaction as simple and efficient as possible, in terms of accomplishing user goals (user-centered design).

User interfaces are the points of interaction between users and designs. There are three types:

Graphical user interfaces (GUIs) – Users interact with visual representations on a computer's screen. The desktop is an example of a GUI.
Interfaces controlled through voice – Users interact with these through their voices. Most smart assistants, such as Siri on smartphones or Alexa on Amazon devices, use voice control.
Interactive interfaces utilizing gestures – Users interact with 3D design environments through their bodies, e.g., in virtual reality (VR) games.</h6>
       <div className='uiuximg mt-5'></div>

       <h1 className='uxheader ms-4'>About UX:</h1>
       <h5 className='uxheaderfive ms-5'>User experience (UX) design is the process of building products that are easy and enjoyable for people to use. By building products to be as effortless as possible for users, you can encourage adoption, retention, and loyalty.</h5>
       <h6 className='uxheadersix ms-5'>User experience design (UX design, UXD, UED, or XD) defines the experience a user would go through when interacting with a company, its services, and its products. User experience design is a user centered design approach because it considers the user's experience when using a product or platform. Research, data analysis, and test results drive design decisions in UX design rather than aesthetic preferences and opinions. Unlike user interface design, which focuses solely on the design of a computer interface, UX design encompasses all aspects of a user's perceived experience with a product or website, such as its usability, usefulness, desirability, brand perception, and overall performance. UX design is also an element of the customer experience (CX), and encompasses all aspects and stages of a customer's experience and interaction with a company.User experience design is a conceptual design discipline rooted in human factors and ergonomics. This field, since the late 1940s, has focused on the interaction between human users, machines, and contextual environments to design systems that address the user's experience since the late 1940s. User experience became a positive insight for designers in the early 1990s with the proliferation of workplace computers. Donald Norman, a professor and researcher in design, usability, and cognitive science, coined the term "user experience" and brought it to a wider audience.</h6>
       </div>
    </div>
  )
}
