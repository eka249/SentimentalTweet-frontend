import React, { Component } from "react";
import { Modal, Form, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class ModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        username: "",
        password: "",
        newName: "",
        newUsername: "",
        newPassword: "",
        signedUp: false
      }
    };
  }
  handleChange = e => {
    let fieldName = e.target.id;
    this.setState({
      fields: { ...this.state.fields, [fieldName]: e.target.value }
    });
    // ,() => this.props.showModal;
  };
  handleSignUp = e => {
    // e.preventDefault();
    console.log("reached handle sign up");
    console.log("password:", this.state.fields.newPassword);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.fields.newName,
        username: this.state.fields.newUsername,
        password: this.state.fields.newPassword
        // MAKE SURE THE ABOVE IS password:
      })
    })
      .then(response => response.json())
      .then(data => this.props.getLoggedIn(data.user))
    // .then(data =>
    //   console.log("after sign up form", data))
    // .then(this.props.generateAllTweets())

  };

  onSignIn = () => {
    console.log("hit onSignIn on front end")
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        username: this.state.fields.username,
        password: this.state.fields.password
      })
    })
      .then(response => response.json())
      .then(json => {
        //do something to update App state to deal with the logged_in status
        if (json.jwt) {
          localStorage.setItem("token", json.jwt);
          this.props.getLoggedIn(json);
        }
      })
      .then(() => {
        this.props.generateAllTweets();
      })
      .then(() => {
        this.props.searchTwitter();
      });
  };

  render() {
    return (
      <Modal
        // as={Form}
        // onSubmit={e => this.handleSignUp(e)}
        open={true}
        size="tiny"
        // closeIcon={this.props.showModal}
        className="c-modal"
      >
        <Header content="Sign In" as="h2"></Header>
        <Modal.Content>
          <Form.Input
            label="Username "
            // required
            type="text"
            placeholder="Username"
            id="username"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password "
            // required
            type="password"
            placeholder="Password"
            id="password"
            onChange={this.handleChange}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Sign In"
            // onClick={console.log("sign in hit")}
            onClick={() =>
              this.onSignIn()

              // this.props.showModal
            }
          />
        </Modal.Actions>
        <Modal.Content>
          <Header content="Or Sign Up!" as="h3"></Header>

          <Form.Input
            label="Your Name"
            // required
            type="text"
            placeholder="User"
            name="newName"
            id="newName"
            // value={this.state.newUser.newName}
            onChange={this.handleChange}
          />
          <Form.Input
            label=" New username "
            // required
            type="text"
            placeholder="Username"
            name="newUsername"
            id="newUsername"
            // value={this.state.newUser.newUsername}
            onChange={this.handleChange}
          />
          <Form.Input
            label=" New password "
            // required
            type="password"
            placeholder="Password"
            name="newPassword"
            id="newPassword"
            // value={this.state.newUser.newPassword}
            onChange={this.handleChange}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            // type="submit"
            onClick={this.handleSignUp}
            color="green"
            icon="pencil"
            content="Sign Up!"
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalContainer;
