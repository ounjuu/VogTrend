import React, { useState, useEffect } from "react";
import "./MustRead.css";
import TitleText from "../TitleText/TitleText";
import SmallCard from "../SmallCard/SmallCard";

const MustRead = (props) => {
  const { Title, smallCardData, setSmallCardData, More, handleMoreClick } =
    props;

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
        <TitleText
          text={Title}
          showMore={More}
          handleMoreClick={handleMoreClick}
        />
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
