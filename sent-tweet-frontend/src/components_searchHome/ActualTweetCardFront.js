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
      {/* <h1>{props.sent >= 0.5? '#positive': '#negative'}</h1> */}
      {/* <i id="icon" className={`icon circular huge ${icon} ${hue} icon`} /> */}
    </div>

  )
  
};

export default ActualTweetCardFront;
