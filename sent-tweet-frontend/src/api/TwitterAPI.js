import React from "react";
import Twitter from "twitter";
import TweetIndex from "./TweetIndex.js";
var json = require("./config.json");

class TwitterAPI extends React.Component {
  state = {
    tweets: []
  };

  getTweets = () => {
    let client = new Twitter({
      consumer_key: json.consumer_key,
      consumer_secret: json.consumer_secret,
      access_token_key: json.access_token_key,
      access_token_secret: json.access_token_secret
    });

    let params = {
      screen_name: `${this.props.searchResults}`,
      count: 10
    };

    client
      .get("statuses/user_timeline", params, function(error, tweets, response) {
        if (!error) {
          console.log(tweets.text);
        }
      })
      .then(response => response.json())
      .then(tweets => this.setState({ tweets }));
  };

  render() {
    return (
      <div>
        <TweetIndex tweets={this.state.tweets} />
      </div>
    );
  }
}

export default TwitterAPI;
