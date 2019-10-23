import React, { Component } from "react";
import ModalContainer from "./ModalContainer";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };
  fetchTwitter = e => {
    // console.log("signed in as:", this.props.user);
    // console.log("local storage token", localStorage.token);
    console.log("began fetchtwitter on front end-should go to /celebs");

    let celeb = "realDonaldTrump";
    //^insert field name that asif makes here
    fetch(`http://localhost:3000/celebs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ celeb: celeb })
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Sign in button</button>
        {this.state.show ? (
          <ModalContainer
            user={this.props.user}
            getLoggedIn={this.props.getLoggedIn}
            showModal={this.showModal}
          />
        ) : null}
        <button onClick={e => this.fetchTwitter(e)}>get donald's tweets</button>
      </div>
    );
  }
}

export default SignIn;
