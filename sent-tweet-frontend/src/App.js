import React from "react";
import SearchBar from "./SearchBar";
import sentimentAPI from "./api/sentimentAPI";

class App extends React.Component {
  state = {
    tweets: []
  };

  onSearchSubmit = async term => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
