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
      // username: null,
      // name: "",
      user: 2,
      navBarShow: false,
      favorites: [], //user's list of fav
      tweets: [],
      //tweets of selectedAcc
      // allTweeters: [
      //   "Katy Perry",
      //   "Lady Gaga",
      //   "Tom Holland",
      //   "Isaiah Thomas",
      //   "Donald J. Trump",
      //   "The New York Times",
      //   "The Washington Post",
      //   "Greta Thunberg",
      //   "Louis Tomlinson",
      //   "Tommy Dreamer",
      //   "Taylor Swift"
      // ],
      allTweeters: [],
      selectedAcc: { name: "", twitterHandle: "" },
      testword: ""
    }
  }

  generateAllTweets = () => {
    console.log('hit generae tweets on frot end')
    fetch("http://localhost:3000/celebs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
        ,
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      // .then(data => this.setState({ allTweeters: data }))
      .then(data => console.log(data))
    //.then map to put correct proper format (on front or back end?)
    // .then(data => this.setState({ top10: [...data] }));

  };
  addToFavorites = favorite => {
    let favoriteTweeters = this.state.favorites;

    if (!favoriteTweeters.includes(favorite)) {
      this.setState({ favorites: [...this.state.favorites, favorite] });
    } else {
      let filteredTweeters = favoriteTweeters.filter(
        unFavorite => unFavorite.id !== favorite.id
      );
      this.setState({ favorites: [...filteredTweeters] });
    }
    this.addFav(favorite)
  };

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
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
      // .then(data => console.log(data))
      // .then(data => this.setUser(data))
      // .then(this.setUser())
      .then(data => this.setState({ user: data.user }))
      .then(this.setState({ logged_in: true }))
      // .then(data => this.setState({ name: data.user.name }))

      // .then(this.setState({ logged_in: true }))
      .then(() => this.showModal())
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

  ////////////////////hard code test login///////////////////////
  // logIn = () => {
  //   this.setState(prevState => {
  //     return {
  //       logged_in: true
  //       // user: {
  //       //   name: "test",
  //       //   userName: "test user",
  //       //   password: "1"
  //       // }
  //     };
  //   });
  // };

  updateSelectedAcc = (name, account) => {
    this.setState({
      selectedAcc: { name: name, twitterHandle: account }
    });
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

  addFav = fav => {
    console.log(fav.id)
    // const user_id = this.state.user.id
    // const twitter_account_id = e.target.id
    // //////double check on the e.target.id to match twitteracc id.
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

  searchTwitter = celeb => {
    // // console.log("signed in as:", this.state.user);
    // // console.log("local storage token", localStorage.token);
    // // console.log("began fetchtwitter on front end-should go to /celebs");
    // return fetch("http://localhost:3000/celebs", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     Authorization: `Bearer ${localStorage.token}`
    //   },
    //   body: JSON.stringify({ celebrity: celeb })
    // }).then(response => response.json());
    // // .then(data => console.log(data))
    // // .then(data => {
    // //   this.setState({
    // //     tweets: data
    // //   });
    // // });
    // this.setState {
    //   tweets: searchTweets
    // });
  };

  toggleEnter = () => {
    this.setState({
      entered: true
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
        />
        <DropDown allTweeters={this.state.allTweeters} searchTwitter={this.searchTwitter} />
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
              generateAllTweets={this.generateAllTweets}
              searchTwitter={this.searchTwitter}
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
                    searchTwitter={this.searchTwitter}
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
                      favs={this.state.favs}
                      toggleNav={this.toggleNav}
                      allTweeters={this.state.allTweeters}
                      favorites={this.state.favorites}
                      addToFavorites={this.addToFavorites}
                      user={this.state.user}
                      deleteFav={this.deleteFav}
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
