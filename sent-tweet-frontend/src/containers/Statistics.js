import React from "react";
import img from '../assets/stats2.jpg';
import NavBarOpener from "../components_sidebar/NavBarOpener";
import LoggedInHOC from "../HOC/LoggedInHOC";
import Stream from "../components/Stream";
import DropDown from "../components_searchHome/DropDown";

const Statistics = props => {

    const labels = props.tweets.map( tweet => {
        return tweet.date})

    const data = props.tweets.map( tweet => {
        return tweet.sentiment})

    return (
        <div style={{  
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}
        className="stats">
            <NavBarOpener toggle={props.toggleNav}/>   
            <DropDown top10={props.top10} searchTwitter={props.searchTwitter} updateSelectedAcc={props.updateSelectedAcc}/>
            <Stream labels={labels} data={data} acc={props.selectedAcc}/>
        </div>
    )
};

export default LoggedInHOC(Statistics);


