import React from "react";
import ActualTweetCard from "./ActualTweetCard";

const DataIteration = props => {
  return props.tweets.map(tweet => {
    return (
      <ActualTweetCard
        key={tweet.id}
        tweeter={tweet.user.name}
        tweet={tweet.text}
      />
    );
  });
};
export default DataIteration;
