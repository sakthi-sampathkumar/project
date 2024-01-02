import React from "react";
import { Outlet } from "react-router-dom";
import Firstnav from "./firstnav";
import Secondnav from "./secondnav";
import Home from "../firstdiv/home";
import Second from "../firstdiv/Second";
import Course from "../firstdiv/course";
import Instructor from "../thirddiv/instructor";

 function Rootlayout(){
    return(
       <div>
      <Firstnav/>
      <Secondnav/>
      <Home/>
      <Second/>
      <Course/>
      <Instructor/>
      <Outlet />
      </div>
    );
}

export default Rootlayout;