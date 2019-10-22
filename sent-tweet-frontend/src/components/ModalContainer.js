import React, { Component } from "react";
import SignUp from "./SignUp";
import { Modal, Form, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class ModalContainer extends Component {
  state = {
    fields: {
      username: "",
      password: "",
      newUser: {
        name: "",
        username: "",
        password: ""
      },
      signUp: false
    }
  };
  handleChange = e => {
    let edited = e.target.value;
    let fieldName = e.target.name;
    this.setState({
      ...this.state.fields,
      [fieldName]: edited
    });
  };
  handleSignUp = e => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: e.target.newName.value,
        username: e.target.newUsername.value,
        password_digest: e.target.newPassword.value
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("after sign up form", data);
        // this.setState(prevState => {
        //   return { signedUp: true };
        // });
      });
  };

  handleSignIn = e => {
    //add auth here
  };
  render() {
    return (
      <Modal
        as={Form}
        onSubmit={e => this.handleSignUp(e)}
        open={true}
        size="tiny"
        // closeIcon={this.props.handleShowModal}
      >
        <Header content="Sign In" as="h2"></Header>
        <Modal.Actions>
          <Button
            onClick={this.props.handleShowModal}
            color="black"
            icon="x"
            size="tiny"
            align="right"
          />
        </Modal.Actions>
        <Modal.Content>
          <Form.Input
            label="Username"
            // required
            type="text"
            placeholder="Username"
            id="username"
          />
          <Form.Input
            label="Password"
            // required
            type="password"
            placeholder="Password"
            id="password"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="green"
            // icon="save"
            content="Save"
            onClick={this.handleSignIn}
          />
        </Modal.Actions>
        <Modal.Content>
          <Header content="Or Sign Up!" as="h3"></Header>
          <Form.Input
            label="Your Name"
            // required
            type="text"
            placeholder="Username"
            id="newName"
          />
          <Form.Input
            label=" New username"
            // required
            type="text"
            placeholder="Username"
            id="newUsername"
          />
          <Form.Input
            label=" New password"
            // required
            type="password"
            placeholder="Password"
            id="newPassword"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            type="submit"
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
