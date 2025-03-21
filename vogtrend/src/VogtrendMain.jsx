import logo from "./logo.svg";
import React from "react";
import "./VogtrendMain.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainTitleImg from "./components/MainTitleImg/MainTitleImg";
import TodayStories from "./components/TodayStories/TodayStories";

function VogtrendMain() {
  return (
    <div className="wrapper">
      <div className="my_header">
        <Header />
      </div>
      <div className="content">
        {/* 메인 이미지 */}
        <MainTitleImg />

        {/* Today’s Stories - 메인 첫번째*/}
        <TodayStories />
      </div>
      <div className="my_footer">
        <Footer />
      </div>
    </div>
  );
}

export default VogtrendMain;
