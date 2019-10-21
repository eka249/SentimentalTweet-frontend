import React from "react";
import tweets from "./SampleData";
import TweetCard from "./TweetCard";

class SampleDataIteration extends React.Component {
  state = {
    tweets: tweets
  };
  render() {
    const { tweets } = this.state;

    return (
      <div>
        {tweets.map(tweet => {
          return <TweetCard key={tweet.id} tweet={tweet} />;
        })}
      </div>
    );
  }
}

export default SampleDataIteration;
