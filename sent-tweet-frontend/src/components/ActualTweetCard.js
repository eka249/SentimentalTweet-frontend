import React from "react";

const ActualTweetCard = props => {
  return (
    <div onClick={props.handleClick}>
      <div className="ui card">
        <div className="content">
          <div className="header">Tweet Date</div>
          <div className="description">
            <p>
              This tweet is about me and me alone. No one else needs to be
              mentioned.
            </p>
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
