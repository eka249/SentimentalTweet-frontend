import React, { Component } from "react";
import ModalContainer from "./ModalContainer";

class SignIn extends Component {
  state = { show: false };
  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Sign in button</button>
        {/* <ModalContainer isOpen={this.state.show} /> */}
      </div>
    );
  }
}

export default SignIn;
