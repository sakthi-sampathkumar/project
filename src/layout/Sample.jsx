
import '../layout/Sample.css'
import React from 'react';
import * as Icon from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";


const Sample = () => {
  return (
    <div className='nav2'>
      <div className='nav2left'><h1>TechShed</h1>
      <input type='text' placeholder='   Search...' name='search' className='search1'></input>
      <button type="submit"><span className='icon2'> <Icon.Search size={15}></Icon.Search> </span></button>
      </div>
      <div className='aa'>
      <ul>
        <li><IoPersonCircleSharp size={25} /> <Link to="login" className='log'>Log In</Link> </li>
        <li><Icon.Heart size={20}></Icon.Heart> <Link to="fav" className='fav'>Favorties</Link> </li>
        <li><Icon.Cart2 size={20}></Icon.Cart2> <Link to="kart">#</Link> </li>
      </ul>
      </div>
    </div>
  )
}

export default Sample;

