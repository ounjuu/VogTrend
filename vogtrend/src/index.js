import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import VogtrendMain from "./VogtrendMain";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VogtrendMain />
  </React.StrictMode>
);

reportWebVitals();
