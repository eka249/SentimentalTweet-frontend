// var Twitter = require("twitter");
// var json = require("./config.json");

// var client = new Twitter({
//   consumer_key: json.consumer_key,
//   consumer_secret: json.consumer_secret,
//   access_token_key: json.access_token_key,
//   access_token_secret: json.access_token_secret
// });

// var params = { screen_name: "realDonaldTrump", count: 10 };
// client.get("statuses/user_timeline", params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets[0].text);
//   }
// });

// import React from "react";
// var Twitter = require("twitter");
// var json = require("./config.json");

// function TwitterAPIOldWay() {
//   let client = new Twitter({
//     consumer_key: json.consumer_key,
//     consumer_secret: json.consumer_secret,
//     access_token_key: json.access_token_key,
//     access_token_secret: json.access_token_secret
//   });

//   var params = { screen_name: "realDonaldTrump", count: 1 };

//   var mode = { mode: "no-cors" };
//   var control = { "Access-Control-Allow-Origin": "https://api.twitter.com" };

//   client.get("statuses/user_timeline", (params, control, mode), function(
//     error,
//     tweets,
//     response
//   ) {
//     if (!error) {
//       console.log(response.body);
//       let responseBody = response.body;
//       return <p>{responseBody}</p>;
//     }
//   });
//   return <div>TwitterAPIOldWay</div>;
// }

// export default TwitterAPIOldWay;
