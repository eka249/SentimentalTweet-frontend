
import React from "react";
import { Card } from "semantic-ui-react";

const FavoriteCard = props => (
    <Card
        header={props.account.id}
        meta={props.account.celebrity_username}
        description={props.account.bio}
    />
);

export default FavoriteCard;
