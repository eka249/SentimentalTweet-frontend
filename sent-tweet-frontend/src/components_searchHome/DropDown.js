import React from "react";
import { Dropdown } from "semantic-ui-react";

class Dropdown2 extends React.Component {

  state = {
    selected: {}
  }

  handleSearchTwitter = async (e, data) => {
    console.log(e.type)
    console.log(e.type === 'keydown'? true:false)
    // if (e.type === 'click') { e.persist()  }
    console.log(e)
    // e.persist();

    const eaccount = data.value[0] === '@'? data.value.slice(1): data.value;
    const ename = e.target.textContent;

    await this.setState ({
      name: ename,
      account: eaccount
    },    
    )
    this.props.searchTwitter(this.state.account)
    this.props.updateSelectedAcc(this.state.name, this.state.account)
  };

  render() {
    let favoriteOptions = this.props.top10;

    return (
      <div className="drpdwn"> 
        <Dropdown
          clearable
          placeholder="Select Twitter Account"
          fluid
          search
          selection
          options={favoriteOptions}
          onChange={this.handleSearchTwitter}
          className='searchDown'
        />
      </div>
    );
  }
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
