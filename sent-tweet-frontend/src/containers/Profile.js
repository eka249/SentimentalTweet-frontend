import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import img from '../assets/profile2.12.jpg';

class Profile extends Component {
    state = {
        name: this.props.user.name,
        username: this.props.user.username,
    }

    handleChange = (e) => {
        this.setState({
            name: e
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit")
        this.props.updateUser(this.state.name)
    }

    render() {
        return ( 
            <div style={{  
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className='profile-name'>
                    {this.state.username}
                </div>
                <Form onSubmit={e => this.handleSubmit(e)}>  
                    <Form.Field onChange={ e => this.handleChange(e.target.value)}>
                        <label>Set New Name</label>
                        <input placeholder={this.state.name} />
                    </Form.Field>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )     
    }
}

export default Profile;