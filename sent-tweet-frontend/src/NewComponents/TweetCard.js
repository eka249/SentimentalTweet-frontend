
// import React from "react";
// import { Card, Segment } from "semantic-ui-react";

// const TweetCard = props => (
//     <Segment>
//         <Card
//             header={props.tweet.celeb_username}
//             meta={props.tweet.sentiment2}
//             description={props.tweet.content}
//         />
//     </Segment>

// );

// export default TweetCard;
import React from "react";
import ReactCardFlip from "react-card-flip";
import ActualTweetCard from "../components_searchHome/ActualTweetCard";
import ActualTweetCardFront from "../components_searchHome/ActualTweetCardFront";

class TweetCard extends React.Component {
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
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" id='flipcard'>
                <ActualTweetCardFront
                    key="front"
                    handleClick={this.handleClick}
                    sent={this.props.tweet.sentiment2}
                ></ActualTweetCardFront>

                <ActualTweetCard
                    key="back"
                    handleClick={this.handleClick}
                    content={this.props.tweet.content}
                    date={this.props.tweet.date}
                    sent={this.props.tweet.sentiment2}
                ></ActualTweetCard>
            </ReactCardFlip>
        );
    }
}

export default TweetCard;