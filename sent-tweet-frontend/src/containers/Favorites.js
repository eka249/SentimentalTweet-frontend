import React from "react";
import FavoriteCard from "../components_favorites/FavoriteCard";
import img from "../assets/favs1.2.jpg";
import NavBarOpener from "../components_sidebar/NavBarOpener";
import LoggedInHOC from "../HOC/LoggedInHOC";
import UserFavoriteTweeters from "../components_favorites/UsersFavoriteTweeters";
import AllCelebs from "../components_favorites/AllCelebs";
import { Card } from "semantic-ui-react";

// top10={this.state.top10}
// loggedin={this.state.logged_in}
// favs={this.state.favorites}
// user={this.state.user}
// deleteFav={this.deleteFav}
// toggleNav={this.toggleNav}

// {
//   key: "Rihanna",
//   value: "Rihanna",
//   text: "@rihanna",
//   bio:
//     "happy to finally share this collection of incredible memories. Make sure you pre-order #theRIHANNAbook now 📚💗"
// },

const Favorites = props => {
  // const map = () => {
  //   return props.favs.map(person => {
  //     //this.state.favorites passed from APP
  //     // render favCard
  //     return <FavoriteCard key={person.key} person={person} />;
  //   });
  // };

  return (
    // style={{
    //   backgroundImage: `url(${img})`,
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat"
    // }}
    // className="profile"
    <div>
      <NavBarOpener toggle={props.toggleNav} />
      {/* {map()} */}

      <Card.Group itemsPerRow={6}>
        {/* <UserFavoriteTweeters
          favorites={props.favs}
          addToFavorites={props.addToFavorites}
        /> */}
        {props.favs.map(tweeter => (
          <FavoriteCard
            key={tweeter.id}
            tweeter={tweeter}
            addToFavorites={props.addToFavorites}
          />
        ))}
      </Card.Group>

      <Card.Group itemsPerRow={5}>
        {props.top10.map(tweeter => (
          <FavoriteCard
            key={tweeter.id}
            tweeter={tweeter}
            addToFavorites={props.addToFavorites}
          />
        ))}
      </Card.Group>
    </div>
  );
};

export default LoggedInHOC(Favorites);
