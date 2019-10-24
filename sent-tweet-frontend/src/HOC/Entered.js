import React from 'react'
import FavBar from "../components_searchHome/FavBar"
import NavBarOpener from "../components_sidebar/NavBarOpener";
import DropDown from "../components_searchHome/DropDown";
import Banner from "../components/Banner"
import SearchHome from "../containers/SearchHome";

class Entered extends React.Component {

    entered = () => {
        return this.props.entered;
    }

    enteredcom = () => {
        return (
            <React.Fragment>
                <FavBar favs={this.props.favorites} loggedin={this.props.loggedin}/>
                <NavBarOpener toggle={this.props.toggle}/>          
                <SearchHome tweets={this.props.tweets} name={this.props.selectedAcc.name}/>
                <DropDown top10={this.props.top10} searchTwitter={this.props.searchTwitter}/>
            </React.Fragment>
        )
        }

    render() {
        return (
        this.entered()? this.enteredcom() : <Banner visible={this.props.entered} enter={this.props.enter}/>
        )
    }
   
}

export default Entered