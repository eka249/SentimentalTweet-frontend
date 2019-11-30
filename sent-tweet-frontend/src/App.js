import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NavBarOpener from "./components_sidebar/NavBarOpener";
import SearchHome from "./containers/SearchHome";
import Favorites from "./containers/Favorites";
import Profile from "./containers/Profile";
import FavBar from "./components_searchHome/FavBar";
import DropDown from "./components_searchHome/DropDown";
import Entered from "./HOC/Entered";
// import SearchBar from "./components_searchHome/SearchBar";
import ModalContainer from "./components_sidebar/ModalContainer";

import ActualTweetCard from "./components_searchHome/ActualTweetCard";
import DropDown2 from "./components_searchHome/DropDown";
import twitteraccounts from "./components_favorites/TwitterAccts";
import searchTweets from "./components_favorites/tweets";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entered: false,
      tweets: [],
      show: true,
      logged_in: false,
      user: null,
      navBarShow: false,
      tweets: [],
      allTweeters: [],
      selectedAcc: { name: "", twitterHandle: "" },
      testword: ""
    }
  }

  generateAllCelebs = () => {
    //renders tweets for all celebs
    fetch("http://localhost:3000/get_celebs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
        ,
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      .then(data => console.log)
    // .then(data => this.setState({ allTweeters: data }));
  };

  getLoggedIn = () => {
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
        ,
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ user: data.user }))
      .then(this.setState({ logged_in: true }))
      .then(() => this.showModal())
    //comment below back in when testing twitter- too many requests used
    // .then(this.generateAllCelebs())
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

  // updateSelectedAcc = (name, account) => {
  //   this.setState({
  //     selectedAcc: { name: name, twitterHandle: account }
  //   });
  // };


  toggleNav = () => {
    this.setState({
      navBarShow: !this.state.navBarShow
    });
  };

  signed = () => {
    return (
      <React.Fragment>
        <Menu.Item as={Link} to="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/favorites">
          <Icon name="heart outline" />
          Favorites
        </Menu.Item>
        <Menu.Item as={Link} to="/profile">
          <Icon name="user outline" />
          Profile
        </Menu.Item>
        <Menu.Item onClick={() => this.logOut()}>
          <Icon name="sign out" />
          Sign-out
        </Menu.Item>
      </React.Fragment>
    );
  };

  toggleEnter = () => {
    this.setState({
      entered: true
    });
  };
  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };


  entered = () => {
    return (
      <React.Fragment>
        <FavBar favs={this.state.favorites} />
        <NavBarOpener toggle={this.toggleNav} />
        <SearchHome
          tweets={this.state.tweets}
          name={this.state.selectedAcc.name}
          user={this.state.user}
        />
        <DropDown allTweeters={this.state.allTweeters} />
      </React.Fragment>
    );
  };
  render() {

    return (
      <Router>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => this.toggleNav()}
            vertical
            visible={this.state.navBarShow}
            width="thin"
          >
            {this.state.logged_in ? (
              this.signed()
            ) : (
                <Menu.Item
                  onClick={this.showModal}
                // {() => this.onSignIn()}
                >
                  <Icon name="sign in" />
                  Sign-in
              </Menu.Item>
              )}
          </Sidebar>

          {this.state.show ? (
            <ModalContainer
              logged_in={this.state.logged_in}
              user={this.state.user}
              getLoggedIn={this.getLoggedIn}
              showModal={this.showModal}
              generateAllCelebs={this.generateAllCelebs}

            />
          ) : null}

          <Sidebar.Pusher dimmed={this.state.navBarShow}>
            <React.Fragment>
              <div className="App">
                <Route exact path="/">
                  <Entered
                    state={this.state}
                    enter={this.toggleEnter}
                    toggle={this.toggleNav}

                    updateSelectedAcc={this.updateSelectedAcc}
                  />
                  <SearchHome
                    tweets={this.state.tweets}
                    name={this.state.selectedAcc.name}
                  />
                </Route>
                <Route exact path="/favorites">
                  {this.state.logged_in ? (
                    <Favorites
                      toggleNav={this.toggleNav}
                      allTweeters={this.state.allTweeters}
                      user={this.state.user}
                    />
                  ) : (
                      <Redirect to="/" />
                    )}
                </Route>
                <Route exact path="/profile">
                  <Profile
                    loggedin={this.state.logged_in}
                    user={this.state.user}
                    updateUser={this.updateUser}
                    toggleNav={this.toggleNav}
                  />
                </Route>
              </div>
            </React.Fragment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

export default App;
