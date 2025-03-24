import React from "react";
import "./BigTitleDetail.css";

// DetailPage 제목들
const BigTitleDetail = (props) => {
  const { BigTitle, texts } = props;

  return (
    <div className="BigTitleDetailContainer">
      <div className="BigTitleDetail">
        <h2 className="BigTitleText">{BigTitle}</h2>
        <div className="midTitleText">
          {texts &&
            texts.map((title) => (
              <div className="midText">{title}</div>
              // onClick={() => MenuCategory(`${title}`)}
            ))}
        </div>
      </div>
    </div>
  );
};

export default BigTitleDetail;
