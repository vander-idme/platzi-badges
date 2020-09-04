import React from "react";
import md5 from "md5";

import "./styles/BadgesList.css";
import twitterIcon from "../images/twitter-brands.svg";
class BadgeList extends React.Component {
  render() {
    return (
      <ul className="BadgesList__container">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesList__item">
              <div className="Item__avatar--container">
                <img
                  className="Item__avatar"
                  src={`https://www.gravatar.com/avatar/${md5(
                    badge.email
                  )}?s=200`}
                  alt="Badge Avatar"
                />
              </div>
              <div className="Item__info--container">
                <p className="Item__info--name">
                  {badge.firstName} {badge.lastName}
                </p>
                <a href="/" className="Item__info--twitter">
                  <img
                    className="icon"
                    src={twitterIcon}
                    alt="twitter icon"
                    width="20px"
                  />
                  @{badge.twitter}
                </a>
                <p className="Item__info--job">{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
