import React from "react";
import 'semantic-ui-css/semantic.min.css'
import NavBar from "./containers/NavBar";
// import SearchHome from "./containers/SearchHome";
// import Tweets from "./containers/Tweets";
import SignInTestButton from "./components/SignIn";

class App extends React.Component {
  state = {
    loggedin: true,
    user: {'username':'tester1', 'name':'tester1', 'password':'tester1', 'id':1},
    favorites: [{'one':1}, {'two':2}], //user's list of fav
    tweets: [], //tweets of selectedAcc 
    selectedAcc: [] //twitteraccount
  };

  signout = () => {
    console.log("will sign out")
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
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <NavBar loggedin={this.state.loggedin} signout={this.signout}
          favs={this.state.favorites} deleteFav={this.deleteFav}
          user={this.state.user} updateUser={this.updateUser}
        />
        {/* <SearchHome />
        <Tweets /> */}
        {/* <SignInTestButton /> */}


      </div>
    );
  }
}

export default App;
