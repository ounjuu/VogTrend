import React, { useState } from "react";
import "./VogtrendMain.css";
import MainPage from "./MainPage";
import DetailPage from "./DetailPage";

function VogtrendMain() {
  const [detailPage, setDetailPage] = useState("MainPage");
  return (
    <>
      {detailPage === "MainPage" && <MainPage setDetailPage={setDetailPage} />}
      {detailPage !== "MainPage" && (
        <DetailPage setDetailPage={setDetailPage} detailPage={detailPage} />
      )}
    </>
  );
}

export default VogtrendMain;
