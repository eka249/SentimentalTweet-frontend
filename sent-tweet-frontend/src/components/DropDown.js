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

// const DropdownExampleSearchSelection = () => (
//   <Dropdown
//     placeholder="Select Country"
//     fluid
//     search
//     selection
//     options={countryOptions}
//   />
// );

// //   {
// //     key: "Justen Kitsune",
// //     text: "Justen Kitsune",
// //     value: "Justen Kitsune",
// //     image: {
// //       avatar: true,
// //       src: "https://react.semantic-ui.com/images/avatar/small/justen.jpg"
// //     }
// //   }
// // ];
//   <Dropdown
//     placeholder="Select Favorite"
//     fluid
//     selection
//     options={props.options}
//   />
// );

// export default Dropdown2;

// class DropDown extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <Dropdown
//           placeholder="Select Favorite"
//           fluid
//           selection
//           options={this.props.options.id}
//           key={this.props.options.id}
//         />
//       </div>
//     );
//   }
// }

// export default DropDown;
