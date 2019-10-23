import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { checkPropTypes } from 'prop-types'

const openNavButton = (props) => (
  <Button circular basic inverted color='blue'  id='navBarBtn' onClick={props.toggle}>
    #menubar
  </Button>
)

export default openNavButton