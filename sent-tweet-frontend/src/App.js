import React from "react";
import NavBar from "./containers/NavBar";
import SearchHome from "./containers/SearchHome";
import Tweets from "./containers/Tweets";
import SignInTestButton from "./components/SignIn";
// import ModalContainer from "./components/ModalContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      logged_in: false,
      user: null
    };
  }
  loggedInYN = (data, from) => {
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => {
          return { logged_in: true, user: data.user };
        });
      });
  };

  getUser = () => {
    fetch(`http://localhost:3000/users/${this.state.user.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => {
          return {
            logged_in: true,
            user: data
          };
        });
      });
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.setState(prevState => {
      return {
        logged_in: false,
        user: null
      };
    });
  };

  render() {
    //use loggedInYN as props flag throughout routes
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* <NavBar />
        <SearchHome />
        <Tweets /> */}
        <SignInTestButton onSignIn={this.onSignIn} />
        {/* <ModalContainer /> */}
      </div>
    );
  }
}

export default App;
