import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react'
import bcard from '../assets/bcard.jpg'
import CardFlip from "../components_searchHome/CardFlip";


const SearchHome = props => {

    const allCards = props.tweets.map( tweet => {
        return <CardFlip tweet={tweet}/>
    })

    const check = (num) => {
        return allCards[num]? allCards[num] : <Image src={bcard} />
    }

    return ( 
        <div className='tweetcards'>
            <React.Fragment>
                <Grid className="flip-card">
                    <Grid.Row columns={3} >
                    <Grid.Column>
                        {check(0)} 
                    </Grid.Column>
                    <Grid.Column>
                        {check(1)}
                    </Grid.Column>
                    <Grid.Column>
                        {check(2)}
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                    <Grid.Column>
                        {check(3)}
                    </Grid.Column>
                    <Grid.Column>
                        {check(4)}
                    </Grid.Column>
                    <Grid.Column>
                        {check(5)}
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3} >
                    <Grid.Column>
                        {check(6)}
                    </Grid.Column>
                    <Grid.Column>
                        
                    </Grid.Column>
                    <Grid.Column>
                        {check(7)}
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        </div>
    )
}

export default SearchHome;
