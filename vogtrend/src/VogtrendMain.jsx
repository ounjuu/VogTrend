import React, { useState, useEffect } from "react";
import "./VogtrendMain.css";
import MainPage from "./MainPage";
import DetailPage from "./DetailPage";
import TopButton from "./components/TopButton/TopButton";

function VogtrendMain() {
  const [detailPage, setDetailPage] = useState("MainPage");
  const favicon = process.env.PUBLIC_URL + "/img/VogTrendfavi.png";
  useEffect(() => {
    document.title = "VOG TREND";

    const existingFavicon = document.querySelector("link[rel='icon']");

    if (existingFavicon) {
      document.head.removeChild(existingFavicon);
    }

    const newFavicon = document.createElement("link");
    newFavicon.rel = "icon";
    newFavicon.href = favicon;
    document.head.appendChild(newFavicon);
  }, []);

  return (
    <>
      {detailPage === "MainPage" && <MainPage setDetailPage={setDetailPage} />}
      {detailPage !== "MainPage" && (
        <DetailPage setDetailPage={setDetailPage} detailPage={detailPage} />
      )}
      <TopButton />
    </>
  );
}

export default VogtrendMain;
