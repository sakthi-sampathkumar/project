import React from "react";
import { Outlet } from "react-router-dom";
import One from "./One";
import Sample from "./Sample";
import Thirdnav from "./Third";
import Firstpage from "../firstdiv/firstpage";
import Secondpage from "../seconddiv/secondpage";
import White from "./white";
import Thirdpage from "../thirddiv3/thirdpage";
import Fourthpage from "../fourthdiv/fourthpage";



 function Rootlayout(){
    return(
       <div>
      <White />
      <One />
      <Sample />
      <Thirdnav />
      <Firstpage />
      <Secondpage />
      <Thirdpage />
      <Fourthpage/>
      <Outlet />
      </div>
    );
}

export default Rootlayout;