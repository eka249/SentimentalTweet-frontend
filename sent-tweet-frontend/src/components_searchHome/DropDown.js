import React from "react";
import { Dropdown } from "semantic-ui-react";

const Dropdown2 = props => {
  let favoriteOptions = props.top10;

  const handleSearchTwitter = e => {
    e.preventDefault();
    console.log("searchbar term value", e.target.value);

    let celeb = e.target.value;
    props.searchTwitter(celeb);
  };

  return (
    <Dropdown
      placeholder="Select Favorite"
      fluid
      search
      selection
      options={favoriteOptions}
      onChange={e => handleSearchTwitter(e)}
    />
  );
};

export default Dropdown2;
