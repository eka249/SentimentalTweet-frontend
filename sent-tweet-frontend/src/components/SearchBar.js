// import React from "react";

// export class SearchBar extends React.Component {
//   state = { term: "" };

//   handleSearchTwitter = e => {
//     e.preventDefault();
//     console.log("searchbar term value", this.state.term);
//     // this.setState({term: })
//     let term = this.state.term;
//     this.props.searchTwitter(term);
//   };

//   render() {
//     return (
//       <div className="ui segment">
//         <form onSubmit={e => this.handleSearchTwitter(e)} className="ui form">
//           <div className="field">
//             <label>Search Bar: </label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={event => this.setState({ term: event.target.value })}
//             />
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;

import React from "react";

export class SearchBar extends React.Component {
  state = { term: "" };

  handleSearchTwitter = e => {
    e.preventDefault();
    console.log("searchbar term value", this.state.term);
    // this.setState({term: })
    let celeb = this.state.term;
    this.props.searchTwitter(celeb);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={e => this.handleSearchTwitter(e)} className="ui form">
          <div className="field">
            <label>Search Bar: </label>
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
