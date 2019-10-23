import React from "react";

const ActualTweetCard = props => {
  return (
    <div onClick={props.handleClick}>
      <div className="ui card">
        <div className="content">
          <div className="header">{props.tweeter}</div>
          <div className="description">
            <p>{props.tweet}</p>
          </div>
        </div>
        <div className="extra content">
          <span className="right floated smile">
            <i className={`icon-left large ${"smile outline"} icon`} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActualTweetCard;
