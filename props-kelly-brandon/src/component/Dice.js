import { Component } from "react"

export default class Dice extends Component{
    render(){
        return(
            <>
            <div onClick= {this.props.click}>
            <h1>dice roll</h1>
            <h1>{this.props.result}</h1>
            </div>
            </>
        )
    }
}






