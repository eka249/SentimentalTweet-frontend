import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBarOpener from "./components_sidebar/NavBarOpener";
import SearchHome from "./containers/SearchHome";
import Favorites from "./components_favorites/FavoriteCards";
import Profile from "./containers/Profile";
import ModalContainer from "./components_sidebar/ModalContainer";
import CelebIteration from "./components_searchHome/CelebIteration";
import ActualTweetCard from "./components_searchHome/ActualTweetCard";
import DropDown2 from "./components_searchHome/DropDown";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
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

      // user: {
      //   username: "tester1",
      //   name: "tester1",
      //   password: "tester1",
      //   id: 1
      // },
      favorites: [], //user's list of fav
      // tweets: [], //tweets of selectedAcc
      // selectedAcc: { name: "", twitterHandle: "" }, //twitteraccount
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
  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

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

  updateSelectedAcc = (name, account) => {
    this.setState({
      selectedAcc: { name: { name }, twitterHandle: { account } }
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

  searchTwitter = celeb => {
    // console.log("signed in as:", this.state.user);
    // console.log("local storage token", localStorage.token);
    console.log("began fetchtwitter on front end-should go to /celebs");
    fetch(`http://localhost:3000/celebs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ celebrity: celeb })
    });
    // .then(response => response.json)
    // .then(data => {
    //   this.setState({
    //     tweets: data
    //   });
    // });
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
            />
          ) : null}
          <Sidebar.Pusher dimmed={this.state.navBarShow}>
            <React.Fragment>
              <div className="App">
                <NavBarOpener toggle={this.toggleNav} />
                <Route exact path="/">
                  {console.log("above Searchome")}
                  <SearchHome
                    tweets={this.state.tweets}
                    name={this.state.selectedAcc.name}
                  />
                  {console.log("below Searchome")}
                  {console.log("above Searchome")}
                  <SearchHome
                    tweets={this.state.tweets}
                    name={this.state.selectedAcc.name}
                  />
                  {console.log("below Searchome")}
                </Route>

                <Route exact path="/favorites">
                  {/* {this.state.logged_in? <Favorites favs={this.state.favs} deleteFav={this.deleteFav}/> : <Redirect to="/" />} */}
                </Route>
                <Route exact path="/profile">
                  {/* {this.state.logged_in? <Profile user={this.state.user} updateUser={this.updateUser}/> :  <Redirect to="/" />} */}
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
