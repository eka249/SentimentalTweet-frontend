/*jslint node: true */
"use strict";
// Get dependencies
var Twitter = require("twitter");
var json = require("../src/api/config.json");
// Set up Twitter client
var client = new Twitter({
  //   consumer_key: process.env.consumer_key,
  consumer_key: json.consumer_key,
  //   consumer_secret: process.env.consumer_secret,
  consumer_secret: json.consumer_secret,
  //   access_token_key: process.env.access_token_key,
  access_token_key: json.access_token_key,
  //   access_token_secret: process.env.access_token_secret
  access_token_secret: json.access_token_secret
});
// Set up connection to Redis
var redis;
if (process.env.REDIS_URL) {
  redis = require("redis").createClient(process.env.REDIS_URL);
} else {
  redis = require("redis").createClient();
}
var params = { screen_name: "realDonaldTrump", count: 1 };
//the following code is changed from stream to get for our app's purposes
// console.log("hit");
client.get("statuses/user_timeline", params, function(error, tweets) {
  if (!error) {
    // Log it to console
    console.log(tweets);
  }
});
// Publish it
redis.publish("tweets", JSON.stringify(tweets));
//   Persist it to a Redis list
redis.rpush("stream:tweets", JSON.stringify(tweet));
// Handle errors

// client.stream("statuses/filter", { track: "javascript", lang: "en" }, function(
//   stream
// )
// {
//   stream.on("data", function(tweet) {
//     // Log it to console
//     console.log(tweet);
//     // Publish it
//     redis.publish("tweets", JSON.stringify(tweet));
//     // Persist it to a Redis list
//     redis.rpush("stream:tweets", JSON.stringify(tweet));
//   });
//   // Handle errors
//   stream.on("error", function(error) {
//     console.log(error);
//   });
// })
