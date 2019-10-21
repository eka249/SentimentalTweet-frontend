import React, { useState, Component } from "react";
import SignUp from "./SignUp";
import { Modal, Button } from "react-bootstrap";

class ModalContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      newUser: {
        name: "",
        username: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    let edited = e.target.value;
    let fieldName = e.target.name;
    this.setState({
      ...this.state,
      [fieldName]: edited
    });
  };

  handleSubmit = e => {
    //add auth here
  };

  render() {
    return (
      <div className="ui field">
        <form onSubmit={this.handleSubmit}>
          <div className="ui field">
            <label>Username</label>
            <input
              name="username"
              type="text"
              required
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
          </div>
          <br></br>
          <div className="ui field">
            <label>Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
        <div>
          <ModalContainer
          // onSignIn={this.props.onSignIn}
          />
        </div>
      </div>
    );
  }
}

// function ModalContainer(props) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <br></br>
//       <Button
//         className="btn btn-primary"
//         name="toggleButton"
//         // variant="link"
//         onClick={handleShow}
//       >
//         Don't have an account? Sign Up!
//       </Button>
//       <Modal
//         // className= "btn btn-primary"
//         // fade= {false}
//         show={show}
//         onHide={handleClose}
//       >
//         <Modal.Header closeButton>Sign Up!</Modal.Header>
//         <Modal.Body>
//           <SignUp onSignUp={props.onSignIn} />
//         </Modal.Body>
//         <Modal.Footer>
//           {/* <Button onClick = {handleClose} className="btn btn-primary">
//                   Close
//                 </Button> */}
//           {/* <Button onClick = {handleClose} className="btn btn-primary">
//                 Create username
//                 </Button> */}
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

export default ModalContainer;
