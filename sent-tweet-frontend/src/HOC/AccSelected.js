
import React from 'react'

const AccSelected = WrappedComponent => {
    return class LoggedInHOC extends React.Component {

        
        shouldRenderWrapped = () => {
            return this.props.selectedAcc.twitterHandle === ''? false:true;
        }
        render() {
            return this.shouldRenderWrapped()?<WrappedComponent {...this.props} />: null;
        }
    }
}

export default AccSelected