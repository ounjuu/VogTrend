import logo from "./logo.svg";
import React, { useState } from "react";
import "./VogtrendMain.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainTitleImg from "./components/MainTitleImg/MainTitleImg";
import TodayStories from "./components/TodayStories/TodayStories";
import BestStories from "./components/BestStories/BestStories";
import MustRead from "./components/MustRead/MustRead";
import PeopleNow from "./components/PeopleNow/PeopleNow";
import Fashion from "./components/Fashion/Fashion";
import Beauty from "./components/Beauty/Beauty";
import LatestStories from "./components/LatestStories/LatestStories";

function VogtrendMain() {
  // alert 띄우기
  const handleMoreClick = () => {
    alert("준비중입니다.");
  };

  // MUST READ DATA
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

  // MUST READ IMG
  const [smallCardData, setSmallCardData] = useState(initialSmallCardData);

  return (
    <div className="wrapper">
      <div className="my_header">
        <Header />
      </div>
      <div className="content">
        {/* 메인 이미지 */}
        <MainTitleImg />

        {/* Today’s Stories - 메인 첫번째*/}
        <TodayStories />

        {/* Best Stories - 메인 두번째*/}
        <BestStories />

        {/* Must Read - 메인 세번째 */}
        <MustRead
          smallCardData={smallCardData}
          setSmallCardData={setSmallCardData}
          Title={"MUST READ"}
          More={false}
        />

        {/* People Now - 메인 네번째 */}
        <PeopleNow />

        {/* Fashion - 메인 다섯섯번째 */}
        <Fashion />

        {/* Beauty - 메인 여섯섯번째 */}
        <Beauty />

        {/* Life Style - 메인 일곱번째 */}
        <MustRead
          smallCardData={smallCardData}
          setSmallCardData={setSmallCardData}
          Title={"LIFESTYLE"}
          More={true}
        />
        {/* CULTURE - 메인 여덟번째*/}
        <MustRead
          smallCardData={smallCardData}
          setSmallCardData={setSmallCardData}
          Title={"CULTURE"}
          More={true}
        />
        {/* 마지막 스티키 */}
        <LatestStories />
      </div>
      <div className="my_footer">
        <Footer />
      </div>
    </div>
  );
}

export default VogtrendMain;
