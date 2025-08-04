import React from "react";
import "../Style/Landing.css";
import Navbar from "./Navbar";
import DonarDashBoard from "./DonarDashBoard";
const LandingPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center font-[inter] relative">
     <DonarDashBoard/>
    
    </div>
  );
};

export default LandingPage;
