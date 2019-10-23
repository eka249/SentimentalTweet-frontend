import React from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./containers/NavBar";
import SearchHome from "./containers/SearchHome";
import Tweets from "./containers/Tweets";
import SignIn from "./components/SignIn";
import CardFlip from "./components/CardFlip";
import Favorites from "./components/Favorites";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import tweets from "./components/SampleData";
// import SearchHome from "./containers/SearchHome";
// import Tweets from "./containers/Tweets";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

import NavBarOpener from "./buttonComponents/NavBarOpener";
import SearchHome from "./containers/SearchHome";
import ModalContainer from "./components/ModalContainer";
import CelebIteration from "./components/CelebIteration";
import ActualTweetCard from "./components/ActualTweetCard";
import DataIteration from "./components/SampleDataIteration";
import DropDown2 from "./components/DropDown";
import SearchBar from "./components/SearchBar";
import DropDownIterator from "./components/DropDownIterator";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // logged_in: false,
      logged_in: true,
      user: null,
      // user: {
      //   username: "tester1",
      //   name: "tester1",
      //   password: "tester1",
      //   id: 1
      // },
      // favorites: [{ one: 1 }, { two: 2 }] //user's list of fav
      tweets: [
        { content: "Hello", sentiment: 0.5, date: "10/23/19" },
        { content: "Bye", sentiment: 0.3, date: "10/23/19" }
      ], //tweets of selectedAcc
      selectedAcc: [], //twitteraccount
      navBarShow: false,
      selectedAcc: [], //twitteraccount
      top10: [
        {
          key: "Barack Obama",
          value: "Barack Obama",
          text: "@BarackObama"
        },
        {
          key: "Katy Perry",
          value: "Katy Perry",
          text: "@katyperry"
        },
        {
          key: "Justin BIeber",
          value: "Justin Bieber",
          text: "@justinbieber"
        }
      ]
    };
  }

  getLoggedIn = (data, from) => {
    // console.log("initiated sign in fetch");
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

  updateUser = e => {
    // fetch(Url + this.state.user.id , {
    //     method: 'UPDATE',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json'
    //     },
    //     body: JSON.stringify({ name })
    // })
    // .then(resp => resp.json())
    // .then(data => this.handleChange(data.name))
    // MAKE SURE data.name IS  THE NAME ONLY
  };

  deleteFav = e => {
    //********* RECEIVE ALL FAVS of USER as RETURNED DATA
    // fetch(Url + e.id {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   }
    // })
    // .then(resp => resp.json())
    // .then(data => {
    //   this.setData({
    //     favorites: data
    //   })
    // })
  };

  addFav = e => {
    // const user_id = this.state.user.id
    // const twitter_account_id = e.target.id
    ////////double check on the e.target.id to match twitteracc id.
    // fetch(Url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json'
    //     },
    //     body: JSON.stringify({ user_id, twitter_account_id })
    // })
    // .then(resp => resp.json())
    // .then(data => {
    //   this.setState({
    //    favorites: [...this.state.favorites, data]
    // })})
  };

  searchTwitter = celeb => {
    fetch(`http://localhost:3000/tweets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: ""
      },

      body: JSON.stringify({
        celeb
      })
    })
      .then(response => response.json)
      .then(data => {
        this.setState({
          tweets: data
        });
      });
  };

  toggleNav = () => {
    this.setState({
      navBarShow: !this.state.navBarShow
    });
  };

  signed = () => {
    return (
      <React.Fragment>
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/favorites">
          <Icon name="heart outline" />
          Favorites
        </Menu.Item>
        <Menu.Item as={Link} to="/profile">
          <Icon name="camera" />
          Profile
        </Menu.Item>
        <Menu.Item onClick={() => this.logOut()}>
          <Icon name="sign out" />
          Sign-out
        </Menu.Item>
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
              <Menu.Item onClick={() => this.onSignIn()}>
                <Icon name="sign in" />
                Sign-in
              </Menu.Item>
            )}
          </Sidebar>

          <Sidebar.Pusher dimmed={this.state.navBarShow}>
            <React.Fragment>
              <div className="App">
                <NavBarOpener toggle={this.toggleNav} />
                <Route exact path="/">
                  {console.log("above Searchome")}
                  <SearchHome tweets={this.state.tweets} />
                  {console.log("below Searchome")}
                </Route>
                <Route exact path="/favorites">
                  {/* {this.state.logged_in? <Favorites favs={this.state.favs} deleteFav={this.deleteFav}/> : <Redirect to="/" />} */}
                </Route>
                <Route exact path="/profile">
                  {/* {this.state.logged_in? <Profile user={this.state.user} updateUser={this.updateUser}/> :  <Redirect to="/" />} */}
                </Route>
                {/* <Tweets />
                <ModalContainer /> */}
                <SignIn
                  logged_in={this.state.logged_in}
                  user={this.state.user}
                  getLoggedIn={this.getLoggedIn}
                />
              </div>
            </React.Fragment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

export default App;
