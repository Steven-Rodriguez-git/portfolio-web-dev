import React from "react";
import { HashRouter  as Router } from 'react-router-dom'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from "./context/LangContext";

ReactDOM.render(
  <LangProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router >
  </LangProvider >,
  document.getElementById("root")
);

reportWebVitals();
