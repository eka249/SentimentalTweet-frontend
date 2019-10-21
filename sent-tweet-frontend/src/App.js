import React from "react";
import SearchBar from "./SearchBar";
var Twitter = require("twitter");
var json = require("../src/api/config.json");

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
      screen_name: term,
      tweet_mode: "extended"
    };

    client.get(
      // "https://api.twitter.com/1.1/users/lookup.json",
      "statuses/user_timeline",
      params,
      function(error, tweets, response) {
        console.log(response.body);
        // response.writeHead(200, { "Content-Type": "application/json" });
        // response.end(JSON.stringify(response.body)); // This line sends the tweets to the client making the http request.
      }
    );
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <NavBar />
        <SearchHome />
        <Tweets />
      </div>
    );
  }
}

// http.createServer(this.searchTwitter).listen(PORT);

// app.listen(PORT, function() {
//   console.log("Server is running on PORT:", PORT);
// });

// searchTwitter.listen(3001, function() {
//   console.log("Example app listening on poor 3001!");
// });

export default App;
