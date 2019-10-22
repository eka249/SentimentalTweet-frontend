import React from "react";

const ActualTweetCardFront = props => {
  return (
    <div onClick={props.handleClick}>
      <i className={`icon-left massive ${"smile outline"} icon`} />
    </div>
  );
};

export default ActualTweetCardFront;
