import React from "react";
import NavBar from "./containers/NavBar";
import SearchHome from "./containers/SearchHome";
import Tweets from "./containers/Tweets";
import SignInTestButton from "./components/SignIn";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    loggedin: true,
    user: {'username':'tester1', 'name':'tester1', 'password':'tester1', 'id':1},
    favorites: [{'one':1}, {'two':2}], //user's list of fav
    tweets: [], //tweets of selectedAcc 
    selectedAcc: [] //twitteraccount
  };

  signout = () => {
    console.log("will sign out")
  };

  updateUser = () => {
    // fetch update User displayname and/or password, then setState
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <NavBar loggedin={this.state.loggedin} favs={this.state.favorites} user={this.state.user}/>
        {/* <SearchHome />
        <Tweets /> */}
        <SignInTestButton />
      </div>
    );
  }
}

export default App;
