import React from "react";
import SearchBar from "./SearchBar";
import sentimentAPI from "./api/sentimentAPI";
// import TweetCard from "./api/TweetCard";
// import TweetIndex from "./api/TweetIndex";
// import TwitterAPIOldWay from "./api/TwitterAPIOldWay";
var Twitter = require("twitter");
var json = require("../src/api/config.json");
/*jslint node: true */
// ("use strict");
// Get dependencies

class App extends React.Component {
  state = {
    tweets: []
    // ,term: ""
  };

  // onSearchSubmit = term => {
  //   this.setState({ term });
  //   console.log("Term:", term);
  // };

  searchTwitter = term => {
    // console.log("hit");
    // this.setState({ term });
    // console.log("passed through state", term);
    let client = new Twitter({
      consumer_key: json.consumer_key,
      consumer_secret: json.consumer_secret,
      access_token_key: json.access_token_key,
      access_token_secret: json.access_token_secret
    });

    let params = {
      screen_name: term
    };

    client.get("statuses/user_timeline", params, function(
      error,
      tweets,
      response
    ) {
      console.log(response.body);
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar searchTwitter={this.searchTwitter} />
        {/* <GetTweets term={this.state.term} /> */}
        {/* <TweetCard /> */}
        {/* <TweetIndex tweets={this.state.tweets} /> */}
      </div>
    );
  }
}

export default App;
