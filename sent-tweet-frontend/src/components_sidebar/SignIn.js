// import React, { Component } from "react";
// import ModalContainer from "./ModalContainer";
// var Twitter = require("twitter");
// var json = require("../api/config.json");

// class SignIn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: false };
//   }
//   showModal = () => {
//     this.setState({
//       show: !this.state.show
//     });
//   };
//   fetchTwitter = e => {
//     // console.log("signed in as:", this.props.user);
//     // console.log("local storage token", localStorage.token);
//     console.log("began fetchtwitter on front end-should go to /celebs");

//     let celeb = "realDonaldTrump";
//     //^insert field name that asif makes here
//     fetch(`http://localhost:3000/celebs`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${localStorage.token}`
//       },
//       body: JSON.stringify({ celeb: celeb })
//     });
//   };

//   // remainingCalls = () => {
//   //   // searchTwitter = term => {
//   //   // console.log("hit");
//   //   // this.setState({ term });
//   //   // console.log("passed through state", term);
//   //   let client = new Twitter({
//   //     consumer_key: json.consumer_key,
//   //     consumer_secret: json.consumer_secret,
//   //     access_token_key: json.access_token_key,
//   //     access_token_secret: json.access_token_secret
//   //   });

//   //   // let params = {
//   //   //   screen_name: term
//   //   // };

//   //   client.get(
//   //     "https://api.twitter.com/1.1/TweetEmotionalAnalysis/rate_limit_status.json",
//   //     // ?resources=statuses",

//   //     // "statuses/user_timeline",
//   //     // params,
//   //     () =>
//   //       function(error, tweets, response) {
//   //         console.log(response);
//   //       }
//   //   );
//   //   // response.writeHead(200, { "Content-Type": "application/json" });
//   //   response.end(JSON.stringify(response.body)); // This line sends the tweets to the client making the http request.
//   // };

//   render() {
//     return (
//       <div>
//         <button onClick={this.showModal}>Sign in button</button>
//         {this.state.show ? (
//           <ModalContainer
//             user={this.props.user}
//             getLoggedIn={this.props.getLoggedIn}
//             showModal={this.showModal}
//           />
//         ) : null}
//         {/* <button onClick={e => this.fetchTwitter(e)}>get donald's tweets</button> */}
//         {/* <button onClick={e => this.remainingCalls(e)}>
//           how many calls we have left
//         </button> */}
//       </div>
//     );
//   }
// }

// export default SignIn;
