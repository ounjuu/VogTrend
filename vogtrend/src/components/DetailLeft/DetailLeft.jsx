import React, { useState, useEffect } from "react";
import "./DetailLeft.css";
import MidImgCard from "../MidImgCard/MidImgCard";
import SmallCard from "../SmallCard/SmallCard";
import MustRead from "../MustRead/MustRead";
import TitleText from "../TitleText/TitleText";
const DetailLeft = (props) => {
  const { detailPage, midDataObject, handleMoreClick } = props;
  const imagePaths = [
    "/img/vog1.webp",
    "/img/vog2.webp",
    "/img/vog3.webp",
    "/img/vog4.webp",
    "/img/vog5.webp",
    "/img/vog6.webp",
    "/img/vog7.webp",
    "/img/vog8.webp",
    "/img/vog9.webp",
    "/img/vog10.webp",
  ];

  function getRandomImage() {
    const randomNum = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomNum];
  }

  const fashionData = [
    {
      fashionTitle: "패션 트렌드",
      subTitle: "곧 거리에서 '실제로' 보게 될 2025 봄/여름 트렌드 8",
      date: "2025.03.13",
      author: "이소미, Madeline Fass, Talia Abbas, Laura Jackson",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "몸짓이 우아해지는, 올봄 가냘픈 신발",
      date: "2025.03.21",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "미니멀 스타일이 지겹던 참이라면, '이 로고'에 주목해보세요",
      date: "2025.03.20",
      author: "안건호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "2025년에 가장 사랑받을 ‘잇 백’ 10",
      date: "2025.03.20",
      author: "김현유",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "경쾌하고 발랄하게! 올봄 내내 입기 좋은 만능 패턴의 귀환",
      date: "2025.03.21",
      author: "주현욱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "티모시 샬라메의 데님 재킷(Ft. 밥 딜런)",
      date: "2025.03.19",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "올봄 멋 부리고 싶은 날은 이모 조끼에 청바지!",
      date: "2025.03.18",
      author: "황혜원",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "앤 해서웨이의 운동화에 자꾸만 눈이 가는 이유",
      date: "2025.03.18",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "조나단 앤더슨의 엉뚱하고 근사한 로에베 셀럽 룩 모아보기",
      date: "2025.03.18",
      author: "이소미, Hannah Jackson, Christian Allaire",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "깃털처럼 가볍게, 샤넬처럼 자유롭게",
      date: "2025.03.21",
      author: "손기호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "뉴욕, 일관성, 감정과 케이트! 캐서린 홀스타인과 나눈 대화",
      date: "2025.03.20",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "코모의 햇살 아래, 정해인의 '이탈리안 뷰티'",
      date: "2025.03.20",
      author: "권민지",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "흐트러짐 없이, 강하고 빠르게 까르띠에!",
      date: "2025.03.19",
      author: "VOGUE",
      img: getRandomImage(),
    },
  ];

  return (
    <div className="DetailLeftContainer">
      <div className="DetailLeft">
        <div className="cardBox">
          {/* 중간 사이즈 card */}
          <div className="DetailMidImgLeft">
            <MidImgCard midData={midDataObject} />
          </div>

          {/* 작은 사이즈 cards */}
          <div className="DetailRight">
            {fashionData.slice(0, 4).map((card, index) => (
              <SmallCard key={index} smallCardData={card} isSquare={false} />
            ))}
          </div>
        </div>
        {/* 패션 트렌트 */}
        <TitleText
          text={
            detailPage === "FASHION"
              ? "패션 트렌드"
              : detailPage === "BEAUTY"
              ? "뷰티 트렌드"
              : detailPage === "LIFESTYLE"
              ? "리빙"
              : detailPage === "CULTURE"
              ? "셀럽 뉴스"
              : ""
          }
        />
        {/* 작은 사이즈 cards */}
        <div className="fashionTrendBox">
          {detailPage !== "VIDEO"
            ? fashionData
                .slice(0, 3)
                .map((card, index) => (
                  <SmallCard
                    key={index}
                    smallCardData={card}
                    isSquare={false}
                  />
                ))
            : ""}
        </div>
        {/* 패션 아이템 */}
        <TitleText
          text={
            detailPage === "FASHION"
              ? "패션 아이템"
              : detailPage === "BEAUTY"
              ? "웰니스"
              : detailPage === "LIFESTYLE"
              ? "뷰 포인트"
              : detailPage === "CULTURE"
              ? "엔터테인먼트"
              : ""
          }
        />
        {/* 작은 사이즈 cards */}
        <div className="fashionItemBox">
          {detailPage !== "VIDEO"
            ? fashionData
                .slice(0, 3)
                .map((card, index) => (
                  <SmallCard
                    key={index}
                    smallCardData={card}
                    isSquare={false}
                  />
                ))
            : ""}
        </div>
        {/* LATEST STORIES */}
      </div>
    </div>
  );
};

export default DetailLeft;
