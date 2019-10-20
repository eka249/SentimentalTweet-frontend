import React from "react";
import Twitter from "twitter";
// import TweetIndex from "./TweetIndex.js";
var json = require("./config.json");

class GetTweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: ""
    };
  }

  render() {
    console.log(this);
    // console.log(`${this.props.term}`);
    let client = new Twitter({
      consumer_key: json.consumer_key,
      consumer_secret: json.consumer_secret,
      access_token_key: json.access_token_key,
      access_token_secret: json.access_token_secret
    });

    let params = {
      screen_name: `${this.props.term}`
    };

    client.get(
      "statuses/user_timeline",
      params,
      function(error, tweets, response) {
        // this.setState({ tweets: response.body });
        // if (!error) {
        console.log(response.body);
        // }
      }
      // () => {
      //   this.setState({ tweets: response.body });
      // }
    );

    // return <TweetIndex tweets={this.state.tweets} />;
    return <div>GetTweets</div>;
  }
}

export default GetTweets;
