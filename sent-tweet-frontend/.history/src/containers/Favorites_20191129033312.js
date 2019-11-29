import React from "react";
import AllCelebs from "../components_favorites/AllCelebs";
import UserFavoriteTweeters from "../components_favorites/UsersFavoriteTweeters";
import { CardGroup } from "semantic-ui-react";

class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.generateAllFavorites()
    this.setState({
      favorites: []
    })

  }

  generateAllFavorites = () => {
    console.log("started generate favoriates fetch")
    fetch(`http://localhost:3000/favorite_celebs/${this.props.user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
        ,
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      .then(data => console.log("favorites", data))
    // .then(data => this.setState({ favorites: data }))
  }
  addToFavorites = (favorite) => {
    let favoriteTweeters = this.state.favorites;
    if (!favoriteTweeters.includes(favorite)) {
      this.setState({ favorites: [...this.state.favorites, favorite] });
    } else {
      let filteredTweeters = favoriteTweeters.filter(
        unFavorite => unFavorite.id !== favorite.id
      );
      this.setState({ favorites: [...filteredTweeters] });
    }
  };

  onSaveFavorites = () => {
    let dataToPost = []
    //remove old favorites
    fetch("http://localhost:3000/del_favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
        ,
        Authorization: `Bearer ${localStorage.token}`

      },
      body: JSON.stringify(
        { user_id: this.props.user.id }
      )
    });
    //get new favorites in correct format
    this.state.favorites.map(fav => {
      dataToPost.push(
        `user_id: ${this.props.user.id}, celeb_id: ${fav.id}`)
    })
    console.log("data to post", dataToPost)
    //save new favorites
    fetch("http://localhost:3000/favorite_celebs", {

      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
        ,
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(
        { dataToPost }
      )
    })
  }

  render() {

    return (
      <div>
        <UserFavoriteTweeters
          favorites={this.state.favorites}
          addToFavorites={this.addToFavorites}
        />

        <AllCelebs
          allTweeters={this.props.allTweeters}
          addToFavorites={this.addToFavorites}
        />
        <button onClick={this.onSaveFavorites} >Save New Favorites</button>
      </div>

    );
  }
}

export default Favorites;
