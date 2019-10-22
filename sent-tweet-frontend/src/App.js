import React from "react";
import NavBar from "./containers/NavBar";
import SearchHome from "./containers/SearchHome";
import Tweets from "./containers/Tweets";
import SignInTestButton from "./components/SignIn";
// import ModalContainer from "./components/ModalContainer";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* <NavBar />
        <SearchHome />
        <Tweets /> */}
        <SignInTestButton />
        {/* <ModalContainer /> */}
      </div>
    );
  }
}

export default App;
