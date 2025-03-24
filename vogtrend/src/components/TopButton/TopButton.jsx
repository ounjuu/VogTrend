import React, { useState, useEffect } from "react";
import "./TopButton.css";

const TopButton = () => {
  // 스크롤 상태를 저장할 state
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 이벤트 처리 함수
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`TopButton ${isVisible ? "visible" : "hidden"}`}>
      {isVisible && (
        <button onClick={scrollToTop}>
          <img src="/img/ic_top.svg" />
          TOP
        </button>
      )}
    </div>
  );
};

export default TopButton;
