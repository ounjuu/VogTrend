import React, { useState, useEffect } from "react";
import "./header.css";

function Header(props) {
  const { setDetailPage } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };
  const [selectedValue, setSelectedValue] = useState("KOREA");
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsVisible(false); // 스크롤 내릴 때 헤더 숨기기
      } else {
        setIsVisible(true); // 스크롤 올릴 때 헤더 보이기
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <div className="headercontent">
        <nav>
          <div
            className="headerTitle"
            onClick={() => setDetailPage("MainPage")}
          >
            <h4>
              <img src="/img/vogTrend1.png" />
            </h4>
          </div>
          <ul className="header-nav">
            <li>
              <a href="#" onClick={() => setDetailPage("FASHION")}>
                FASHION
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setDetailPage("BEAUTY")}>
                BEAUTY
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setDetailPage("LIFESTYLE")}>
                LIFESTYLE
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setDetailPage("CULTURE")}>
                CULTURE
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setDetailPage("VIDEO")}>
                VIDEO
              </a>
            </li>
          </ul>
          <div className="rightBox">
            <div className={`selectBox ${isOpen ? "open" : ""}`}>
              <select
                className="selectOptions"
                onClick={toggleSelectBox}
                onBlur={() => setIsOpen(false)}
                value={selectedValue}
                onChange={() => {
                  alert("준비중입니다.");
                  setSelectedValue("KOREA");
                }}
              >
                <option>KOREA</option>
                <option>USA</option>
                <option>FRANCE</option>
                <option>JAPAN</option>
                <option>CHINA</option>
                <option>GERMANY</option>
                <option>SPAIN</option>
              </select>
            </div>
            <div className="subBtn" onClick={() => alert("준비중입니다.")}>
              구독하기
            </div>
            <div
              className="hamburgerBtn"
              onClick={() => alert("준비중입니다.")}
            >
              ☰
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
