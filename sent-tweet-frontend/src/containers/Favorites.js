import React from "react";
import AllCelebs from "../components_favorites/AllCelebs";
import UserFavoriteTweeters from "../components_favorites/UsersFavoriteTweeters";
import { CardGroup } from "semantic-ui-react";

class Favorites extends React.Component {
  render() {

    return (
      <div>
        <UserFavoriteTweeters
          favorites={this.props.favorites}
          addToFavorites={this.props.addToFavorites}
        />

        <AllCelebs
          allTweeters={this.props.allTweeters}
          addToFavorites={this.props.addToFavorites}
        />
      </div>
    );
  }
}

export default Favorites;
