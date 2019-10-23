import React from "react";
import FavoriteCard from "./FavoriteCards";

const Favorites = props => {
  return props.favs.map(person => {
    // render favCard
    return <FavoriteCard key={person.id} person={person} />;
  });
};

export default Favorites;
//     return (
//         <div className='editfav'>
//             {this.renderCard()}
//         </div>
//     )
// }

// export default Favorites

// class Favorites extends Component {
//     renderCard = (props) => {
//         console.log("renderCard")
//         return this.props.favs.map( person => {
//             // render favCard
//             return <FavoriteCard person={person}/>
//         })
//     }

//     render() {
//         return (
//             <div className='editfav'>
//                 {this.renderCard()}
//             </div>
//         )
//     }
// }

// export default Favorites;
