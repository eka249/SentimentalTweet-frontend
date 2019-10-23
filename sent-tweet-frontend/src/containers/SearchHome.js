import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import bcard from '../assets/bcard.jpg'


const SearchHome = () => {

    return ( 
        <div class='tweetcards'>
        <Grid id="tweets">
    <Grid.Row columns={3} >
      <Grid.Column>
        <Image src={bcard} />
      </Grid.Column>
      <Grid.Column>
        <Image src={bcard} />
      </Grid.Column>
      <Grid.Column>
        <Image src={bcard} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src={bcard} />
      </Grid.Column>
      <Grid.Column>
        <Image src={bcard} />
      </Grid.Column>
      <Grid.Column>
        <Image src={bcard} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src={bcard} />
      </Grid.Column>
      <Grid.Column>
        <Image src={bcard} />
      </Grid.Column>
      <Grid.Column>
        <Image src={bcard} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
    )

}
export default SearchHome;