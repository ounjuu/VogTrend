import React, { useState, useEffect } from "react";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
          <div className="headerTitle">
            <h4>
              <img src="/img/vogTrend1.png" />
            </h4>
          </div>
          <ul className="header-nav">
            <li>
              <a href="#">FASHION</a>
            </li>
            <li>
              <a href="#">BEAUTY</a>
            </li>
            <li>
              <a href="#">LIFESTYLE</a>
            </li>
            <li>
              <a href="#">CULTURE</a>
            </li>
            <li>
              <a href="#">VIDEO</a>
            </li>
          </ul>
          <div className="rightBox">
            <div className={`selectBox ${isOpen ? "open" : ""}`}>
              <select
                className="selectOptions"
                onClick={toggleSelectBox}
                onBlur={() => setIsOpen(false)}
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
            <div className="subBtn">구독하기</div>
            <div className="hamburgerBtn">☰</div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
