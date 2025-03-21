import React, { useState, useEffect } from "react";
import "./MustRead.css";
import TitleText from "../TitleText/TitleText";
import SmallCard from "../SmallCard/SmallCard";

// Best Stories 작은 카드 데이터
const initialSmallCardData = [
  {
    fashionTitle: "패션 트렌드",
    subTitle: "이제 봄마다 당연하게 꺼내 입어야 할 색",
    date: "2025.03.17",
    author: "이소미",
    img: "",
  },
  {
    fashionTitle: "PEOPLE NOW",
    subTitle: "지금, 보그가 주목하는 인물",
    date: "2025.03.18",
    author: "김하나",
    img: "",
  },
  {
    fashionTitle: "패션 화보",
    subTitle:
      "정유미, “그렇게 일 잘하는 사람들을 곁에서 볼 수 있어 행운이었죠”",
    date: "2025.03.18",
    author: "하서이",
    img: "",
  },
  {
    fashionTitle: "엔터테인먼트",
    subTitle: "GD, 권지용, 지드래곤 🙂",
    date: "2025.03.18",
    author: "김미소",
    img: "",
  },
];

const MustRead = () => {
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
      const randomIndex = randomImageIndexes[index];
      return {
        ...card,
        img: `/img/vogmid${randomIndex}.webp`,
      };
    });

    setSmallCardData(updatedData);
  }, []);

  return (
    <div className="MustReadContainer">
      <div className="MustRead">
        {/* 타이틀 */}
        <TitleText text="MUST READ" showMore={false} />
        <div className="MustReadCardBox">
          {/* small cards */}
          <div className="MustReadSmallCard">
            {smallCardData.map((card, index) => (
              <SmallCard key={index} smallCardData={card} isSquare={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustRead;
