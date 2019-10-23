import React from 'react'
import { Button } from 'semantic-ui-react'


const openNavButton = (props) => (
  <Button circular basic inverted color='blue'  id='navBarBtn' onClick={props.toggle}>
    #menubar
  </Button>
)

export default openNavButton