import React from "react";
import ReactCardFlip from "react-card-flip";
import ActualTweetCard from "./ActualTweetCard";
import ActualTweetCardFront from "./ActualTweetCardFront";

class CardFlip extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <ActualTweetCardFront
          key="front"
          handleClick={this.handleClick}
        ></ActualTweetCardFront>

        <ActualTweetCard
          key="back"
          handleClick={this.handleClick}
        ></ActualTweetCard>
      </ReactCardFlip>
    );
  }
}

export default CardFlip;
