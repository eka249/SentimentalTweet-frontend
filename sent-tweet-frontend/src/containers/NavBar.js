import React, { Component } from 'react';
import SignIn from '../components/SignIn';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Favorites from '../components/Favorites';
import Profile from '../components/Profile';
import SignInTestButton from "../components/SignIn";



class NavBar extends Component {
    signed = () => {
        return (
            <div> 
                <button className="ui  blue basic button"><Link to='/favorites'>Favorites</Link></button>
                <button className="ui  blue basic button"><Link to='/profile'>Profile</Link></button>
                <button className="ui  blue basic button" onClick={()=>this.props.signout()}>Sign-out</button>
            </div>)
    }

    render() {
        const loggedin = this.props.loggedin
        return (
            <div className='navBar'>
                <Router>
                    <div className="ui buttons">
                        {this.props.loggedin === true ? ( 
                            this.signed()
                        ) : (
                            <SignInTestButton onSignIn={this.props.onSignIn} />
                        )}
                    </div>
                    <Route exact path="/favorites">
                        {loggedin? <Favorites favs={this.props.favs} deleteFav={this.props.deleteFav}/> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/profile">
                        {loggedin? <Profile user={this.props.user} updateUser={this.props.updateUser}/> :  <Redirect to="/" />}
                    </Route>
                </Router> 
            </div>
        )
    };
};

export default NavBar;
