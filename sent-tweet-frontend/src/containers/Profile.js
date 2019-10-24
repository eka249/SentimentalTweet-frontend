import React, { Component } from "react";
import { Form } from "semantic-ui-react";

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
      <div>
        <div className="profile-name">{this.state.username}</div>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Field onChange={e => this.handleChange(e.target.value)}>
            <label>Set New Name</label>
            <input placeholder={this.state.name} value={this.state.name} />
          </Form.Field>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default Profile;
