import React, { Component } from 'react'
import Witcher from './Witcher'
import Crown from './Crown'
import StrangerThings from './StrangerThings'
import Boys from './Boys'
import GOT from './GOT'

class Favorites extends Component{
    render(){
        return(
            <ol>
                <li>The Witcher</li>
                <Witcher />
                <li>The Crown</li>
                <Crown />
                <li>Stranger Things</li>
                <StrangerThings />
                <li>The Boys</li>
                <Boys />
                <li>Game of Thrones</li>
                <GOT />
            </ol>
        )
    }
}

export default Favorites