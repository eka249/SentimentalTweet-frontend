import React from "react";

const CardExampleCard = () => (
  <div>
    <div className="ui card">
      <div className="image">
        <img src={process.env.PUBLIC_URL + "/logo192.png"} alt=" " />
      </div>
      <div className="content">
        <div className="header">Asif</div>
        <div className="meta">
          <span className="username">@AsifisTHEBESTEST</span>
        </div>
      </div>
      <div className="extra content">
        <span className="left floated smile">
          <i className={`icon-left large ${"smile outline"} icon`} />
          22
        </span>
        <span className="right floated frown">
          <i className={`icon-right large ${"frown outline"} icon`} />2
        </span>
      </div>
    </div>
  </div>
);

export default CardExampleCard;
