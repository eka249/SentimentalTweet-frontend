import React from "react";
//this file attempts to use Redis and hiredis

var Twitter = require("twitter");
var json = require("./config.json");

function TwitterV2() {
  let client = new Twitter({
    consumer_key: json.consumer_key,
    consumer_secret: json.consumer_secret,
    access_token_key: json.access_token_key,
    access_token_secret: json.access_token_secret
  });
  var params = { screen_name: "realDonaldTrump", count: 1 };
  let returnData = client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      console.log(response.body);
      let responseBody = response.body;
      //   return <p>{responseBody}</p>
    }
  });
  return <p>{returnData}</p>;
}

export default TwitterV2;
