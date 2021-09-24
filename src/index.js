

import React from "react";
import reactDOM from "react-dom";
import Apps from "./Apps";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

reactDOM.render(
  <BrowserRouter>
    <Apps />
  </BrowserRouter>,
  document.getElementById("root")
);
