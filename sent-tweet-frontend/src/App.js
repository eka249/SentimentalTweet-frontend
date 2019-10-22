import React from "react";
import 'semantic-ui-css/semantic.min.css'
import NavBar from "./containers/NavBar";
// import SearchHome from "./containers/SearchHome";
// import Tweets from "./containers/Tweets";

// import ModalContainer from "./components/ModalContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      logged_in: true,
      // user: null,
          user: {'username':'tester1', 'name':'tester1', 'password':'tester1', 'id':1},
      favorites: [{'one':1}, {'two':2}], //user's list of fav
      tweets: [], //tweets of selectedAcc 
      selectedAcc: [] //twitteraccount
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

  updateUser = (e) => {
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
  }

  deleteFav = (e) => {
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
  }

  addFav = (e) => {
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
  }

  render() {
    //use loggedInYN as props flag throughout routes
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <NavBar loggedin={this.state.logged_in} signout={this.logOut}
          favs={this.state.favorites} deleteFav={this.deleteFav}
          user={this.state.user} updateUser={this.updateUser}
          onSignIn={this.onSignIn}
        />
        {/* <SearchHome />
        <Tweets /> */}

        {/* <ModalContainer /> */}
      </div>
    );
  }
}

export default App;
