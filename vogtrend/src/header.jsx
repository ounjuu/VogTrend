import logo from "./logo.svg";
import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div className="headercontent">
        <nav>
          <div className="headerTitle">
            <h4>
              <img src="/img/vogTrend_hd.png" />
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
