import React from "react";
import "./TodayStories.css";
import TitleText from "../TitleText/TitleText";
import MidImgCard from "../MidImgCard/MidImgCard";

const TodayStories = () => {
  const handleMoreClick = () => {
    alert("준비중입니다.");
  };
  const midDataObject = {
    fashionTitle: "패션 화보",
    date: "2025.03.20",
    subTitle: "코모의 햇살 아래, 정해인의 '이탈리안 뷰티'",
    img: "/img/midImg.webp",
  };

  return (
    <div className="TodayStoriesContainer">
      <div className="TodayStories">
        {/* 타이틀 */}
        <TitleText
          text="TODAY’S STORIES"
          showMore={false}
          onMoreClick={handleMoreClick}
        />

        {/* 중간 사이즈 card */}
        <div className="TodayStoriesLeft">
          <MidImgCard midData={midDataObject} />
        </div>

        {/* 작은 사이즈 cards */}
        <div className="TodayStoriesRight"></div>
      </div>
    </div>
  );
};

export default TodayStories;
