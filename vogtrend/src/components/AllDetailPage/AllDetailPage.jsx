import React, { useState } from "react";
import "./AllDetailPage.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainTitleImg from "../MainTitleImg/MainTitleImg";
import MustRead from "../MustRead/MustRead";
import LatestStories from "../LatestStories/LatestStories";
import DetailLeft from "../DetailLeft/DetailLeft";

function AllDetailPage(props) {
  const { detailPage, setDetailPage, fashionAllData, midDataObject } = props;
  // alert 띄우기
  const handleMoreClick = () => {
    alert("준비중입니다.");
  };

  return (
    <div className="AllDetailPageContent">
      <div className="AllDetailPageLeft">
        {/* LatestStories Data */}
        <DetailLeft
          detailPage={detailPage}
          fashionAllData={fashionAllData}
          midDataObject={midDataObject}
        />
      </div>
    </div>
  );
}

export default AllDetailPage;
