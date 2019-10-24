import React from "react";
import FavoriteCard from "./FavoriteCard";

const AllCelebs = props => {
  return (
    <div className="ui segment">
      <div className="ui five column grid">
        <div className="row">
          {props.allTweeters.map(tweeter => {
            return (
              <FavoriteCard
                key={tweeter.id}
                tweeter={tweeter}
                addToFavorites={props.addToFavorites}
              />
            );
          })}
          All Tweeters in DB
        </div>
      </div>
    </div>
  );
};

export default AllCelebs;
