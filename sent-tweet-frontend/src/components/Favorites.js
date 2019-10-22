import React, { Component } from 'react';

class Favorites extends Component {
    renderCard = () => {
        console.log("renderCard")
        this.props.favs.map( person => {
            // render favCard
            return <div>Fav Card</div>
        })
    }
    
    render() {
        return (
            <div className='editfav'>
                {this.renderCard()}
            </div>
        )
    }
}

export default Favorites;