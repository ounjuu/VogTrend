import logo from "./logo.svg";
import React from "react";
import "./VogtrendMain.css";
import Header from "./header";
import Footer from "./footer";
function VogtrendMain() {
  return (
    <div className="wrapper">
      <div className="my_header">
        <Header />
      </div>

      <div className="content">중간</div>
      <div className="my_footer">
        <Footer />
      </div>
    </div>
  );
}

export default VogtrendMain;
