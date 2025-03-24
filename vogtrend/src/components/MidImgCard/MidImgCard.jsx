import React from "react";
import "./MidImgCard.css";

// 메인페이지 제목들
const MidImgCard = (props) => {
  const { midData } = props;
  return (
    <div className="MidImgCardContainer">
      <div className="MidImgCard" onClick={() => alert("준비중입니다.")}>
        <div className="MidImgCardBox">
          <img src={midData.img} alt={`${midData.fashionTitle} Img`} />
        </div>
        <div className="MidCardTextBox">
          <div className="MidCardTextBottom">
            <p>
              {midData.fashionTitle} <span className="fontSize10">|</span>
              <span>{midData.date}</span>
            </p>
            <h2>{midData.subTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidImgCard;
