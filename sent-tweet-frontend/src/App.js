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
      // logged_in: true,
      logged_in: true,
      user: {
        username: "tester1",
        name: "tester1",
        password: "tester1",
        id: 1
      },
      favorites: [], //user's list of fav
      tweets: [], //tweets of selectedAcc
      selectedAcc: { name: "", twitterHandle: "" }, //twitteraccount
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

  render() {
    //use loggedInYN as props flag throughout routes
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Router>
          <NavBar
            loggedin={this.state.logged_in}
            signout={this.logOut}
            onSignIn={this.onSignIn}
          />
          <Route exact path="/favorites">
            {this.state.logged_in ? (
              <Favorites
                favs={this.state.favorites}
                deleteFav={this.deleteFav}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/profile">
            {this.state.logged_in ? (
              <Profile user={this.state.user} updateUser={this.updateUser} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          {/* <SearchHome /> */}
          {/* <Tweets /> */}
          {/* <ModalContainer /> */}
        </Router>
        {/* <SearchBar searchTwitter={this.searchTwitter} /> */}
        {/* <DropDownIterator top10={this.state.top10}/> */}
        <DropDown2
          top10={this.state.top10}
          searchTwitter={this.searchTwitter}
        />
        {/* <CardFlip /> */}
        {/* <DataIteration tweets={tweets} /> */}
      </div>
    );
  }
}

export default App;
