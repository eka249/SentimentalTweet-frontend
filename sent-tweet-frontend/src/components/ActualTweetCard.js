import React from "react";

const ActualTweetCard = props => {
  const icon = props.sent >= 0.5? "smile outline" : "frown outline";
  const hue = props.sent >= 0.5? "yellow" : "blue"
  return (
    <div onClick={props.handleClick} id="back">
      <div className="ui card">
        <div className="content">
          <div className="header">{props.date}<span className="right floated smile">
            <i className={`icon-left large ${icon} ${hue} icon`} />
          </span></div>
          <div className="description">
            <p>
              {props.content}
            </p>
          </div>
        </div>
        <div className="extra content">

        </div>
      </div>
    </div>
  );
};

export default ActualTweetCard;
