import React from "react";
import { Dropdown } from "semantic-ui-react";

class Dropdown2 extends React.Component {
  state = {
    selected: [],
    account: "",
    name: ""
  };

  handleSearchTwitter = async (e, data) => {
    e.persist();

    const eaccount = data.value.slice(1);
    const ename = e.target.textContent;

    await this.setState({
      name: ename,
      account: eaccount
    });
    this.props.searchTwitter(this.state.account);
    this.props.updateSelectedAcc(this.state.name, this.state.account);
  };

  render() {
    let favoriteOptions = this.props.top10;

    return (
      <div className="drpdwn">
        <Dropdown
          inverted
          placeholder="Select Twitter Account"
          fluid
          search
          selection
          options={favoriteOptions}
          onChange={e => this.handleSearchTwitter(e)}
          className="searchDown"
        />
      </div>
    );
  }
}

export default Dropdown2;
