import React from "react";
import FavBar from "../components_searchHome/FavBar";
import NavBarOpener from "../components_sidebar/NavBarOpener";
import DropDown from "../components_searchHome/DropDown";
import Banner from "../components/Banner";
import SearchHome from "../containers/SearchHome";

class Entered extends React.Component {
  state = { ...this.props.state };

  enteredcom = () => {
    const {
      favorites,
      allTweeters,
      logged_in,
      tweets,
      selectedAcc
    } = this.props.state;
    return (
      <React.Fragment>
        <FavBar favs={favorites} loggedin={logged_in} />
        <NavBarOpener toggle={this.props.toggle} />
        <SearchHome tweets={tweets} name={selectedAcc.name} />
        <DropDown
          allTweeters={allTweeters}
          searchTwitter={this.props.searchTwitter}
          updateSelectedAcc={this.props.updateSelectedAcc}
        />
      </React.Fragment>
    );
  };

  render() {
    const { entered } = this.props.state;
    return entered ? (
      this.enteredcom()
    ) : (
      <Banner visible={this.props.entered} enter={this.props.enter} />
    );
  }
}

export default Entered;
