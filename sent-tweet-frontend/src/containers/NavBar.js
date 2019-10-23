import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
        const loggedin = this.props.loggedin;
        return (
            <div className='navBar'>
                <div className="ui buttons">
                    {loggedin? ( 
                        this.signed()
                    ) : (
                        <SignInTestButton onSignIn={() =>this.props.onSignIn()} />
                    )}
                </div>
            </div>
        )
    };
};

export default NavBar;
