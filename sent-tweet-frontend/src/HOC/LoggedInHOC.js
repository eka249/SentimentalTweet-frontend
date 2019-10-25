
import React from 'react'
import { Redirect } from "react-router-dom"

const LoggedInHOC = WrappedComponent => {
    return class LoggedInHOC extends React.Component {
        shouldRenderWrapped = () => {
            return this.props.loggedin;
        }
        render() {
            return this.shouldRenderWrapped()?<WrappedComponent {...this.props} />: <Redirect to="/" />
        }
    }
}

export default LoggedInHOC