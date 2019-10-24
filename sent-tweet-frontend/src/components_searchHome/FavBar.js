import React from 'react'
import LoggedInHOC from "../HOC/LoggedInHOC";
import { Segment, Button } from 'semantic-ui-react';

class FavBar extends React.Component {

    render() {
        return (
            <div className="fav-list">
                <Segment inverted>
                    <Button.Group toggle>
                        {this.props.favs.map( acc => {
                            return <Button key={acc.name} className="favBarBtn" onClick={this.props.updateSelectedAcc}>{acc.name}</Button>
                        })}
                    </Button.Group>
                </Segment>
                <div id="empty">{ " "} </div>
                
            </div>
        )
    }
}

export default LoggedInHOC(FavBar);