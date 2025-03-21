import logo from "./logo.svg";
import React, { useState } from "react";
import "./VogtrendMain.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainTitleImg from "./components/MainTitleImg/MainTitleImg";
import TodayStories from "./components/TodayStories/TodayStories";
import BestStories from "./components/BestStories/BestStories";
import MustRead from "./components/MustRead/MustRead";
function VogtrendMain() {
  // alert 띄우기
  const handleMoreClick = () => {
    alert("준비중입니다.");
  };

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

        {/* Best Stories - 메인 두번째*/}
        <BestStories />

        {/* Must Read - 메인 세번째 */}
        <MustRead />
      </div>
      <div className="my_footer">
        <Footer />
      </div>
    </div>
  );
}

export default VogtrendMain;
