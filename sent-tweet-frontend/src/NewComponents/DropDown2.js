import React from "react"
import { Dropdown } from 'semantic-ui-react'



const TweeterOptions = [
    {
        key: 'Asif 1',
        text: 'Asif 1',
        value: 'Asif 1',
        // image: {avatar: ture, src: ''}
    }, {
        key: 'Ellyn 1',
        text: 'Ellyn 1',
        value: 'Ellyn 1',
        // image: {avatar: ture, src: ''}
    }, {
        key: 'Asif 2',
        text: 'Asif 2',
        value: 'Asif 2',
        // image: {avatar: ture, src: ''}
    }, {
        key: 'Ellyn 2',
        text: 'Ellyn 2',
        value: 'Ellyn 2',
        // image: {avatar: ture, src: ''}
    }, {
        key: 'Asif 3',
        text: 'Asif 3',
        value: 'Asif 3',
        // image: {avatar: ture, src: ''}
    }
]

let DropdownSelection = () => (
    <Dropdown
        button
        className='icon'
        fluid
        labeled
        icon='world'
        options={TweeterOptions}
        search
        text='Search Tweeter'
    />
)

export default DropdownSelection