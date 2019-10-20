import React from "react";
import TweetCard from "./TweetCard";

const TweetIndex = props => {
  return props.tweets.map(tweet => {
    return <TweetCard text={tweet.text} />;
  });
};

export default TweetIndex;
