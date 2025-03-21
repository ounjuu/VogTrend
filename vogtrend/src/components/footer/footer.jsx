import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footerTitle">
          <h4>
            <img src="/img/vogTrend.png" />
          </h4>
        </div>
        <div className="footer-section">
          <ul>
            <li>정기구독 </li>
            <span>|</span>
            <li>회사소개 </li>
            <span>|</span>
            <li>광고/제휴 </li>
            <span>|</span>
            <li>개인정보 처리방침 </li>
            <span>|</span>
            <li>공지사항</li>
          </ul>
        </div>
        <div className="copyWriteText">
          <p>© 2025 VOGTREND. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
