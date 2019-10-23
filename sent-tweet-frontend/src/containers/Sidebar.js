import { useBooleanKnob } from '@stardust-ui/docs-components';
import React, { Component } from 'react';

// import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Favorites from '../components/Favorites';
import Profile from '../components/Profile';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import SearchHome from "./SearchHome";
import NavBarOpener from "../buttonComponents/NavBarOpener";


class SidebarExampleDimmed extends Component {

    signed = () => {
        return (
            <React.Fragment>
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as={Link} to='/favorites'>
                    <Icon name='heart outline' />
                    Favorites
                </Menu.Item>
                <Menu.Item as={Link} to='/profile'>
                    <Icon name='camera' />
                    Profile
                </Menu.Item>
                <Menu.Item onClick={()=>this.props.signout()}>
                    <Icon name='sign out' />
                    Sign-out 
                </Menu.Item>
            </React.Fragment>
        )
    }  
    
    render() {
        // const [visible, setVisible] = useBooleanKnob({ name: 'visible' })
        const loggedin = this.props.loggedin;

        return (
            <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={this.props.toggle}
                vertical
                visible={this.props.navBarShow}
                width='thin'
            >
                {loggedin? ( 
                    this.signed()
                ) : (
                    <Menu.Item onClick={() => this.props.onSignIn()}>
                        <Icon name='sign in' />
                        Profile
                    </Menu.Item>
                )}
            </Sidebar>
    
            <Sidebar.Pusher dimmed={this.props.navBarShow}>
                <Segment basic>
                <div className="App"> 
                {/* <div className="ui container" style={{ marginTop: "10px" }}> */}             
                {/* {this.state.navBarShow? <NavBar loggedin={this.state.logged_in} signout={this.logOut} onSignIn={this.onSignIn}/> : null} */}
                {/* <SideNavbar loggedin={this.state.logged_in} signout={this.logOut} onSignIn={this.onSignIn} navBarShow={this.state.navBarShow} toggle={this.toggleNav}/> */}
                <Route exact path="/">
                  <SearchHome />
                </Route>
                <Route exact path="/favorites">
                    {this.state.logged_in? <Favorites favs={this.state.favs} deleteFav={this.deleteFav}/> : <Redirect to="/" />}
                </Route>
                <Route exact path="/profile">
                    {this.state.logged_in? <Profile user={this.state.user} updateUser={this.updateUser}/> :  <Redirect to="/" />}
                </Route>
                {/* <Tweets />
                <ModalContainer /> */}
                       
              </div> 
                </Segment>
            </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    // return (
    //   <Sidebar.Pushable as={Segment}>
    //     <Sidebar
    //       as={Menu}
    //       animation='overlay'
    //       icon='labeled'
    //       inverted
    //       onHide={this.props.toggle}
    //       vertical
    //       visible={this.props.navBarShow}
    //       width='thin'
    //     >
    //       <Menu.Item as='a'>
    //         <Icon name='home' />
    //         Home
    //       </Menu.Item>
    //       <Menu.Item as='a'>
    //         <Icon name='gamepad' />
    //         Games
    //       </Menu.Item>
    //       <Menu.Item as='a'>
    //         <Icon name='camera' />
    //         Channels
    //       </Menu.Item>
    //     </Sidebar>
  
    //     <Sidebar.Pusher>
    //       <Segment basic>
    //         <div className='coverAll'>
    //             <Header as='h3'>Application Content</Header>
    //             <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    //         </div>
    //       </Segment>
    //     </Sidebar.Pusher>
    //   </Sidebar.Pushable>
    // )
    }
}

export default SidebarExampleDimmed