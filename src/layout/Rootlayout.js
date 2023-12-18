import React from "react";
import { Outlet } from "react-router-dom";
import Firstnav from "./firstnav";
import Secondnav from "./secondnav";
import Home from "../firstdiv/home";
import Seconddiv from "../firstdiv/Second";

 function Rootlayout(){
    return(
       <div>
      <Firstnav/>
      <Secondnav/>
      <Home/>
      <Seconddiv/>
      <Outlet />
      </div>
    );
}

export default Rootlayout;