import React from "react";
import img from '../assets/stats1.jpg';
import NavBarOpener from "../components_sidebar/NavBarOpener";
import LoggedInHOC from "../HOC/LoggedInHOC";


const Statistics = props => {

  return (
    <div style={{  
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
  className="statistics">
    <NavBarOpener toggle={props.toggleNav}/>   

  </div>
  )
};

export default LoggedInHOC(Statistics);


