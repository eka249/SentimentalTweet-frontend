import React from "react";
import NavBar from "./containers/NavBar";
import SearchHome from "./containers/SearchHome";
import Tweets from "./containers/Tweets";
import SignInTestButton from "./components/SignIn";
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  state = {
    loggedin: false,
    displayName: "", //user's displayName
    favorites: [], //user's list of fav
    tweets: [], //tweets of selectedAcc 
    selectedAcc: [] //twitteraccount
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <NavBar favorites={this.state.favorites} />
        {/* <SearchHome />
        <Tweets /> */}
        <SignInTestButton />
      </div>
    );
  }
}

export default App;
