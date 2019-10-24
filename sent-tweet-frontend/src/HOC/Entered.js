import React from 'react'
import FavBar from "../components_searchHome/FavBar"
import NavBarOpener from "../components_sidebar/NavBarOpener";
import DropDown from "../components_searchHome/DropDown";
import Banner from "../components/Banner"
import SearchHome from "../containers/SearchHome";

class Entered extends React.Component {

    state= { ...this.props.state }

    // componentDidUpdate() {
    //     // console.log('updated on entered?')
    //     // console.log('this.state.selectedAcc')
    //     // console.log(this.state.selectedAcc)
    //     // console.log('this.props.Acc')
    //     // console.log(this.props.Acc)
    //     return <SearchHome tweets={this.state.tweets} selectedAcc={this.props.Acc}/>
    // }

    enteredcom = () => {
        const { favorites, top10, logged_in } = this.state
        return (
            <React.Fragment>
                <FavBar favs={favorites} loggedin={logged_in} updateSelectedAcc={this.props.updateSelectedAcc}/>
                {/* {this.componentDidUpdate()} */}
                <SearchHome tweets={this.state.tweets} selectedAcc={this.props.Acc}/>
                <NavBarOpener toggle={this.props.toggle}/>          
                {/* <SearchHome tweets={this.state.tweets} selectedAcc={selectedAcc}/> */}
                <DropDown top10={top10} searchTwitter={this.props.searchTwitter} updateSelectedAcc={this.props.updateSelectedAcc}/>
            </React.Fragment>
        )
        }

    render() {
        const { entered } = this.props.state
        return (
        entered? this.enteredcom() : <Banner visible={this.props.entered} enter={this.props.enter}/>
        )
    }
   
}

export default Entered