import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import AllTweeters from './AllTweeters'
import AllTweets from './AllTweets'


const TweetGrid = () => (
    <Grid columns={4} >
        <Grid.Row stretched>
            <Grid.Column>
                <Segment><AllTweeters /></Segment>
            </Grid.Column>
            <Grid.Column>
                <AllTweets />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default TweetGrid