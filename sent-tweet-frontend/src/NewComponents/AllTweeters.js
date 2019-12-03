import React from "react";
import FavoriteCard from "./FavoriteCard";
import accounts from "./accounts"

const AllTweeters = () => {

    let tweeters = accounts.map(account => <FavoriteCard account={account} />);

    return (
        <div>
            {tweeters}
        </div>
    );
};

export default AllTweeters;
