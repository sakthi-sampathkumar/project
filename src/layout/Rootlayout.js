import React from "react";
import { Outlet } from "react-router-dom";
import Firstnav from "./firstnav";
import Secondnav from "./secondnav";

 function Rootlayout(){
    return(
       <div>
      <Firstnav/>
      <Secondnav/>
      <Outlet />
      </div>
    );
}

export default Rootlayout;