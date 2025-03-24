import "./BigTitleDetail.css";
import React, { useState } from "react";
// DetailPage 제목들
const BigTitleDetail = (props) => {
  const { BigTitle, texts, midDetailPage, setMidDetailPage } = props;
  const [underlinedIndex, setUnderlinedIndex] = useState(null);
  const handleClick = (title, index) => {
    setMidDetailPage(title);
    setUnderlinedIndex(index);
  };

  return (
    <div className="BigTitleDetailContainer">
      <div className="BigTitleDetail">
        <h2 className="BigTitleText">{BigTitle}</h2>
        <div className="midTitleText">
          {texts &&
            texts.map((title, index) => (
              <div
                key={index}
                className={`midText ${
                  underlinedIndex === index ? "underLine" : ""
                }`}
                onClick={() => handleClick(title, index)}
              >
                {title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BigTitleDetail;
