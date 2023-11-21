import React from 'react'
import { Link } from 'react-router-dom';
import * as Icon from "react-bootstrap-icons";

const One = () => {
  return (
    <div className='nav1'>
        <div className='nav1left'> <span className='icon'><Icon.BoxSeam size={17} /></span> Free Shipping for orders over $50</div>
        <div className='nav1right'>
        <ul>
            <li><Link to="/about"><u>About</u></Link></li>
            <li><Link to="/contact"><u>Contact</u></Link></li>
            <li><Link to="/helpcenter"><u>Help Center</u></Link></li>
            <li>Call Us <Link to="/callus"><u>123-456-7890</u></Link></li>
            
        </ul>
        </div>
    </div>
  )
}

export default One;
