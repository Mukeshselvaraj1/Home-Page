import React from "react";
import ReactDOM from "react-dom/client";
// react router
import { BrowserRouter } from "react-router-dom";
// css file
//import "bootstrap/dist/css/bootstrap.min.css";

//import "./Resume/Resume.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin
></script>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <h2>hello</h2>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
