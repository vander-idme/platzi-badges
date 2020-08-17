import React from "react";

import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img
            src="https://www.gravatar.com/205e460b479e2e5b48aec07710c08d50"
            alt="Avatar"
          />
          <h1>
            VANDER <br /> IDME
          </h1>
        </div>

        <div>
          <p>Estudiante</p>
          <p>@ankynator</p>
        </div>

        <div>#PlatziCONF</div>
      </div>
    );
  }
}

export default Badge;
