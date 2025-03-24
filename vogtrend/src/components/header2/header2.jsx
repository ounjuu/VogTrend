import React, { useState, useEffect } from "react";
import "./header2.css";

function Header2(props) {
  const { setDetailPage, setMidDetailPage, setUnderlinedIndex } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("KOREA");
  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header2 ${isVisible ? "visible" : "hidden"}`}>
      <div className="header2Content">
        <nav>
          <div className="header2Left">
            <div
              className="header2Title"
              onClick={() => setDetailPage("MainPage")}
            >
              <h4>
                <img src="/img/vogTrend1.png" />
              </h4>
            </div>
            <ul className="header2-nav">
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setDetailPage("FASHION");
                    setMidDetailPage("전체");
                    setUnderlinedIndex(0);
                  }}
                >
                  FASHION
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setDetailPage("BEAUTY");
                    setMidDetailPage("전체");
                    setUnderlinedIndex(0);
                  }}
                >
                  BEAUTY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setDetailPage("LIFESTYLE");
                    setMidDetailPage("전체");
                    setUnderlinedIndex(0);
                  }}
                >
                  LIFESTYLE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setDetailPage("CULTURE");
                    setMidDetailPage("전체");
                    setUnderlinedIndex(0);
                  }}
                >
                  CULTURE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setDetailPage("VIDEO");
                    setMidDetailPage("전체");
                    setUnderlinedIndex(0);
                  }}
                >
                  VIDEO
                </a>
              </li>
            </ul>
          </div>
          <div className="header2RightBox">
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
                <option value="KOREA">KOREA</option>
                <option value="USA">USA</option>
                <option value="FRANCE">FRANCE</option>
                <option value="JAPAN">JAPAN</option>
                <option value="CHINA">CHINA</option>
                <option value="GERMANY">GERMANY</option>
                <option value="SPAIN">SPAIN</option>
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

export default Header2;
