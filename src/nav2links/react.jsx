import React from 'react'
import Firstnav from '../layout/firstnav'
import Secondnav from '../layout/secondnav'

export default function Reactnav() {
  return (
    <div>
      <Firstnav/>
      <Secondnav/>
      <div className='reactdiv ms-5 mt-5'>
       
      <h1 className='reactheader ms-3'>About React:</h1>
      <h5 className='reactheaderfive ms-5'>React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library.React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. It aims to allow developers to create fast user interfaces for websites and applications alike easily. The main concept of React. js is virtual DOM.</h5>
      <h6 className='reactheadersix ms-5'>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.

React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.</h6>
      <div className='reactimg mt-4'></div>
      </div>
    </div>
  )
}
