// import React from "react";
// import FavoriteCard from "./FavoriteCard";

<<<<<<< HEAD
// const AllCelebs = props => {
//   return (
//     <div className="ui segment">
//       <div className="ui five column grid">
//         <div className="row">
//           {props.top10.map(tweeter => {
//             return (
//               <FavoriteCard
//                 key={tweeter.id}
//                 tweeter={tweeter}
//                 addToFavorites={props.addToFavorites}
//               />
//             );
//           })}
//           All Tweeters in DB
//         </div>
//       </div>
//     </div>
//   );
// };
=======
const AllCelebs = props => {
  return (
    // <div className="ui segment">
    //   <div className="ui five column grid">
    //     <div className="row">
    props.allTweeters.map(tweeter => {
      return (
        <FavoriteCard
          key={tweeter.id}
          tweeter={tweeter}
          addToFavorites={props.addToFavorites}
        />
      );
    })

    //      </div>
    //   </div>
    // </div>
  );
};
>>>>>>> 8d6a130f058d21324ceae9be706c5eac758c0323

// export default AllCelebs;
