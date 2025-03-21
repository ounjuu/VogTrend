import React from "react";
import "./SmallCard.css";

// 메인페이지 제목들
const SmallCard = (props) => {
  const { isSquare, smallCardData, swiperClass } = props;

  return (
    <div className="SmallCardContainer">
      <div className="SmallCard">
        <div
          className={`SmallCardBox ${swiperClass ? "small" : ""} ${
            isSquare ? "square" : ""
          }`}
        >
          <img
            src={smallCardData.img}
            alt={`${smallCardData.fashionTitle} Img`}
          />
        </div>
        <div className="SmallCardTextBox">
          <div className="SmallCardTextBottom">
            <div className="SmallCardTextTitle">
              {smallCardData.fashionTitle}
            </div>
            <h2>{smallCardData.subTitle}</h2>
            <div>
              <p className="date-author-container">
                <span className="date-text">{smallCardData.date}</span>
                <span className="fontSize10">|</span>
                <span className="author-text">{smallCardData.author}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
