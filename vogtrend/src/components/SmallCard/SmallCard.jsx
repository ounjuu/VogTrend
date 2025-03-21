import React from "react";
import "./SmallCard.css";

// 메인페이지 제목들
const SmallCard = (props) => {
  const { smallCardData, imageKey } = props;
  const imageSrc = `/img/vog${imageKey + 1}.webp`;

  return (
    <div className="SmallCardContainer">
      <div className="SmallCard">
        <div className="SmallCardBox">
          <img src={imageSrc} alt={`${smallCardData.fashionTitle} Img`} />
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
