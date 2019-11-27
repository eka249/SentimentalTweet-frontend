import React from 'react'
import FavBar from "../components_searchHome/FavBar"
import NavBarOpener from "../components_sidebar/NavBarOpener";
import DropDown from "../components_searchHome/DropDown";
import Banner from "../components/Banner"
import SearchHome from "../containers/SearchHome";

class Entered extends React.Component {

    state= { ...this.props.state }

    enteredcom = () => {
<<<<<<< HEAD
        const { favorites, top10, logged_in } = this.state
        return (
            <React.Fragment>
                <FavBar favs={favorites} loggedin={logged_in} updateSelectedAcc={this.props.updateSelectedAcc}/>
                <SearchHome tweets={this.state.tweets} selectedAcc={this.props.Acc}/>
                <NavBarOpener toggle={this.props.toggle}/>          
                <DropDown top10={top10} searchTwitter={this.props.searchTwitter} updateSelectedAcc={this.props.updateSelectedAcc}/>
=======
        const { favorites, allTweeters, logged_in, tweets, selectedAcc } = this.props.state
        return (
            <React.Fragment>
                <FavBar favs={favorites} loggedin={logged_in} />
                <NavBarOpener toggle={this.props.toggle} />
                <SearchHome tweets={tweets} name={selectedAcc.name} />
                <DropDown allTweeters={allTweeters} searchTwitter={this.props.searchTwitter} updateSelectedAcc={this.props.updateSelectedAcc} />
>>>>>>> 8d6a130f058d21324ceae9be706c5eac758c0323
            </React.Fragment>
        )
    }

    render() {
        const { entered } = this.props.state
        return (
            entered ? this.enteredcom() : <Banner visible={this.props.entered} enter={this.props.enter} />
        )
    }

}

export default Entered