import React from "react";
import NavBar from "./containers/NavBar";
import SearchHome from "./containers/SearchHome";
import Tweets from "./containers/Tweets";
import SignInTestButton from "./components/SignIn";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    loggedin: true,
    displayName: "", //user's displayName
    favorites: [{'one':1}, {'two':2}], //user's list of fav
    tweets: [], //tweets of selectedAcc 
    selectedAcc: [] //twitteraccount
  };

  signout = () => {
    console.log("will sign out")
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <NavBar loggedin={this.state.loggedin} favs={this.state.favorites} />
        {/* <SearchHome />
        <Tweets /> */}
        <SignInTestButton />
      </div>
    );
  }
}

export default App;
