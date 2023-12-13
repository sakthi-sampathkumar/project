import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./firstnav";

 function Rootlayout(){
    return(
       <div>
      <Navbar/>
      <Outlet />
      </div>
    );
}

export default Rootlayout;