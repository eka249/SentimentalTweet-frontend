import React from "react";
import NavBar from "./containers/NavBar";
import SearchHome from "./containers/SearchHome";
import Tweets from "./containers/Tweets";
import SignIn from "./components/SignIn";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* <NavBar />
        <SearchHome />
        <Tweets /> */}
        <SignIn />
      </div>
    );
  }
}

export default App;
