import React, { useState, useEffect } from "react";
import "./Fashion.css";
import TitleText from "../TitleText/TitleText";
import MidImgCard from "../MidImgCard/MidImgCard";
import SmallCard from "../SmallCard/SmallCard";

const Fashion = (props) => {
  // 중간 카드 데이터
  const midDataObject = {
    fashionTitle: "패션 화보",
    date: "2025.03.20",
    subTitle: "코모의 햇살 아래, 정해인의 '이탈리안 뷰티'",
    img: "/img/midImg.webp",
  };

  // 작은 카드 데이터
  const initialSmallCardData = [
    {
      fashionTitle: "패션 뉴스",
      subTitle: "유럽에서 가장 높은 런웨이에 착륙한 몽클레르 그레노블",
      date: "2025.01.14",
      author: "가남희",
      img: "",
    },
    {
      fashionTitle: "패션 트렌드",
      subTitle: "2025년 가장 우아하게 버뮤다 팬츠 입는 법",
      date: "2025.03.26",
      author: "김현유",
      img: "",
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "2025년에 가장 사랑 받을 백",
      date: "2025.03.15",
      author: "이소연",
      img: "",
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle: "에어프랑스 퍼스트 클래스 승객을 위한 자크뮈스 파자마",
      date: "2025.01.20",
      author: "오기쁨",
      img: "",
    },
  ];
  const [smallCardData, setSmallCardData] = useState(initialSmallCardData);

  useEffect(() => {
    // 1~10 사이의 숫자 배열 생성
    const randomImageIndexes = Array.from({ length: 10 }, (_, i) => i + 1);

    // 배열 섞기
    for (let i = randomImageIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomImageIndexes[i], randomImageIndexes[j]] = [
        randomImageIndexes[j],
        randomImageIndexes[i],
      ];
    }

    // 이미지 배열에 랜덤 숫자 적용
    const updatedData = smallCardData.map((card, index) => {
      const randomIndex = randomImageIndexes[index];
      return {
        ...card,
        img: `/img/vog${randomIndex}.webp`,
      };
    });

    setSmallCardData(updatedData);
  }, []);

  return (
    <div className="FashionContainer">
      <div className="Fashion">
        {/* 타이틀 */}
        <TitleText text="FASHION" showMore={true} />
        <div className="FashionCardBox">
          {/* 작은 사이즈 cards */}
          <div className="FashionRight">
            {smallCardData.map((card, index) => (
              <SmallCard key={index} smallCardData={card} />
            ))}
          </div>
          {/* 중간 사이즈 card */}
          <div className="FashionLeft">
            <MidImgCard midData={midDataObject} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
