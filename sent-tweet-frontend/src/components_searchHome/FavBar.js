import React from "react";
import LoggedInHOC from "../HOC/LoggedInHOC";
import { Segment, Button } from "semantic-ui-react";

const FavBar = props => {
  return (
    <div className="fav-list">
      {/* <Segment inverted>
        {props.favs.map(acc => {
          return <Button className="favBarBtn">{acc.name}</Button>;
        })}
      </Segment> */}
      <div id="empty"> </div>
    </div>
  );
};

export default LoggedInHOC(FavBar);
