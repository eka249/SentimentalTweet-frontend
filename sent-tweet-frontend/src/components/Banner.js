import React from 'react'
import img from '../assets/sentweet2.31.png'
import { checkPropTypes } from 'prop-types';

const Banner = (props) => {
    return (
        <div className="banner" onClick={props.enter}>
            <img src={img}></img>
        </div>
    )
};

export default Banner; 