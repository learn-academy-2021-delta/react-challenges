import React, { Component } from 'react'

class Square extends Component{
    constructor(props){
        super(props)
        this.state = {
            color: "green"
        }
    }
    changeColor = () => {
        this.setState({color: "red"})
    } 
  render(){
      console.log(this.state.color)
    return(
      <>
        
        <div 
        className="square"
        onClick= {this.changeColor}
        style={ {color: this.state.color}} >
            <p>Hello World</p>
        </div>
      </>
    )
  }
}

export default Square