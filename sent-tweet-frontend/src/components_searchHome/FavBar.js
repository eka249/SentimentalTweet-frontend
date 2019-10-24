import React from 'react'

const FavBar = (props) => {
    return props.favs.map( acc => {
        return (
            <div>
                {acc.name}
            </div>
        )
    })
}

export default FavBar;