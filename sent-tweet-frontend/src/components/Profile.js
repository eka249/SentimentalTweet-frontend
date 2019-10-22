import React, { Component } from 'react';

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
        // fetch(Url + this.props.user.id , {
        //     method: 'Update',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json'
        //     },
        //     body: JSON.stringify({ name })
        // })
        // .then(resp => resp.json())
        // .then(data => this.handleChange(data.name))
    }

    render() {
        return ( 
            <div>
                {/* {consider profile pic as a stretch goal} */}
                <div className='profile-name'>
                    {this.state.username}
                </div>
                <form onSubmit={e => this.handleSubmit(e)}>  
                    <input type="text" onChange={ e => this.handleChange(e.target.value)} name="displayName" value={this.state.name} />
                    <input type="submit"/>
                </form>
            </div>
        )     
    }
}

export default Profile;