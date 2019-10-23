import React from 'react';

const  ActualTweetCardFront = (props) =>  {

    const icon = props.sent >= 0.5? "smile outline" : "frown outline";
    const hue = props.sent >= 0.5? "yellow" : "blue"
  return (

    <div onClick={props.handleClick} className='tweetfront'>
      <i id="icon" className={`icon circular huge ${icon} ${hue} icon`} />
    </div>

  )
  
};

export default ActualTweetCardFront;
