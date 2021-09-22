import React, { Component } from 'react'
import Colors from './Colors'

class Square extends Component {
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: "purple",
            rainbow: ["Green", "Blue", "Yellow", "Red", "Purple", "Orange"],
            color: "White"
        }
    }
    newColor = () =>{
        var rainbowMath = this.state.rainbow[Math.floor(Math.random() * this.state.rainbow.length)]
        this.setState({color: rainbowMath})
        this.setState()
        }
        
    render(){
        return(
            <>
            <button>Color Changer</button>
                <div
                 className = "square"
                onClick = {this.state.newColor}
                style = {{color: this.state.backgroundColor}}
                >

                </div>
            </>
        )
    }
}
export default Square