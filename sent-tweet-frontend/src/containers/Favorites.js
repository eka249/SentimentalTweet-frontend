import React from "react";
import FavoriteCard from "./FavoriteCards";

const Favorites = props => {
  return props.favs.map(person => {
    // render favCard
    return <FavoriteCard key={person.id} person={person} />;
  });
};

export default Favorites;
