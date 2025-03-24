import React, { useState } from "react";
import "./DetailPage.css";
import Header2 from "./components/header2/header2";
import Footer from "./components/footer/footer";
import BigTitleDetail from "./components/BigTitleDetail/BigTitleDetail";

function DetailPage(props) {
  const { detailPage, setDetailPage } = props;

  // 상세페이지 타이틀
  const fashionData = [
    "전체",
    "패션 트렌트",
    "패션 아이템",
    "셀러브리티 스타일",
    "패션 화보",
    "패션 뉴스",
    "워치&주얼리",
  ];

  const beautyData = [
    "전체",
    "뷰티 트렌드",
    "뷰티 아이템",
    "웰니스",
    "뷰티 화보",
  ];

  const cultureData = ["전체", "엔터테인먼트", "아트", "셀럽 뉴스"];
  const lifeStyleData = ["전체", "여행", "푸드", "리빙", "뷰 포인트"];

  // alert 띄우기
  const handleMoreClick = () => {
    alert("준비중입니다.");
  };

  return (
    <div className="wrapper">
      <div className="my_header">
        <Header2 setDetailPage={setDetailPage} />
      </div>

      {/* 상세페이지 타이틀 */}
      <div className="content">
        <BigTitleDetail
          BigTitle={detailPage}
          texts={
            detailPage === "FASHION"
              ? fashionData
              : detailPage === "BEAUTY"
              ? beautyData
              : detailPage === "LIFESTYLE"
              ? lifeStyleData
              : detailPage === "CULTURE"
              ? cultureData
              : []
          }
        />
      </div>
      <div className="my_footer">
        <Footer />
      </div>
    </div>
  );
}

export default DetailPage;
