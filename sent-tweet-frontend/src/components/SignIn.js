import React, { Component } from "react";
import ModalContainer from "./ModalContainer";

class SignIn extends Component {
  state = { show: false };

  handleShowModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <button className="ui  blue basic button" onClick={this.handleShowModal}>Sign in button</button>
        {this.state.show ? (
          <ModalContainer
            handleShowModal={this.handleShowModal}
            onSignIn={this.props.onSignIn}
          />
        ) : null}
      </div>
    );
  }
}

export default SignIn;
