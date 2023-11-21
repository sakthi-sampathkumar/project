import React from "react";
import { Outlet } from "react-router-dom";
import One from "./One";
import Sample from "./Sample";
import Thirdnav from "./Third";


 function Rootlayout(){
    return(
       <div>
      <One />
      <Sample />
      <Thirdnav />
      <Outlet />
      </div>
    );
}

export default Rootlayout;