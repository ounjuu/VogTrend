import React, { useState, useEffect } from "react";
import "./Beauty.css";
import TitleText from "../TitleText/TitleText";
import MidImgCard from "../MidImgCard/MidImgCard";
import SmallCard from "../SmallCard/SmallCard";

const Beauty = (props) => {
  // 중간 카드 데이터
  const midDataObject = {
    fashionTitle: "웰니스",
    date: "2025.03.20",
    subTitle: "올봄 우리가 반드시 꽃놀이를 가야 하는 정신적인 이유",
    img: "/img/midImg2.webp",
  };

  // 작은 카드 데이터
  const initialSmallCardData = [
    {
      fashionTitle: "뷰티 드렌드",
      subTitle: "지지 하디드는 황금기를 맞고 있다",
      date: "2025.01.14",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "웰니스",
      subTitle: "할머니의 취미가 유행하고 있습니다",
      date: "2025.03.26",
      author: "황혜원",
      img: "",
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "얼굴에 콕, 매력 점! 3월 셋째 주의 뷰티 인스타그램",
      date: "2025.03.18",
      author: "김초롱",
      img: "",
    },
    {
      fashionTitle: "뷰티 트렌드",
      subTitle: "손끝에 반짝이 보석, 네일 피어싱!",
      date: "2025.03.18",
      author: "이정미",
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
    <div className="BeautyContainer">
      <div className="Beauty">
        {/* 타이틀 */}
        <TitleText text="BEAUTY" showMore={true} />
        <div className="BeautyCardBox">
          {/* 중간 사이즈 card */}
          <div className="BeautyLeft">
            <MidImgCard midData={midDataObject} />
          </div>
          {/* 작은 사이즈 cards */}
          <div className="BeautyRight">
            {smallCardData.map((card, index) => (
              <SmallCard key={index} smallCardData={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
