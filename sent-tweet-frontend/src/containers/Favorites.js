import React from "react";
import FavoriteCard from "../components_favorites/FavoriteCards";
import img from '../assets/favs1.2.jpg';
import NavBarOpener from "../components_sidebar/NavBarOpener";

const Favorites = props => {
  const map = () => {
    return props.favs.map(person => {
      // render favCard
      return <FavoriteCard key={person.id} person={person} />;
    })
  }

  return (
    <div style={{  
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
  className="profile">
    <NavBarOpener toggle={props.toggleNav}/>   
    {map()}
  </div>
  )
};

export default Favorites;


