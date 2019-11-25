import React from "react";
import FavoriteCard from "./FavoriteCard";

class UserFavoriteTweeters extends React.Component {
  render() {
    let mappedFavs = this.props.favorites.map(tweeter =>
      <FavoriteCard
        key={tweeter.id}
        tweeter={tweeter}
        addToFavorites={this.props.addToFavorites}
      />
    )
    return (
      // <div className="ui segment">
      //   <div className="ui five column grid">
      //     <div className="row">
      <div>{mappedFavs} Favorites</div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default UserFavoriteTweeters;
