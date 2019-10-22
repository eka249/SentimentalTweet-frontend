import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Favorites from '../components/Favorites'
import Profile from '../components/Profile'
import SignIn from '../components/SignIn'


class NavBar extends Component {

    signed = () => {
        return (
            <div> 
                <button className="ui inverted blue basic button"><Link to='/favorites'>Favorites</Link></button>
                <button className="ui inverted blue basic button"><Link to='/profile'>Profile</Link></button>
                <button className="ui inverted blue basic button" onClick={()=>this.props.signout()}>Sign-out</button>
            </div>)
    }

    render() {
        return (
            <div className='navBar'>
                <Router>
                <div className="ui buttons">
                    {this.props.loggedin === true ? ( 
                        this.signed()
                    ) : (
                        <SignIn />
                    )}
                </div>
                <Route
                    exact
                    path="/favorites"
                    render={() => <Favorites favs={this.props.favs}/>}
                />
                <Route  
                    exact
                    path="/profile"
                    render={() => {return <Profile user={this.props.user}/>}}
                />
                </Router>
            </div>
        )
    };
};

export default NavBar;
