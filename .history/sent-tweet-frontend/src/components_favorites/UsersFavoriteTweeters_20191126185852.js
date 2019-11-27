// import React from "react";
// import FavoriteCard from "./FavoriteCard";

<<<<<<< HEAD
// class UserFavoriteTweeters extends React.Component {
//   render() {
//     return (
//       <div className="ui segment">
//         <div className="ui five column grid">
//           <div className="row">
//             {this.props.favorites.map(tweeter => (
//               <FavoriteCard
//                 key={tweeter.id}
//                 tweeter={tweeter}
//                 addToFavorites={this.props.addToFavorites}
//               />
//             ))}
//             Favorites
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
=======
class UserFavoriteTweeters extends React.Component {
  render() {
    return (
      <div>
        {this.props.favorites.length == 0 ? <div>No Favorites!</div> :
          this.props.favorites.map(tweeter => {
            return (
              <FavoriteCard
                key={tweeter.id}
                tweeter={tweeter}
                addToFavorites={this.props.addToFavorites}
              />
            );
          })}
      </div>
    )
  }
}
>>>>>>> 8d6a130f058d21324ceae9be706c5eac758c0323

// export default UserFavoriteTweeters;
