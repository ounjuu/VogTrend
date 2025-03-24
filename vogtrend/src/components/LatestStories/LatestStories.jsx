import React, { useState, useEffect } from "react";
import "./LatestStories.css";
import TitleText from "../TitleText/TitleText";
import SmallCard from "../SmallCard/SmallCard";

const LatestStories = (props) => {
  const { handleMoreClick, Data } = props;
  // 작은 카드 데이터
  const fashionData = [
    {
      fashionTitle: "뷰티 트렌드",
      subTitle: "지지 하디드는 황금기를 맞고 있다",
      date: "2025.01.14",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "패션 아이콘",
      subTitle: "2025년의 스타일 아이콘들",
      date: "2025.01.15",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "메이크업 트렌드",
      subTitle: "강렬한 립 컬러의 귀환",
      date: "2025.01.16",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "겨울 스타일링",
      subTitle: "패딩을 세련되게 입는 방법",
      date: "2025.01.17",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "액세서리 트렌드",
      subTitle: "초커와 귀걸이의 조화",
      date: "2025.01.18",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "스트리트 패션",
      subTitle: "서울 패션위크의 리얼룩",
      date: "2025.01.19",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "런웨이 리포트",
      subTitle: "파리에서의 새로운 도전",
      date: "2025.01.20",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "모던 스타일",
      subTitle: "미니멀리즘의 매력",
      date: "2025.01.21",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "컬러 매칭",
      subTitle: "올해의 색, 비비드 오렌지",
      date: "2025.01.22",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "트렌치코트 스타일",
      subTitle: "클래식과 현대의 만남",
      date: "2025.01.23",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "패션 브랜드 분석",
      subTitle: "럭셔리 브랜드의 변신",
      date: "2025.01.24",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "뷰티 아이템 추천",
      subTitle: "2025년 최고의 뷰티 제품",
      date: "2025.01.25",
      author: "황혜원",
      img: "",
    },
  ];
  const [smallCardData, setSmallCardData] = useState(fashionData);

  useEffect(() => {
    // 1~10 사이의 숫자 배열 생성
    const randomImageIndexes = Array.from(
      { length: 12 },
      () => Math.floor(Math.random() * 10) + 1
    );

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
        img: `/img/vogmid${randomIndex}.webp`,
      };
    });

    setSmallCardData(updatedData);
  }, []);

  return (
    <div className="LatestStoriesContainer">
      <div className="LatestStories">
        {/* 타이틀 */}
        <TitleText
          text="LATEST STORIES"
          showMore={true}
          handleMoreClick={handleMoreClick}
        />
        <div className="LatestStoriesCardBox">
          {/* 작은 사이즈 cards */}
          <div className="LatestStoriesLeft">
            {(Data ? Data : smallCardData).map((card, index) => (
              <SmallCard key={index} smallCardData={card} isSquare={true} />
            ))}
          </div>
          {/* 스티키 card */}
          <div className="LatestStoriesRight">
            <img src="/img/sticky.jpeg" alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestStories;
