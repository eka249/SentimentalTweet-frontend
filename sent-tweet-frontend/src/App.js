import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBarOpener from "./components_sidebar/NavBarOpener";
import SearchHome from "./containers/SearchHome";
import Favorites from "./containers/Favorites";
import Profile from "./containers/Profile";

// import SearchBar from "./components_searchHome/SearchBar";
import ModalContainer from "./components_sidebar/ModalContainer";
import CelebIteration from "./components_searchHome/CelebIteration";
import ActualTweetCard from "./components_searchHome/ActualTweetCard";
import DropDown2 from "./components_searchHome/DropDown";
import twitteraccounts from "./components_favorites/TwitterAccts";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entered: false,
      show: false,
      logged_in: false,
      user: null,
      navBarShow: false,
      // favorites: [], //user's list of fav
      // tweets: [], //tweets of selectedAcc
      allCelebs: [],
      selectedAcc: { name: "", twitterHandle: "" }
    };
  }

  //change this to not be rendered upon sign in;
  // this function can be used for rendering favorites as well
  generateAllTweets = () => {
    fetch("http://localhost:3000/allcelebs", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      // .then(data => console.log(data));
      .then(data => this.setState({ allCelebs: data }));
  };
  addToFavorites = favorite => {
    //***************
    let favoriteTweeters = this.state.favorites;

    if (!favoriteTweeters.includes(favorite)) {
      this.setState({ favorites: [...this.state.favorites, favorite] });
    } else {
      let filteredTweeters = favoriteTweeters.filter(
        unFavorite => unFavorite.id !== favorite.id
      );
      this.setState({ favorites: [...filteredTweeters] });
    }
  }; //NEED TO RENDER TO FAVORITES PAGE

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  getLoggedIn = json => {
    console.log("initiated sign in fetch");
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
    // console.log("signed in as:", this.state.user);
    // console.log("local storage token", localStorage.token);
    // console.log("began fetchtwitter on front end-should go to /celebs");
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
        {/* <SearchHome tweets={this.state.tweets} name={this.state.selectedAcc.name}/> */}
        <DropDown
          // top10={this.state.top10}
          allCelebs={this.state.allCelebs}
          searchTwitter={this.searchTwitter}
        />
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
                  {console.log("below Searchome")}
                  {console.log("above Searchome")}
                  <SearchHome
                    tweets={this.state.tweets}
                    name={this.state.selectedAcc.name}
                  />
                  {console.log("below Searchome")}
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
