import React from 'react';
import Button from 'semantic-ui-react/Button';
// import Link from 'semantic-ui-react/Link'

const NavBar = (props) => {

    return (
        <div className='navBar'>
            {/* <Button.Group floated='right'>
                {props.loggedin === true ? ( 
                    <Button toggle>
                        <Link to='/favorites'>
                            Favorites
                        </Link>
                    </Button>,
                    <Button toggle>
                        <Link to='/profile'>
                            Profile
                        </Link>
                    </Button>
                ) : (
                    null
                )}
                <Button onClick={console.log("will render Modal")}>
                    {props.loggedin === true ? 'Sign-out':'Sign-in'}
                </Button>
            </Button.Group> */}
        </div>
    )
};

export default NavBar;
