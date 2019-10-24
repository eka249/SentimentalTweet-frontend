import React from 'react'
import img from '../assets/sentweet2.31.png'

const Banner = (props) => {

    return (
        <div id="banner" onClick={props.enter} >
            <img src={img} alt='click here to enter'></img>
        </div>
    )
};

export default Banner; 