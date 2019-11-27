// import React from "react";
// import FavoriteCard from "./FavoriteCard";

class UserFavoriteTweeters extends React.Component {
  render() {
    return (
      <div>
        {this.props.favorites.length == 0 ? (
          <div>No Favorites!</div>
        ) : (
          this.props.favorites.map(tweeter => {
            return (
              <FavoriteCard
                key={tweeter.id}
                tweeter={tweeter}
                addToFavorites={this.props.addToFavorites}
              />
            );
          })
        )}
      </div>
    );
  }
}

// export default UserFavoriteTweeters;
