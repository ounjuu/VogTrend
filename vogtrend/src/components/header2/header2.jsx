import React, { useState, useEffect } from "react";
import "./header2.css";

function Header2(props) {
  const { setDetailPage, setMidDetailPage, setUnderlinedIndex } = props;
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

export default Header2;
