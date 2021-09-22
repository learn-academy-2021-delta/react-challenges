import React, { Component } from 'react'
import Square from './Square'

class Colors extends Component {
    constructor(props){
        super(props)
        this.state = {
            rainbow: ["Green", "Blue", "Yellow", "Red", "Purple", "Orange"],
            color: "White"
        }
    }
    newColor = () =>{
        var rainbowMath = this.state.rainbow[Math.floor(Math.random() * this.state.rainbow.length)]
        this.setState({color: rainbowMath})
    }
    render() {
        return(
            <>
                <h1>This is the colors page</h1>
            </>
        )
    }
}
export default Colors