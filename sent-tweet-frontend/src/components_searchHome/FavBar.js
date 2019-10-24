import React from 'react'
import LoggedInHOC from "../HOC/LoggedInHOC";

const FavBar = (props) => {
    
    return (
        <div className="fav-list">
            <div id="empty">{ " "} </div>
            {props.favs.map( acc => {
                console.log('here')
                return (
                    <div key={acc.name}>
                        {acc.name}
                    </div>
                )
            })}
        </div>
    )
}

export default LoggedInHOC(FavBar);