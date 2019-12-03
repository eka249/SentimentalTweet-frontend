import React from "react";
import TweetCard from "./TweetCard";
import tweets from "./tweets"

const AllTweets = () => {

    let atweet = tweets.map(tweet => <TweetCard tweet={tweet} />);

    return (
        <div>
            {atweet}
        </div>
    );
};

export default AllTweets;
