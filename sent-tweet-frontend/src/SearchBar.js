import React from "react";
import TwitterAPI from "./api/TwitterAPI";

export class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Search Bar: </label>
              <input
                type="text"
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })}
              />
            </div>
          </form>
        </div>
        <TwitterAPI searchResults={this.state.term} />
      </div>
    );
  }
}

export default SearchBar;
