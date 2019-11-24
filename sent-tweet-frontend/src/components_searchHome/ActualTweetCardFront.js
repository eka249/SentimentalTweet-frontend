<<<<<<< HEAD
import React from 'react';
import { Header } from 'semantic-ui-react'

const  ActualTweetCardFront = (props) =>  {

    // const icon = props.sent >= 0.5? "smile outline" : "frown outline";
    const hue = props.sent >= 0.5? "positive" : "negative"
  return (

    <div onClick={props.handleClick} className='tweetfront' id={hue}>
        <Header size='huge'>
          {props.sent >= 0.5? '#positive': '#negative'}
        </Header>
=======
import React from "react";
import { Header, Icon } from "semantic-ui-react";

const ActualTweetCardFront = props => {
  const icon = props.sent >= 49.9 ? "smile outline" : "frown outline";
  const hue = props.sent >= 49.9 ? "positive" : "negative";
  return (
    <div onClick={props.handleClick} className="tweetfront" id={hue}>
      {/* <Icon  name={icon}  size='big'/> */}
      <Header size="huge" icon>
        {props.sent >= 0.5 ? "#positive" : "#negative"}
      </Header>
>>>>>>> 8310ed22437e5a559dd5f7ae4b6cbfeb9e8c3450
      {/* <h1>{props.sent >= 0.5? '#positive': '#negative'}</h1> */}
      {/* <i id="icon" className={`icon circular huge ${icon} ${hue} icon`} /> */}
    </div>
  );
};

export default ActualTweetCardFront;
