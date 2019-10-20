import React from "react";
import Twitter from "twitter";
import TweetIndex from "./TweetIndex.js";
var json = require("./config.json");

class GetTweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  render() {
    console.log("GetTweetsProps:", this.props.term);
    let client = new Twitter({
      consumer_key: json.consumer_key,
      consumer_secret: json.consumer_secret,
      access_token_key: json.access_token_key,
      access_token_secret: json.access_token_secret
    });

    let params = {
      screen_name: `${this.props.term}`
    };

    let mode = {
      mode: "no-cors"
    };

    client.get("statuses/user_timeline", params, mode, function(
      error,
      tweets,
      response
    ) {
      if (!error) {
        this.setState({ tweets });
        console.log("GetTweetstweets:", tweets);
        console.log("GetTweetsresponse:", response);
      }
    });
    return <TweetIndex tweets={this.state.tweets} />;
    // return <div>GetTweets</div>;
  }
}

export default GetTweets;
