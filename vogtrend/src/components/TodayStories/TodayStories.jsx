import React, { useState, useEffect } from "react";
import "./TodayStories.css";
import TitleText from "../TitleText/TitleText";
import MidImgCard from "../MidImgCard/MidImgCard";
import SmallCard from "../SmallCard/SmallCard";

const TodayStories = (props) => {
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
      fashionTitle: "Lifestyle",
      subTitle: "메종 페리에 주에가 선보이는 예술에 대한 찬사",
      date: "2025.03.14",
      author: "이재은",
      img: "",
    },
    {
      fashionTitle: "Fashion",
      subTitle: "자라와 앤더슨벨이 그리는 초심",
      date: "2025.03.21",
      author: "이재은",
      img: "",
    },
    {
      fashionTitle: "패션 트렌드",
      subTitle: "올봄 안 입고는 못 배길 청바지, 스키니 부츠컷!",
      date: "2025.03.20",
      author: "이소미",
      img: "",
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "미니멀 스타일이 지겹던 참이라면, '이 로고'에 주목해보세요",
      date: "2025.03.20",
      author: "안건호",
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
    <div className="TodayStoriesContainer">
      <div className="TodayStories">
        {/* 타이틀 */}
        <TitleText text="TODAY’S STORIES" showMore={false} />
        <div className="cardBox">
          {/* 중간 사이즈 card */}
          <div className="TodayStoriesLeft">
            <MidImgCard midData={midDataObject} />
          </div>

          {/* 작은 사이즈 cards */}
          <div className="TodayStoriesRight">
            {smallCardData.map((card, index) => (
              <SmallCard key={index} smallCardData={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayStories;
