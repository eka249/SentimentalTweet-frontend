import React, { Component } from "react";
import { Form, Icon, Input } from "semantic-ui-react";
import img from "../assets/profile2.12.jpg";
import NavBarOpener from "../components_sidebar/NavBarOpener";
import LoggedInHOC from "../HOC/LoggedInHOC";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: this.props.user.name,
    username: this.props.user.username
  };

  handleChange = e => {
    this.setState({
      name: e
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log("handleSubmit");
    fetch(`http://localhost:3000/users/${this.state.user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ name: this.state.name })
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        className="profile"
      >
        <NavBarOpener toggle={this.props.toggleNav} />
        <div className="profile-center">
          <h2 className="profile-name">{this.state.username}</h2>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Field
              inline
              onChange={e => this.handleChange(e.target.value)}
            >
              <Input placeholder="Set New Name" />
              <Form.Button inverted icon className="profile-submit">
                <Icon name="pencil" />
              </Form.Button>
            </Form.Field>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoggedInHOC(Profile);
