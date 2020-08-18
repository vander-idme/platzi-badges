import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Zhaida"
    lastName="Cazasola"
    email="idmevander@gmail.com"
    jobTitle="Kickass"
    twitter="zhaidaCazasola"
  />,
  container
);
