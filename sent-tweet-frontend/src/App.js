import React from "react";
import SearchBar from "./SearchBar";
import sentimentAPI from "./api/sentimentAPI";
// import TweetCard from "./api/TweetCard";
import GetTweets from "./api/GetTweets";
// import TweetIndex from "./api/TweetIndex";
import TwitterAPIOldWay from "./api/TwitterAPIOldWay";

class App extends React.Component {
  state = {
    tweets: [],
    term: ""
  };

  onSearchSubmit = term => {
    this.setState({ term });
    console.log("Term:", term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <GetTweets term={this.state.term} />
        {/* <TweetCard /> */}
        {/* <TweetIndex tweets={this.state.tweets} /> */}
      </div>
    );
  }
}

export default App;
