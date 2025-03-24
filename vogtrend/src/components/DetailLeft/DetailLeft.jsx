import React, { useState, useEffect } from "react";
import "./DetailLeft.css";
import MidImgCard from "../MidImgCard/MidImgCard";
import SmallCard from "../SmallCard/SmallCard";

const DetailLeft = (props) => {
  const { detailPage, fashionAllData, midDataObject } = props;

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
            {fashionAllData.slice(0, 4).map((card, index) => (
              <SmallCard key={index} smallCardData={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLeft;
