import React from "react";
import "./TitleText.css";

// 메인페이지 제목들
const TitleText = (props) => {
  const { text, showMore = false, onMoreClick } = props;
  return (
    <div className="TitleTextContainer">
      <div className="TitleText">
        <h2>{text}</h2>
        {showMore && (
          <button onClick={onMoreClick} className="MoreButton">
            more &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default TitleText;
