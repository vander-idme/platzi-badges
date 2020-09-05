import React from "react";

import error from "../images/404-Error-bro.svg";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="NotFound__container">
      <img src={error} />
    </div>
  );
}

export default NotFound;
