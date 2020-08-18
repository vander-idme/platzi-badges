import React from "react";

import md5 from "md5";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

/*
props -> property
analogo en html son los atributos de una etiqueta
*/

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={`https://www.gravatar.com/avatar/${md5(
              this.props.email
            )}?s=200`}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#PlatziCONF</div>
      </div>
    );
  }
}

export default Badge;
