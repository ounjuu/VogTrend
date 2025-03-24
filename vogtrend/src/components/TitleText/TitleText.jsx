import React from "react";
import "./TitleText.css";

// 메인페이지 제목들
const TitleText = (props) => {
  const { text, showMore, handleMoreClick } = props;
  return (
    <div className="TitleTextContainer">
      <div className="TitleText" onClick={() => alert("준비중입니다.")}>
        <h2>{text}</h2>
        {showMore && (
          <button onClick={handleMoreClick} className="MoreButton">
            MORE &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default TitleText;
