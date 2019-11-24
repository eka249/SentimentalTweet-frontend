import React from "react";
import { Grid, Image } from "semantic-ui-react";
import bcard from "../assets/bcard.jpg";
import CardFlip from "../components_searchHome/CardFlip";
import AccSelected from "../HOC/AccSelected";

const SearchHome = props => {
  const allCards = props.tweets.map(tweet => {
<<<<<<< HEAD
    console.log("searchHOme");
    return <CardFlip tweet={tweet} />;
=======
    return <CardFlip tweet={tweet.content} />;
>>>>>>> 8310ed22437e5a559dd5f7ae4b6cbfeb9e8c3450
  });

  const check = num => {
    return allCards[num] ? allCards[num] : <Image src={bcard} />;
  };

  return (
    <div className="tweetcards">
      <React.Fragment>
        <Grid className="flip-card">
          <Grid.Row columns={3}>
            <Grid.Column>{check(0)}</Grid.Column>
            <Grid.Column>{check(1)}</Grid.Column>
            <Grid.Column>{check(2)}</Grid.Column>
          </Grid.Row>

          <Grid.Row columns={3}>
            <Grid.Column>{check(3)}</Grid.Column>
            <Grid.Column>{check(4)}</Grid.Column>
            <Grid.Column>{check(5)}</Grid.Column>
          </Grid.Row>

          <Grid.Row columns={3}>
            <Grid.Column>{check(6)}</Grid.Column>
            <Grid.Column></Grid.Column>
            <Grid.Column>{check(7)}</Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    </div>
  );
};

export default AccSelected(SearchHome);
