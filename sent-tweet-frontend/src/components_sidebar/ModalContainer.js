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
        newUser: {
          newName: "",
          newUsername: "",
          newPassword: ""
        },
        signedUp: false
      }
    };
  }
  handleChange = e => {
    // console.log(this.state.fields.username);
    // console.log(e.target.value);
    // console.log(e.target.id);
    let fieldName = e.target.id;
    this.setState({
      fields: { ...this.state.fields, [fieldName]: e.target.value }
    });
    // ,() => this.props.showModal;
  };
  handleSignUp = e => {
    // e.preventDefault();
    // console.log("reached handle sign up");
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.fields.newUser.newName,
        username: this.state.fields.newUser.newUsername,
        password: this.state.fields.newUser.password
      })
    })
      .then(response => response.json())
      .then(data => {
        // console.log("after sign up form", data);
        // this.setState(prevState => {
        //   return { signedUp: true };
        // });
      });
    // {
    //   this.props.showModal;
    // }
  };

  onSignIn = () => {
    // console.log("reached sign in function");
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
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
          // debugger
          // console.log(json);
          this.props.getLoggedIn(json);
        }
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
      >
        <Header content="Sign In" as="h2"></Header>
        <Modal.Actions>
          <Button
            onClick={this.props.showModal}
            color="black"
            icon="x"
            size="tiny"
          />
        </Modal.Actions>
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
            color="green"
            content="Sign In"
            // onClick={console.log("sign in hit")}
            onClick={this.onSignIn}
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
