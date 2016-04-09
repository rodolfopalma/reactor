import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";

import Routes from "./Routes.jsx";

import "../assets/css/bootstrap.min.css";
import "../assets/styl/main.styl";

ReactDOM.render(
    <Router>{Routes}</Router>,
    document.getElementById("app")
)
