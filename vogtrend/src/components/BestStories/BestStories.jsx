import React, { useState, useEffect } from "react";
import "./BestStories.css";
import TitleText from "../TitleText/TitleText";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import "swiper/css";

// Best Stories 작은 카드 데이터
const initialSmallCardData = [
  {
    fashionTitle: "패션 트렌드",
    subTitle: "일자바지 입을 땐 ‘이 슈즈’를 신으세요!",
    date: "2025.03.19",
    author: "황혜원, Lucrezia Malavolta",
    img: "",
  },
  {
    fashionTitle: "패션 아이템",
    subTitle: "방금 LA에서 돌아왔는데 모두가 ‘이 운동화’를 신고 있었습니다",
    date: "2025.03.20",
    author: "이소미, Daisy Jones",
    img: "",
  },
  {
    fashionTitle: "패션 아이템",
    subTitle: "2025년에도 꺼지지 않는 ‘이 운동화’ 열풍",
    date: "2025.03.19",
    author: "황혜원, Cortne Bonilla",
    img: "",
  },
  {
    fashionTitle: "패션 트렌드",
    subTitle: "올봄 ‘이 옷’만큼은 전형적으로 입어야 합니다",
    date: "2025.03.19",
    author: "이소미",
    img: "",
  },
  {
    fashionTitle: "패션 트렌드",
    subTitle: "런웨이에서 입을 모아 제안한 탱크 톱과 ‘이 팬츠’",
    date: "2025.03.19",
    author: "이소미",
    img: "",
  },
  {
    fashionTitle: "패션 트렌드",
    subTitle: "일자바지 입을 땐 ‘이 슈즈’를 신으세요!",
    date: "2025.03.19",
    author: "황혜원, Lucrezia Malavolta",
    img: "",
  },
  {
    fashionTitle: "패션 아이템",
    subTitle: "방금 LA에서 돌아왔는데 모두가 ‘이 운동화’를 신고 있었습니다",
    date: "2025.03.20",
    author: "이소미, Daisy Jones",
    img: "",
  },
  {
    fashionTitle: "패션 아이템",
    subTitle: "2025년에도 꺼지지 않는 ‘이 운동화’ 열풍",
    date: "2025.03.19",
    author: "황혜원, Cortne Bonilla",
    img: "",
  },
  {
    fashionTitle: "패션 트렌드",
    subTitle: "올봄 ‘이 옷’만큼은 전형적으로 입어야 합니다",
    date: "2025.03.19",
    author: "이소미",
    img: "",
  },
  {
    fashionTitle: "패션 트렌드",
    subTitle: "런웨이에서 입을 모아 제안한 탱크 톱과 ‘이 팬츠’",
    date: "2025.03.19",
    author: "이소미",
    img: "",
  },
];

const BestStories = () => {
  const [smallCardData, setSmallCardData] = useState(initialSmallCardData);

  useEffect(() => {
    // 1~10 사이의 숫자 배열 생성
    const randomImageIndexes = Array.from({ length: 10 }, (_, i) => i + 1);

    // 배열 섞기 (Fisher-Yates shuffle 알고리즘)
    for (let i = randomImageIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomImageIndexes[i], randomImageIndexes[j]] = [
        randomImageIndexes[j],
        randomImageIndexes[i],
      ];
    }

    // 이미지 배열에 랜덤 숫자 적용
    const updatedData = smallCardData.map((card, index) => {
      const randomIndex = randomImageIndexes[index]; // 섞인 배열에서 숫자 꺼내기
      return {
        ...card,
        img: `/img/vog${randomIndex}.webp`, // 랜덤으로 할당된 숫자 사용
      };
    });

    setSmallCardData(updatedData);
  }, []);

  // const slide1 = smallCardData.slice(0, 4);
  // const slide2 = smallCardData.slice(4, 8);
  // const slide3 = smallCardData.slice(8);

  return (
    <div className="BestStoriesContainer">
      <div className="BestStories">
        {/* 타이틀 */}
        <TitleText text="BEST STORIES" showMore={false} />
        <div className="BestStoriesCardBox">
          {/* 스와이퍼 cards */}
          <div className="BestStoriesSwiper">
            <SwiperComponent smallCardData={smallCardData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestStories;
