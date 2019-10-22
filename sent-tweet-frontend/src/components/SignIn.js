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
        <button onClick={this.handleShowModal}>Sign in button</button>
        {this.state.show ? (
          <ModalContainer handleShowModal={this.handleShowModal} />
        ) : null}
      </div>
    );
  }
}

export default SignIn;
