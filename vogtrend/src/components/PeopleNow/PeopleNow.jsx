import React, { useState, useEffect } from "react";
import "./PeopleNow.css";
import TitleText from "../TitleText/TitleText";
import MidImgCard from "../MidImgCard/MidImgCard";

// Best Stories 작은 카드 데이터
const midCardData = [
  {
    fashionTitle: "엔터테인먼트",
    subTitle: "송은이와 김숙, 광대는 그렇게 태어난다",
    img: "/img/voglong2.webp",
  },
  {
    fashionTitle: "엔터테인먼트",
    subTitle: "GD, 권지용, 지드래곤 🙂",
    img: "/img/voglong3.webp",
  },
  {
    fashionTitle: "패션 화보",
    img: "/img/voglong1.webp",
    subTitle:
      "정유미, “그렇게 일 잘하는 사람들을 곁에서 볼 수 있어 행운이었죠”",
  },
];
const PeopleNow = () => {
  return (
    <div className="PeopleNowContainer">
      <div className="PeopleNow">
        <div className="PeopleNowCardBox">
          {/* small cards */}
          <div className="PeopleNowSmallCard">
            {/* 타이틀 */}
            <div>
              <TitleText text="PEOPLE NOW" showMore={false} />
              <span>
                지금, 보그트렌드가
                <br /> 주목하는 인물
              </span>
            </div>
            {midCardData.map((card, index) => (
              <MidImgCard key={index} midData={card} isSquare={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleNow;
