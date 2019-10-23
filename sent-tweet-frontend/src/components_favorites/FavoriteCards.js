import React from "react";

const FavoriteCard = props => {
  const addFavorite = () => {
    console.log("I have been clicked Asif");
  };
  return (
    <div class="ui four cards">
      <div className="card">
        <div className="image">
          <img src={process.env.PUBLIC_URL + "/logo192.png"} alt=" " />
        </div>
        <div className="content">
          <div className="header">{props.person.id}</div>
          <div className="meta">
            <span className="username">{props.person.id}</span>
          </div>
        </div>
        <div className="extra content">
          <span className="left floated smile">
            <i className={`icon-left large ${"smile outline"} icon`} />
            22
          </span>
          <span className="right floated heart" onClick={addFavorite}>
            <i className={`icon-right large ${"heart outline"} icon`} />
            22
          </span>
          <span className="left floated frown">
            <i className={`icon-left large ${"frown outline"} icon`} />2
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
