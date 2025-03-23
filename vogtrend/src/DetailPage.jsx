import React, { useState } from "react";
import "./DetailPage.css";
import Header2 from "./components/header2/header2";
import Footer from "./components/footer/footer";

function DetailPage(props) {
  const { setDetailPage } = props;
  // alert 띄우기
  const handleMoreClick = () => {
    alert("준비중입니다.");
  };

  return (
    <div className="wrapper">
      <div className="my_header">
        <Header2 setDetailPage={setDetailPage} />
      </div>
      <div className="content">{/* 메인 이미지 */}</div>
      <div className="my_footer">
        <Footer />
      </div>
    </div>
  );
}

export default DetailPage;
