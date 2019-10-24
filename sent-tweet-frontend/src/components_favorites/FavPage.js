import React from "react";
import FavoriteCard from "./FavoriteCards";
import AllTweeters from "./AllTweeters";

class FavPage extends React.Component {
  render() {
    return (
      <div>
        <FavoriteCard
          favorites={this.props.favorites}
          addToFavorites={this.props.addToFavorites}
        />

        <AllTweeters
          favorites={this.props.favorites}
          allTweeters={this.props.allTweeters}
          addToFavorites={this.addToFavorites}
        />
      </div>
    );
  }
}

export default FavPage;
